import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react"

const certifications = [
  {
    title: "HackerRank CSS Assessment",
    issuer: "HackerRank",
    year: "2024",
    category: "Frontend",
    credentialId: "CSS-2024-001",
    verified: true
  },
  {
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    issuer: "Udemy",
    year: "2023",
    category: "Programming",
    credentialId: "PYTHON-2023-100D",
    verified: true
  },
  {
    title: "EF SET English Certificate – C2 Proficient",
    issuer: "Education First",
    year: "2023",
    category: "Language",
    credentialId: "EF-C2-2023",
    verified: true
  }
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            Professional Certifications
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Continuous Learning
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Committed to staying current with industry standards and emerging technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-muted/50 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Award className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  {cert.verified && (
                    <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                
                <CardTitle className="text-lg text-primary group-hover:text-primary/80 transition-colors leading-tight">
                  {cert.title}
                </CardTitle>
                
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{cert.year}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {cert.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium">Credential ID: </span>
                    <span className="font-mono">{cert.credentialId}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors font-medium">
                      <ExternalLink className="h-3 w-3" />
                      View Certificate
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Stats */}
        <div className="mt-12 lg:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <div className="text-2xl font-bold text-primary mb-2">{certifications.length}+</div>
              <div className="text-sm text-muted-foreground">Verified Certifications</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/30 border border-secondary/30">
              <div className="text-2xl font-bold text-foreground mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Completion Rate</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/20 border border-accent/30">
              <div className="text-2xl font-bold text-foreground mb-2">2024</div>
              <div className="text-sm text-muted-foreground">Latest Certification</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
            <h3 className="text-xl font-semibold mb-2">Commitment to Excellence</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              I regularly update my skills through courses, certifications, and hands-on projects to stay at the forefront of technology
            </p>
            <Badge variant="outline" className="px-4 py-2">
              <Award className="mr-2 h-4 w-4" />
              Always Learning
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
