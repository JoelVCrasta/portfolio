interface ButtonProps {
  text: string
  className?: string
}

const Button = ({ text, className }: ButtonProps) => {
  return (
    <button
      className={`relative px-4 py-3 bg-foreground text-background ${className}`}
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
