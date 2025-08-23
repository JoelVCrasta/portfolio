import CornerSquares from "@/components/CornerSquares"

interface ButtonProps {
  text: string
  className?: string
  type?: "button" | "submit" | "reset"
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({
  text,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`relative px-4 py-3 bg-foreground text-background hover:scale-105 transition ${className}`}
      type={type}
      onClick={onClick}
    >
      <CornerSquares className="bg-background" />

      <div className="font-pixelify">{text}</div>
    </button>
  )
}

export default Button
