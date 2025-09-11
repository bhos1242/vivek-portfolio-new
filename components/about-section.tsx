import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Building, GraduationCap, Award, Heart, Mail } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: <Building className="h-5 w-5" />,
      title: "Co-Founder",
      description: "Navibyte Innovations Pvt. Ltd."
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "MCA Student",
      description: "Modern College of Engineering"
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Full-Stack",
      description: "Web Developer"
    }
  ]

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-secondary/20 via-background to-secondary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            Passionate Developer & Entrepreneur
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground mb-6">
                I'm a passionate full-stack web developer and Co-Founder of{" "}
                <span className="text-primary font-semibold">Navibyte Innovations Pvt. Ltd.</span>
                {" "}Currently pursuing my <span className="font-semibold">Master of Computer Applications (MCA)</span> at{" "}
                <span className="font-semibold">Modern College of Engineering, Pune</span>.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                With a strong foundation in both frontend and backend technologies, I specialize in building 
                scalable, user-friendly web applications. I'm passionate about continuous learning and 
                staying updated with the latest technologies to deliver innovative solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1.5">
                <Heart className="mr-2 h-4 w-4" />
                Problem Solver
              </Badge>
              <Badge variant="secondary" className="px-3 py-1.5">
                <Award className="mr-2 h-4 w-4" />
                Team Leader
              </Badge>
              <Badge variant="secondary" className="px-3 py-1.5">
                <Code className="mr-2 h-4 w-4" />
                Clean Code Advocate
              </Badge>
            </div>

            <Button size="lg" className="w-full sm:w-auto">
              <Mail className="mr-2 h-5 w-5" />
              Let's Collaborate
            </Button>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-muted/50 bg-background/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
