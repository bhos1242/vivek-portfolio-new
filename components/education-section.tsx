import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Modern College of Engineering, Pune",
    period: "2024–2026",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Modern College, Pune",
    period: "2021–2024",
  },
  {
    degree: "Higher Secondary Certificate (12th)",
    institution: "Pemraj Sarda College, Ahilyanagar",
    period: "2020",
  },
  {
    degree: "Secondary School Certificate (10th)",
    institution: "Shri Chhatrapati Shivaji Vidyalaya, Ghogargon",
    period: "2018",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="app-section bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-6">
          <div className="space-y-2 max-w-2xl">
            <Badge variant="outline" className="px-4 py-1 rounded-full border-primary/30 text-primary">
              Degrees & Certs
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Academic <span className="text-gradient">Base</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((edu, index) => (
            <Card key={index} className="compact-card group border-none bg-muted/30">
              <CardContent className="p-4 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-black text-base leading-tight truncate group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    {index === 0 && (
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" title="Active" />
                    )}
                  </div>
                  <p className="text-xs font-bold text-muted-foreground truncate">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 pt-1">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
