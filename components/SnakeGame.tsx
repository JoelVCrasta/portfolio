"use client"

import Image from "next/image"
import { useState, useEffect, useRef, useCallback } from "react"
import CornerSquares from "@/components/CornerSquares"

type Coord = { x: number; y: number }

const canvasSize = 400
const gridSize = 20
const tileCount = canvasSize / gridSize

const getRandomPosition = (snake: Coord[] = []): Coord => {
  let pos: Coord
  do {
    pos = {
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount),
    }
  } while (snake.some((s) => s.x === pos.x && s.y === pos.y)) // avoid snake body
  return pos
}

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const [snake, setSnake] = useState<Coord[]>([{ x: 10, y: 10 }])
  const [food, setFood] = useState<Coord>(getRandomPosition())
  const [dir, setDir] = useState<Coord>({ x: 0, y: 0 })
  const [nextDir, setNextDir] = useState<Coord>({ x: 0, y: 0 })
  const [score, setScore] = useState<number>(0)
  const [gameOver, setGameOver] = useState<boolean>(false)
  const [started, setStarted] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  // resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // draw snake + food
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.setTransform(gridSize, 0, 0, gridSize, 0, 0)
    ctx.clearRect(0, 0, tileCount, tileCount)

    // food
    ctx.fillStyle = "#834FA6"
    ctx.fillRect(food.x, food.y, 1, 1)

    // snake
    ctx.fillStyle = "#4b2e12"
    for (const segment of snake) {
      ctx.fillRect(segment.x, segment.y, 1, 1)
    }
  }, [snake, food])

  // input handling
  useEffect(() => {
    if (!started || gameOver) return

    const handleKeyDown = (e: KeyboardEvent) => {
      let newDir: Coord | null = null
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault()
          if (dir.y === 0) newDir = { x: 0, y: -1 }
          break
        case "ArrowDown":
          e.preventDefault()
          if (dir.y === 0) newDir = { x: 0, y: 1 }
          break
        case "ArrowLeft":
          e.preventDefault()
          if (dir.x === 0) newDir = { x: -1, y: 0 }
          break
        case "ArrowRight":
          e.preventDefault()
          if (dir.x === 0) newDir = { x: 1, y: 0 }
          break
      }
      if (newDir) setNextDir(newDir)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [dir, started, gameOver])

  // game loop
  useEffect(() => {
    if (!started || gameOver) return

    const interval = setInterval(
      () => {
        setSnake((prevSnake) => {
          const newDir = nextDir
          setDir(newDir)

          const head = prevSnake[0]
          const newHead = { x: head.x + newDir.x, y: head.y + newDir.y }

          // collision checks
          if (
            newHead.x < 0 ||
            newHead.x >= tileCount ||
            newHead.y < 0 ||
            newHead.y >= tileCount ||
            prevSnake.some((s) => s.x === newHead.x && s.y === newHead.y)
          ) {
            setGameOver(true)
            return prevSnake
          }

          const newSnake = [newHead, ...prevSnake]

          if (newHead.x === food.x && newHead.y === food.y) {
            setScore((s) => s + 1)
            setFood(getRandomPosition(newSnake))
          } else {
            newSnake.pop()
          }

          return newSnake
        })
      },
      isMobile ? 200 : 140
    )

    return () => clearInterval(interval)
  }, [nextDir, started, gameOver, isMobile, food])

  // reset
  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }])
    setDir({ x: 0, y: 0 })
    setFood(getRandomPosition())
    setScore(0)
    setGameOver(false)
    setStarted(false)
  }

  // mobile controls
  const handleTouchDir = (direction: "up" | "down" | "left" | "right") => {
    if (!started) setStarted(true)
    switch (direction) {
      case "up":
        if (dir.y === 0) setDir({ x: 0, y: -1 })
        break
      case "down":
        if (dir.y === 0) setDir({ x: 0, y: 1 })
        break
      case "left":
        if (dir.x === 0) setDir({ x: -1, y: 0 })
        break
      case "right":
        if (dir.x === 0) setDir({ x: 1, y: 0 })
        break
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-2 md:p-5 border-4 lg:w-4/12 md:w-1/2 mt-16 md:mt-0 relative">
      <CornerSquares className="bg-foreground" />
      <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full">
        <p className="text-2xl font-voxel font-bold">Score: {score}</p>
        <p className="text-foreground text-lg font-pixelify">
          Use the arrows to play!
        </p>
      </div>

      <canvas
        ref={canvasRef}
        width={canvasSize}
        height={canvasSize}
        className="bg-accent border-3 shadow-lg relative w-full aspect-square"
      />

      {/* play button */}
      {!started && !gameOver && (
        <button
          onClick={() => {
            setDir({ x: 0, y: -1 })
            setNextDir({ x: 0, y: -1 })
            setStarted(true)
          }}
          className="bg-foreground text-background px-6 py-2 font-pixelify text-3xl border-4 hover:brightness-110 transition absolute"
        >
          Play
        </button>
      )}

      {/* reset button */}
      {gameOver && (
        <div className="absolute text-center bg-foreground py-2 px-8">
          <p className="text-background text-3xl font-pixelify mb-2">
            Game Over
          </p>
          <button
            onClick={resetGame}
            className="flex justify-center items-center w-full cursor-pointer"
          >
            <p className="text-background text-2xl font-voxel">Restart</p>
            <Image
              src="/pixel-chevron.png"
              alt="Restart"
              width={32}
              height={32}
              className="rotate-90"
            />
          </button>
        </div>
      )}

      {/* Mobile Controls */}
      {isMobile && (
        <div className="mt-4 flex items-center gap-2 lg:hidden">
          <button
            onClick={() => handleTouchDir("left")}
            className="bg-foreground text-background px-5 py-1"
          >
            ←
          </button>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleTouchDir("up")}
              className="bg-foreground text-background px-6 py-1"
            >
              ↑
            </button>
            <button
              onClick={() => handleTouchDir("down")}
              className="bg-foreground text-background px-6 py-1"
            >
              ↓
            </button>
          </div>
          <button
            onClick={() => handleTouchDir("right")}
            className="bg-foreground text-background px-5 py-1"
          >
            →
          </button>
        </div>
      )}
    </div>
  )
}
