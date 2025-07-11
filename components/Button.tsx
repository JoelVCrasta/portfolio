interface ButtonProps {
  text: string
  href: string
}

const Button = (props: ButtonProps) => {
  const { text, href } = props
  return (
    <a
      href={href}
      className="w-36 md:w-44 h-10 border-1 border-accent flex justify-center items-center hover:bg-lime-300 hover:text-purple-900 transition-all duration-200"
    >
      {text}
    </a>
  )
}

export default Button
