"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Menu, X, Code, Mail, Home, User, Briefcase, FolderOpen, GraduationCap, Award, ChevronUp } from "lucide-react"

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Certifications", href: "#certifications", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
      setShowScrollTop(window.scrollY > 500)

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))

      // Update active section with better detection
      const sections = navItems.map((item) => ({
        id: item.href.substring(1),
        href: item.href
      }))
      
      let current = "hero"
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Section is considered active if it's in the top half of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section.id
            break
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const navHeight = 80 // Account for fixed navigation
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ 
        top: elementPosition, 
        behavior: "smooth" 
      })
    }
    setIsMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/98 backdrop-blur-lg border-b border-border shadow-xl" 
            : "bg-background/95 backdrop-blur-md shadow-lg"
        }`}
      >
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-muted/30">
          <div 
            className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 lg:py-4">
            {/* Enhanced Logo/Brand */}
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => scrollToSection("#hero")}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-md border border-primary/20">
                  <Code className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Vivek Bhos
                </span>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 bg-background border border-border rounded-full p-1 shadow-md">
              {navItems.slice(0, -1).map((item) => {
                const isActive = activeSection === item.href.substring(1)
                const Icon = item.icon
                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    size="sm"
                    className={`relative rounded-full px-4 py-2 transition-all duration-300 ${
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-md" 
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => scrollToSection(item.href)}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Button>
                )
              })}
            </div>

            {/* Enhanced Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                size="sm"
                onClick={() => scrollToSection("#contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 border border-primary/20"
              >
                <Mail className="mr-2 h-4 w-4" />
                Let's Talk
              </Button>
            </div>

            {/* Enhanced Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="lg:hidden hover:bg-primary hover:text-primary-foreground transition-colors border-border"
                >
                  <Menu className="h-5 w-5" />
                  {activeSection !== "hero" && (
                    <div className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></div>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[320px] sm:w-[380px] bg-white border-l border-border"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Enhanced Mobile Header */}
                  <div className="flex items-center justify-between py-6 border-b border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                        <Code className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="font-bold text-primary">Navigation</span>
                        <div className="text-xs text-muted-foreground">Section {navItems.findIndex(item => item.href.substring(1) === activeSection) + 1} of {navItems.length}</div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Navigation Links */}
                  <div className="flex flex-col space-y-1 py-6 flex-1">
                    {navItems.map((item, index) => {
                      const isActive = activeSection === item.href.substring(1)
                      const Icon = item.icon
                      return (
                        <Button
                          key={item.name}
                          variant="ghost"
                          className={`justify-start text-left h-14 rounded-xl transition-all duration-300 ${
                            isActive 
                              ? "bg-primary text-primary-foreground shadow-md" 
                              : "hover:bg-muted/50"
                          }`}
                          onClick={() => scrollToSection(item.href)}
                        >
                          <div className="flex items-center w-full">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                              isActive ? "bg-primary-foreground/20" : "bg-muted"
                            }`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">{item.name}</div>
                              <div className="text-xs opacity-70">
                                {index === 0 ? "Welcome section" :
                                 index === 1 ? "About me" :
                                 index === 2 ? "Technical expertise" :
                                 index === 3 ? "Work history" :
                                 index === 4 ? "Portfolio showcase" :
                                 index === 5 ? "Academic background" :
                                 index === 6 ? "Achievements" :
                                 "Get in touch"}
                              </div>
                            </div>
                            {isActive && (
                              <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                            )}
                          </div>
                        </Button>
                      )
                    })}
                  </div>

                  {/* Enhanced Mobile Footer */}
                  <div className="space-y-4 py-6 border-t border-border/50">
                    <Button
                      className="w-full h-12 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
                      onClick={() => scrollToSection("#contact")}
                    >
                      <Mail className="mr-3 h-5 w-5" />
                      Start a Conversation
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-6 right-6 z-40 rounded-full shadow-2xl bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-110"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </>
  )
}
