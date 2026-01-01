"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Code, Mail, Home, User, Briefcase, FolderOpen, GraduationCap, ChevronUp } from "lucide-react"

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setIsScrolled(scrolled)
      setShowScrollTop(window.scrollY > 500)

      const sections = navItems.map((item) => ({
        id: item.href.substring(1),
        href: item.href
      }))

      let current = "hero"
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section.id
            break
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation - Pill Style */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 hidden md:block ${isScrolled
            ? "w-[90%] max-w-2xl py-2 px-4 glass-morphism rounded-full shadow-2xl"
            : "w-full max-w-6xl py-4 px-8 bg-transparent"
          }`}
      >
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection("#hero")}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <Code className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg hidden lg:inline">Vivek Bhos</span>
          </div>

          <div className="flex items-center gap-1 bg-muted/20 p-1 rounded-full">
            {navItems.slice(0, 4).map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item.name}
                </button>
              )
            })}
          </div>

          <Button
            size="sm"
            onClick={() => scrollToSection("#contact")}
            className="rounded-full shadow-lg"
          >
            Connect
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation - Bottom Bar */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] glass-morphism z-50 md:hidden rounded-2xl shadow-2xl border border-white/20 px-6 py-3">
        <div className="flex justify-between items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            const Icon = item.icon
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`flex flex-col items-center gap-1 transition-all ${isActive ? "text-primary scale-110" : "text-muted-foreground opacity-70"
                  }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[10px] font-medium uppercase tracking-wider">{item.name}</span>
                {isActive && (
                  <div className="w-1 h-1 bg-primary rounded-full" />
                )}
              </button>
            )
          })}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="flex flex-col items-center gap-1 text-muted-foreground opacity-70">
                <Menu className="h-5 w-5" />
                <span className="text-[10px] font-medium uppercase tracking-wider">More</span>
              </button>
            </SheetTrigger>
            <SheetContent side="bottom" className="rounded-t-3xl h-[40vh]">
              <SheetTitle className="text-left mb-6 font-bold text-xl">Overview</SheetTitle>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-20 rounded-2xl flex flex-col gap-2" onClick={() => scrollToSection("#education")}>
                  <GraduationCap className="h-5 w-5" />
                  Education
                </Button>
                <Button variant="outline" className="h-20 rounded-2xl flex flex-col gap-2" onClick={() => scrollToSection("#experience")}>
                  <Briefcase className="h-5 w-5" />
                  Work
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Scroll to Top */}
      {showScrollTop && (
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          size="icon"
          className="fixed bottom-24 right-6 z-40 rounded-full shadow-2xl bg-primary hover:scale-110 transition-transform hidden md:flex"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </>
  )
}

