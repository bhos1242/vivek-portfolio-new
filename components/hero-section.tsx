"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Github, Linkedin, ExternalLink, ChevronDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-background to-secondary/5 pt-16 sm:pt-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          <div className="text-center lg:text-left order-2 lg:order-1 space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4 text-sm px-4 py-2 animate-pulse">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></span>
                Available for opportunities
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                Hi, I'm{" "}
                <span className="text-primary font-extrabold">
                  Vivek Bhos
                </span>
              </h1>
              
              <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground space-y-2 max-w-2xl">
                <p className="font-medium">Full-Stack Web Developer</p>
                <p className="text-base sm:text-lg">Co-Founder • Navibyte Innovations • MCA Student</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 group text-base px-8 py-3"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover:bg-secondary/50 transition-all duration-300 bg-transparent border-2 text-base px-8 py-3"
              >
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
            </div>

            <div className="flex gap-3 justify-center lg:justify-start">
              <Button 
                variant="ghost" 
                size="icon" 
                asChild 
                className="hover:bg-primary/10 hover:scale-110 transition-all duration-300 w-12 h-12"
              >
                <a href="https://github.com/vivekbhos" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                asChild 
                className="hover:bg-primary/10 hover:scale-110 transition-all duration-300 w-12 h-12"
              >
                <a href="https://linkedin.com/in/vivekbhos" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                asChild 
                className="hover:bg-primary/10 hover:scale-110 transition-all duration-300 w-12 h-12"
              >
                <a href="https://navibyte.in" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-88 lg:h-88 rounded-full overflow-hidden border-4 border-background shadow-lg group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/professional-headshot-of-young-indian-software-dev.jpg"
                    alt="Vivek Bhos - Full Stack Developer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 352px"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/60 rounded-full animate-ping delay-500"></div>
              <div className="absolute bottom-1/4 -right-6 w-3 h-3 bg-accent/60 rounded-full animate-ping delay-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="rounded-full hover:bg-primary/10 transition-colors"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}
