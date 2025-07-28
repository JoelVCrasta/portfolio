"use client"

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

    ctx.fillStyle = "red"
    ctx.fillRect(food.x, food.y, 1, 1)

    ctx.fillStyle = "lime"
    for (const segment of snake) {
      ctx.fillRect(segment.x, segment.y, 1, 1)
    }
  }, [snake, food])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!started) setStarted(true)

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
    }, 100)

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
    <div className="flex flex-col items-center justify-center p-2 md:p-5 border-4 w-5/12">
      <h1 className="text-2xl font-voxel font-bold">Score: {score}</h1>

      <canvas
        ref={canvasRef}
        width={canvasSize}
        height={canvasSize}
        className="bg-neutral-800 border-2 border-gray-600"
      />

      {!started && !gameOver && (
        <p className="mt-4 text-gray-400">Use arrows or tap to start</p>
      )}

      {gameOver && (
        <div className="mt-4 text-center">
          <p className="text-red-500 text-xl mb-2">Game Over</p>
          <button
            onClick={resetGame}
            className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
          >
            Restart
          </button>
        </div>
      )}

      {/* Mobile controls */}
      <div className="mt-6 flex flex-col items-center gap-2 md:hidden">
        <button
          onClick={() => handleTouchDir("up")}
          className="bg-gray-300 text-black px-6 py-2 rounded"
        >
          ↑
        </button>
        <div className="flex gap-4">
          <button
            onClick={() => handleTouchDir("left")}
            className="bg-gray-300 text-black px-6 py-2 rounded"
          >
            ←
          </button>
          <button
            onClick={() => handleTouchDir("down")}
            className="bg-gray-300 text-black px-6 py-2 rounded"
          >
            ↓
          </button>
          <button
            onClick={() => handleTouchDir("right")}
            className="bg-gray-300 text-black px-6 py-2 rounded"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}
