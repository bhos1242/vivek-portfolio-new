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
      {/* Simplified background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-accent/20 to-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center w-full">
          <div className="text-center lg:text-left order-2 lg:order-1 space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4 text-sm px-6 py-3 rounded-full bg-primary/10 text-primary border-primary/20 shadow-lg">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Available for opportunities
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                Hi, I'm{" "}
                <span className="text-green-600 font-extrabold">
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
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-colors duration-300 text-base px-8 py-4 rounded-full font-semibold"
              >
                <a href="#contact">
                  <Mail className="mr-3 h-5 w-5" />
                  Let's Connect
                </a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start pt-2">
              <Button 
                variant="outline" 
                size="icon" 
                asChild 
                className="transition-colors duration-300 w-12 h-12 rounded-full border-2"
              >
                <a href="https://github.com/vivekbhos" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                asChild 
                className="transition-colors duration-300 w-12 h-12 rounded-full border-2"
              >
                <a href="https://linkedin.com/in/vivekbhos" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                asChild 
                className="transition-colors duration-300 w-12 h-12 rounded-full border-2"
              >
                <a href="https://navibyte.in" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Simplified background */}
              <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 rounded-3xl flex items-center justify-center shadow-xl">
                
                <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-[460px] lg:h-[460px] rounded-2xl overflow-hidden border-4 border-white/20 shadow-lg">
                  <Image
                    src="/hero.png"
                    alt="Vivek Bhos - Full Stack Developer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 352px, 460px"
                  />
                </div>
              </div>
              
              {/* Simplified floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="rounded-full hover:bg-primary/10 transition-colors duration-300"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}
