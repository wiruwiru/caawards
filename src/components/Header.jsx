import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const submenuTimerRef = useRef(null)
  const submenuRef = useRef(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSubmenu = (href) => {
    setOpenSubmenu(openSubmenu === href ? null : href)
  }

  const handleSubmenuEnter = (href) => {
    clearTimeout(submenuTimerRef.current)
    setActiveSubmenu(href)
  }

  const handleSubmenuLeave = () => {
    submenuTimerRef.current = setTimeout(() => {
      setActiveSubmenu(null)
    }, 300)
  }

  const menuItems = [
    { href: "/acerca", label: "Información" },
    { href: "/sponsors", label: "Sponsors" },
    {
      href: "/picantes",
      label: "Ganadores",
      subItems: [
        { href: "/picantes/2023", label: "2023" },
        { href: "/picantes/2022", label: "2022" },
        { href: "/picantes/2021", label: "2021" },
      ],
    },
    {
      href: "/ternas",
      label: "Ternas",
      subItems: [
        { href: "/ternas/2023", label: "2023" },
        { href: "/ternas/2022", label: "2022" },
        { href: "/ternas/2021", label: "2021" },
      ],
    },
  ]

  useEffect(() => {
    return () => {
      if (submenuTimerRef.current) {
        clearTimeout(submenuTimerRef.current)
      }
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md font-[-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,sans-serif]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/assets/images/mainlogo.png" 
              alt="CA Awards" 
              width={60} 
              height={60} 
              className="mr-4" />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <li key={item.href} className="relative group"
                  onMouseEnter={() => handleSubmenuEnter(item.href)}
                  onMouseLeave={handleSubmenuLeave}>
                  <div className="flex items-center">
                    <Link 
                      href={item.href} 
                      className="text-white hover:text-gray-300 transition-colors text-base">
                      {item.label}
                    </Link>
                    {item.subItems && (
                      <ChevronDown 
                        className={`ml-1 w-4 h-4 text-white transition-transform ${
                          activeSubmenu === item.href ? 'rotate-180' : ''
                        }`} />
                    )}
                  </div>
                  {item.subItems && (
                    <ul 
                      ref={submenuRef}
                      className={`absolute left-0 mt-2 bg-black/80 backdrop-blur-sm rounded-md ${
                        activeSubmenu === item.href ? 'block' : 'hidden'
                      } min-w-full`}>
                      {item.subItems.map((subItem) => (
                        <li key={subItem.href} className="border-b border-gray-700 last:border-none">
                          <Link 
                            href={subItem.href} 
                            className="text-white hover:text-gray-300 transition-colors text-sm whitespace-nowrap block px-4 py-2">
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Image src="/assets/images/flag_argentina.svg" alt="CA Awards" width={30} height={30} />
            <button onClick={toggleMenu} className="md:hidden text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-md">
          <ul className="container mx-auto px-4 py-2 space-y-2 flex flex-col items-center">
            {menuItems.map((item) => (
              <li key={item.href}>
                {item.subItems ? (
                  <div>
                    <button 
                      onClick={() => toggleSubmenu(item.href)}
                      className="w-full inline-flex items-center justify-center text-white hover:text-gray-300 transition-colors text-base py-2">
                      <span>{item.label}</span>
                      <ChevronDown 
                        className={`ml-1 w-4 h-4 transition-transform ${
                          openSubmenu === item.href ? 'rotate-180' : '' }`} />
                    </button>
                    <ul className={`space-y-2 overflow-hidden transition-all duration-200 w-full ${ openSubmenu === item.href ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0' }`}>
                      {item.subItems.map((subItem) => (
                        <li key={subItem.href} className="border-b border-gray-700/50 last:border-none">
                          <Link 
                            href={subItem.href} 
                            className="text-white hover:text-gray-300 transition-colors text-sm block py-2 text-center w-full"
                            onClick={toggleMenu}>
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link 
                    href={item.href} 
                    className="text-white hover:text-gray-300 transition-colors text-base block py-2 text-center"
                    onClick={toggleMenu}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}