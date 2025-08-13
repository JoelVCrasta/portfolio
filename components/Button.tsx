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
      <div className="absolute w-2 h-2 bg-background top-0 right-0" />
      <div className="absolute w-2 h-2 bg-background top-0 left-0" />
      <div className="absolute w-2 h-2 bg-background bottom-0 right-0" />
      <div className="absolute w-2 h-2 bg-background bottom-0 left-0" />

      <div className="font-pixelify">{text}</div>
    </button>
  )
}

export default Button
