import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Building, GraduationCap, Award, Heart, Mail, Sparkles } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: <Building className="h-5 w-5" />,
      title: "Co-Founder",
      description: "Navibyte Innovations Private Limited"
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "MCA Student",
      description: "Modern College, Pune"
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Full-Stack",
      description: "Developer"
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "UI/UX",
      description: "Enthusiast"
    }
  ]

  return (
    <section id="about" className="app-section">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="px-4 py-1 rounded-full border-primary/30 text-primary">
                About Me
              </Badge>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                About <span className="text-gradient">Vivek Bhos</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a full-stack developer and entrepreneur based in Pune, India. As the Co-Founder of <a href="https://www.navibyte.in" target="_blank" rel="noopener noreferrer" className="text-foreground font-bold underline decoration-primary/30 underline-offset-4 hover:text-primary transition-colors">Navibyte Innovations Private Limited</a>, I focus on delivering high-quality digital solutions that solve real-world problems.
              </p>
              <p>
                Currently pursuing my Master's in Computer Applications, I mix academic foundations with hands-on experience, building platforms like <a href="https://www.abhyasika.online" target="_blank" rel="noopener noreferrer" className="text-foreground font-bold hover:text-primary transition-colors">My Abhyasika</a>. I specialize in the <span className="text-foreground font-semibold">React & Next.js ecosystem</span>, focusing on clean, performant, and user-centric web applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { label: "Problem Solver", icon: Heart },
                { label: "Team Leader", icon: Award },
                { label: "Clean Code", icon: Code }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50 text-sm font-medium">
                  <item.icon className="w-4 h-4 text-primary" />
                  {item.label}
                </div>
              ))}
            </div>

            <Button size="lg" className="rounded-full px-8 hover-lift" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Let's Collaborate
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="compact-card group border-none shadow-none bg-muted/40 hover:bg-muted/60"
              >
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base">{highlight.title}</h3>
                    <p className="text-xs text-muted-foreground">{highlight.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

