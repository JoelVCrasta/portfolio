"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Projects", href: "projects" },
    { label: "Tech", href: "tech" },
    { label: "Contact", href: "contact" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav>
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-5">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={`#${link.href}`}
            onClick={(e) => handleScroll(e, link.href)}
            className="text-background font-pixelify text-xl hover:text-accent transition duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(true)} className="text-background">
          <Menu size={32} />
        </button>

        {/* Mobile Full-Screen Menu with animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 flex flex-col items-center justify-center space-y-6 bg-[#4A280A] z-50"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-background"
              >
                <X size={32} />
              </button>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={`#${link.href}`}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-background font-pixelify text-2xl"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
