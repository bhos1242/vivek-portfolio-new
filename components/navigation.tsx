"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Code, Download, Mail } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.substring(1))
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(current || "")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 lg:py-4">
          {/* Logo/Brand */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => scrollToSection("#hero")}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
              Vivek Bhos
            </span>
            <Badge variant="secondary" className="ml-2 text-xs px-2 py-0.5 hidden sm:inline-flex">
              Developer
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant={activeSection === item.href.substring(1) ? "secondary" : "ghost"}
                className={`text-foreground hover:text-primary transition-all duration-200 relative ${
                  activeSection === item.href.substring(1) 
                    ? "bg-primary/10 text-primary" 
                    : "hover:bg-primary/5"
                }`}
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                )}
              </Button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
            <Button
              size="sm"
              onClick={() => scrollToSection("#contact")}
              className="bg-primary hover:bg-primary/90 transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden hover:bg-primary/10 transition-colors"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] sm:w-[350px] bg-background/95 backdrop-blur-md border-l border-border/50"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between py-4 border-b border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                      <Code className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="font-semibold text-primary">Menu</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-2 py-6 flex-1">
                  {navItems.map((item, index) => (
                    <Button
                      key={item.name}
                      variant={activeSection === item.href.substring(1) ? "secondary" : "ghost"}
                      className={`justify-start text-left h-12 ${
                        activeSection === item.href.substring(1) 
                          ? "bg-primary/10 text-primary border-r-2 border-primary" 
                          : "hover:bg-primary/5"
                      }`}
                      onClick={() => scrollToSection(item.href)}
                    >
                      <span className="w-6 text-center text-xs font-medium text-muted-foreground">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <span className="ml-3">{item.name}</span>
                    </Button>
                  ))}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="space-y-3 py-6 border-t border-border/50">
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Download className="mr-3 h-4 w-4" />
                    Download Resume
                  </Button>
                  <Button
                    className="w-full justify-start bg-primary hover:bg-primary/90 transition-all duration-300"
                    onClick={() => scrollToSection("#contact")}
                  >
                    <Mail className="mr-3 h-4 w-4" />
                    Get in Touch
                  </Button>
                </div>

                {/* Mobile Menu Footer */}
                <div className="py-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground text-center">
                    Available for freelance projects
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
