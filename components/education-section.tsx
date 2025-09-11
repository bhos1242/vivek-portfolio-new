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
    <section id="education" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-secondary/15 via-background to-secondary/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            Educational Background
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Academic Excellence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            A solid foundation in computer applications and ongoing pursuit of advanced knowledge
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>
          
          <div className="space-y-8 lg:space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline Node */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full ring-4 ring-primary/20 ring-offset-4 ring-offset-background hidden md:block z-10"></div>
                
                {/* Education Card */}
                <div className="md:ml-20">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-muted/50 bg-background/50 backdrop-blur-sm overflow-hidden">
                    <div className="relative">
                      {/* Year Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <Badge variant="secondary" className="bg-primary/10 text-primary font-semibold">
                          {edu.period}
                        </Badge>
                      </div>
                      
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4 pr-20">
                          <div className="p-3 rounded-lg flex-shrink-0 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <GraduationCap className="h-6 w-6 text-primary" />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 leading-tight">
                              {edu.degree}
                            </CardTitle>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="h-4 w-4 flex-shrink-0" />
                              <p className="font-medium">{edu.institution}</p>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      {/* Progress Indicator for Current Education */}
                      {index === 0 && (
                        <CardContent className="pt-0">
                          <div className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                            <div className="flex items-center gap-2 text-primary text-sm font-medium">
                              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                              Currently Pursuing
                            </div>
                          </div>
                        </CardContent>
                      )}
                    </div>
                  </Card>
                </div>
                
                {/* Mobile Timeline Connector */}
                {index < education.length - 1 && (
                  <div className="md:hidden flex justify-center py-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-primary/30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Timeline End */}
          <div className="absolute left-8 bottom-0 w-4 h-4 bg-gradient-to-br from-primary/30 to-transparent rounded-full hidden md:block"></div>
        </div>
      </div>
    </section>
  )
}
