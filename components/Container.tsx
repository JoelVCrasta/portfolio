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
      className={`w-full px-4 sm:px-6 lg:px-8 mx-auto relative z-10 bg-background flex justify-center mt-[100vh]`}
    >
      <div className={`max-w-7xl ${className}`}>{children}</div>
    </div>
  )
}
