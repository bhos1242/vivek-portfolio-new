"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Github, Linkedin, ExternalLink, ChevronDown, Sparkles, ShieldCheck, Instagram } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-[75vh] flex flex-col items-center justify-center pt-12 pb-8 sm:pt-16 sm:pb-10 relative overflow-hidden bg-background"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 text-center lg:text-left space-y-8 animate-in">
            <div className="space-y-4">


              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                Solving <span className="text-gradient">Real-Life</span> Problems
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Hi, I'm <span className="font-bold text-foreground">Vivek Bhos</span>. An entrepreneurial developer dedicated to building scalable solutions that address real-world challenges with innovation and precision.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-muted-foreground/80">
                  <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/5 text-primary py-1 px-3">
                    <Github className="w-3 h-3 mr-1.5" />
                    20+ Projects
                  </Badge>
                  <Badge variant="outline" className="rounded-full border-accent/20 bg-accent/5 text-accent py-1 px-3">
                    <ShieldCheck className="w-3 h-3 mr-1.5" />
                    50+ Achievements
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                asChild
                className="rounded-full px-8 h-12 sm:h-14 text-sm sm:text-base shadow-xl hover-lift bg-primary hover:bg-primary/90"
              >
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </a>
              </Button>
              <div className="flex gap-3 justify-center">
                {[
                  { icon: Github, href: "https://github.com/bhos1242" },
                  { icon: Linkedin, href: "https://linkedin.com/in/vivekbhos" },
                  { icon: Instagram, href: "https://www.instagram.com/vivekbhos_06_07/" },
                  { icon: ExternalLink, href: "https://navibyte.in" }
                ].map((social, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="icon"
                    asChild
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all hover-lift"
                    aria-label={`Connect on ${social.icon.name}`}
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Image Container with Custom Shape */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[320px] lg:h-[320px] rounded-[2rem] overflow-hidden rotate-3 group-hover:rotate-0 transition-all duration-500 shadow-2xl border-8 border-white dark:border-slate-900">
                <Image
                  src="/hero.png"
                  alt="Vivek Bhos"
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  priority
                />
              </div>
              {/* Floating Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block">
        <button
          onClick={scrollToAbout}
          className="p-3 rounded-full glass-morphism hover:bg-primary/10 transition-colors animate-bounce shadow-lg"
          aria-label="Scroll down to About section"
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>
    </section>
  )
}

