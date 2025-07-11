type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none relative z-10 ${className}`}
    >
      {children}
    </div>
  )
}
