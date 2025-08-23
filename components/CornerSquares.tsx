interface CornerSquaresProps {
  className?: string
}

const CornerSquares = ({ className }: CornerSquaresProps) => {
  return (
    <div>
      <div className={`absolute w-2 h-2 ${className} top-0 right-0`} />
      <div className={`absolute w-2 h-2 ${className} top-0 left-0`} />
      <div className={`absolute w-2 h-2 ${className} bottom-0 right-0`} />
      <div className={`absolute w-2 h-2 ${className} bottom-0 left-0`} />
    </div>
  )
}

export default CornerSquares
