"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Github, Linkedin, ExternalLink, ChevronDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 pt-16 sm:pt-20 relative overflow-hidden"
    >
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-accent/20 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          <div className="text-center lg:text-left order-2 lg:order-1 space-y-8 lg:space-y-10">
            <div className="space-y-6">
              <Badge variant="secondary" className="mb-6 text-sm px-6 py-3 rounded-full bg-primary/10 text-primary border-primary/20 animate-pulse shadow-lg">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-ping"></span>
                Available for opportunities
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-primary to-green-600 bg-clip-text text-transparent font-extrabold animate-gradient">
                  Vivek Bhos
                </span>
              </h1>
              
              <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground space-y-3 max-w-2xl">
                <p className="font-medium">Full-Stack Web Developer</p>
                <p className="text-base sm:text-lg">Co-Founder • Navibyte Innovations • MCA Student</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-base px-8 py-4 rounded-full font-semibold"
              >
                <a href="#contact">
                  <Mail className="mr-3 h-5 w-5" />
                  Let's Connect
                </a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <Button 
                variant="outline" 
                size="icon" 
                asChild 
                className="hover:bg-primary/10 hover:scale-110 hover:border-primary/50 transition-all duration-300 w-14 h-14 rounded-full border-2 group"
              >
                <a href="https://github.com/vivekbhos" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 group-hover:text-primary transition-colors" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                asChild 
                className="hover:bg-primary/10 hover:scale-110 hover:border-primary/50 transition-all duration-300 w-14 h-14 rounded-full border-2 group"
              >
                <a href="https://linkedin.com/in/vivekbhos" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 group-hover:text-primary transition-colors" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                asChild 
                className="hover:bg-primary/10 hover:scale-110 hover:border-primary/50 transition-all duration-300 w-14 h-14 rounded-full border-2 group"
              >
                <a href="https://navibyte.in" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-6 w-6 group-hover:text-primary transition-colors" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Enhanced gradient background */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] bg-gradient-to-br from-primary/30 via-primary/20 to-accent/30 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                {/* Inner glow effect */}
                <div className="absolute inset-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl"></div>
                
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[360px] lg:h-[360px] rounded-2xl overflow-hidden border-4 border-white/20 shadow-xl group-hover:scale-105 transition-transform duration-500 z-10">
                  <Image
                    src="/hero.png"
                    alt="Vivek Bhos - Full Stack Developer"
                    fill
                    className="object-cover hover:object-contain transition-all duration-300"
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 360px"
                  />
                </div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-accent to-accent/70 rounded-full animate-pulse delay-500 shadow-lg"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-gradient-to-br from-primary/60 to-accent/60 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/60 rounded-full animate-ping delay-500"></div>
              <div className="absolute bottom-1/4 -right-6 w-3 h-3 bg-accent/60 rounded-full animate-ping delay-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110 group bg-white/5 backdrop-blur-sm border border-primary/20"
        >
          <ChevronDown className="h-6 w-6 group-hover:text-primary transition-colors" />
        </Button>
      </div>
    </section>
  )
}
