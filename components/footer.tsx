"use client"

import { Linkedin, Github, Mail, ArrowUp, Heart, Code, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/vivekbhos/",
      label: "LinkedIn",
      color: "hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20"
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/bhos1242",
      label: "GitHub",
      color: "hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-900/20"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:bhosvivek123@gmail.com",
      label: "Email",
      color: "hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20"
    }
  ]

  return (
    <footer className="bg-gradient-to-t from-secondary/20 to-background border-t border-border/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Vivek Bhos</h3>
              </div>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Full-Stack Developer & Co-Founder passionate about building innovative 
                web solutions that make a difference. Always learning, always creating.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>using Next.js & TypeScript</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <nav className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Let's Connect</h4>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Based in Pune, India
                </p>
                <p className="text-sm text-muted-foreground">
                  Available for freelance projects
                </p>
                <a 
                  href="mailto:bhosvivek123@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Get in touch
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Vivek Bhos. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg text-muted-foreground transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Scroll to Top */}
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              title="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
