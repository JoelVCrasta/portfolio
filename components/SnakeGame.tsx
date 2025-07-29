"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"

type Coord = { x: number; y: number }

const canvasSize = 400
const gridSize = 20
const tileCount = canvasSize / gridSize

const getRandomPosition = (): Coord => ({
  x: Math.floor(Math.random() * tileCount),
  y: Math.floor(Math.random() * tileCount),
})

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const [snake, setSnake] = useState<Coord[]>([{ x: 10, y: 10 }])
  const [food, setFood] = useState<Coord>(getRandomPosition)
  const [dir, setDir] = useState<Coord>({ x: 0, y: 0 })
  const [score, setScore] = useState<number>(0)
  const [gameOver, setGameOver] = useState<boolean>(false)
  const [started, setStarted] = useState<boolean>(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.setTransform(gridSize, 0, 0, gridSize, 0, 0)
    ctx.clearRect(0, 0, tileCount, tileCount)

    ctx.fillStyle = "#834FA6"
    ctx.fillRect(food.x, food.y, 1, 1)

    ctx.fillStyle = "#4b2e12"
    for (const segment of snake) {
      ctx.fillRect(segment.x, segment.y, 1, 1)
    }
  }, [snake, food])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault()
      }

      if (!started && (dir.x !== 0 || dir.y !== 0)) {
        setStarted(true)
      }

      switch (e.key) {
        case "ArrowUp":
          if (dir.y === 0) setDir({ x: 0, y: -1 })
          break
        case "ArrowDown":
          if (dir.y === 0) setDir({ x: 0, y: 1 })
          break
        case "ArrowLeft":
          if (dir.x === 0) setDir({ x: -1, y: 0 })
          break
        case "ArrowRight":
          if (dir.x === 0) setDir({ x: 1, y: 0 })
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [dir, started])

  useEffect(() => {
    if (!started || gameOver) return

    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        const newHead = {
          x: prevSnake[0].x + dir.x,
          y: prevSnake[0].y + dir.y,
        }

        if (
          newHead.x < 0 ||
          newHead.x >= tileCount ||
          newHead.y < 0 ||
          newHead.y >= tileCount
        ) {
          setGameOver(true)
          return prevSnake
        }

        for (const segment of prevSnake) {
          if (segment.x === newHead.x && segment.y === newHead.y) {
            setGameOver(true)
            return prevSnake
          }
        }

        const newSnake = [newHead, ...prevSnake]

        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 1)
          setFood(getRandomPosition())
        } else {
          newSnake.pop()
        }

        return newSnake
      })
    }, 140)

    return () => clearInterval(interval)
  }, [dir, food, gameOver, started])

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }])
    setDir({ x: 0, y: 0 })
    setFood(getRandomPosition())
    setScore(0)
    setGameOver(false)
    setStarted(false)
  }

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
    <div className="flex flex-col items-center justify-center p-2 md:p-5 border-4 lg:w-5/12 w-1/2">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full">
        <p className="text-2xl lg:text-2xl font-voxel font-bold">
          Score: {score}
        </p>

        <p className="text-foreground text-lg lg:text-xl font-pixelify">
          Use the arrows to play!
        </p>
      </div>

      <canvas
        ref={canvasRef}
        width={canvasSize}
        height={canvasSize}
        className="bg-accent border-4 shadow-lg relative w-full aspect-square"
      />

      {!started && !gameOver && (
        <button
          onClick={() => {
            setDir({ x: 0, y: -1 })
            setStarted(true)
          }}
          className="bg-foreground text-background px-6 py-2 font-pixelify text-3xl border-4 hover:brightness-110 transition absolute"
        >
          Play
        </button>
      )}

      {gameOver && (
        <div className="absolute text-center bg-foreground py-2 px-8 transition">
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

      {/* Mobile controls */}
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
    </div>
  )
}
