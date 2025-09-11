import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react"

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Modern College of Engineering, Pune",
    gpa: "8.03",
    period: "2024–2026",
    status: "Current",
    highlights: ["Advanced Software Development", "System Architecture", "Research Methodology"],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Modern College, Pune",
    gpa: "9.19",
    period: "2021–2024",
    status: "Completed",
    highlights: ["First Class with Distinction", "Programming Fundamentals", "Database Management"],
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

        <div className="space-y-6 lg:space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-muted/50 bg-background/50 backdrop-blur-sm ${
                edu.status === 'Current' ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`p-3 rounded-lg flex-shrink-0 ${
                      edu.status === 'Current' 
                        ? 'bg-primary/10 ring-2 ring-primary/20' 
                        : 'bg-muted/50'
                    }`}>
                      <GraduationCap className={`h-6 w-6 ${
                        edu.status === 'Current' ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl text-primary group-hover:text-primary/80 transition-colors">
                          {edu.degree}
                        </CardTitle>
                        {edu.status === 'Current' && (
                          <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                            <BookOpen className="w-3 h-3 mr-1" />
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-foreground font-medium text-lg mb-3">{edu.institution}</p>
                      
                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <Badge 
                            key={highlightIndex}
                            variant="outline" 
                            className="text-xs px-2 py-1 hover:bg-primary/10 transition-colors"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-end gap-3 lg:text-right">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{edu.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <div className="text-right">
                        <div className="text-primary font-bold text-lg">GPA: {edu.gpa}</div>
                        <div className="text-xs text-muted-foreground">
                          {parseFloat(edu.gpa) >= 9.0 ? 'Excellent' : 
                           parseFloat(edu.gpa) >= 8.0 ? 'Very Good' : 'Good'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              {edu.status === 'Current' && (
                <CardContent className="pt-0">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-sm text-muted-foreground text-center">
                      Currently pursuing advanced studies in software architecture, 
                      system design, and emerging technologies
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Academic Achievements Summary */}
        <div className="mt-12 lg:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <div className="text-2xl font-bold text-primary mb-2">8.6+</div>
              <div className="text-sm text-muted-foreground">Overall CGPA</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/30 border border-secondary/30">
              <div className="text-2xl font-bold text-foreground mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years of Study</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/20 border border-accent/30">
              <div className="text-2xl font-bold text-foreground mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Subjects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
          ))}
        </div>
      </div>
    </section>
  )
}
