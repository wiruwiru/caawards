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
    { href: "/picantes", label: "Picantes", },
    { href: "/sponsors", label: "Sponsors", },
    { href: "/ternas/2023", label: "Ternas",
      subItems: [
        { href: "/ternas/2023", label: "2023" },
        { href: "/ternas/2022", label: "2022" },
        { href: "/ternas/2021", label: "2021" },
        { href: "/ternas/2020", label: "2020" },
        { href: "/ternas/2019", label: "2019" },
        { href: "/ternas/2018", label: "2018" },
      ],
    },
    // {
    //   href: "/sponsors",
    //   label: "Sponsors",
    //   subItems: [
    //     { href: "/sponsors/2023", label: "2023" },
    //     { href: "/sponsors/2022", label: "2022" },
    //     { href: "/sponsors/2021", label: "2021" },
    //     { href: "/sponsors/2020", label: "2020" },
    //     { href: "/sponsors/2019", label: "2019" },
    //     { href: "/sponsors/2018", label: "2018" },
    //   ],
    // },
  ]

  useEffect(() => {
    return () => {
      if (submenuTimerRef.current) {
        clearTimeout(submenuTimerRef.current)
      }
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/assets/images/mainlogo.png" alt="CA Awards" width={80} height={60} className="mr-4" />
          </Link>
          <nav className="hidden md:flex ml-6">
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
          <div className="flex items-center space-x-4 ml-auto">
            <Image src="/assets/images/flag_argentina.svg" alt="CA Awards" width={30} height={30} />
            {!isMenuOpen && (
              <button onClick={toggleMenu} className="md:hidden text-white">
                <Menu size={24} />
              </button>
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-sm flex flex-col">
          <div className="container mx-auto px-4 py-4 flex justify-end">
            <button onClick={toggleMenu} className="text-white">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start pt-8">
            <Link href="/" className="mb-8">
              <Image src="/assets/images/mainlogo.png" alt="CA Awards" width={100} height={60} />
            </Link>
            <ul className="container mx-auto px-4 py-2 space-y-6 flex flex-col items-center">
              {menuItems.map((item) => (
                <li key={item.href}>
                  {item.subItems ? (
                    <div>
                      <button 
                        onClick={() => toggleSubmenu(item.href)}
                        className="w-full inline-flex items-center justify-center text-white hover:text-gray-300 transition-colors text-xl py-2">
                        <span>{item.label}</span>
                        <ChevronDown 
                          className={`ml-1 w-4 h-4 transition-transform ${
                            openSubmenu === item.href ? 'rotate-180' : '' }`} />
                      </button>
                      <ul className={`space-y-4 overflow-hidden transition-all duration-200 w-full ${
                        openSubmenu === item.href ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        {item.subItems.map((subItem) => (
                          <li key={subItem.href}>
                            <Link 
                              href={subItem.href} 
                              className="text-white/80 hover:text-white transition-colors text-lg block py-2 text-center w-full"
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
                      className="text-white hover:text-gray-300 transition-colors text-xl block py-2 text-center"
                      onClick={toggleMenu}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}