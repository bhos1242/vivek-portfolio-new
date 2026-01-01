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
    <section id="certifications" className="app-section bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="outline" className="px-4 py-1 rounded-full border-primary/30 text-primary">
              <Award className="mr-2 h-3.5 w-3.5" />
              Credentials
            </Badge>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Curated <span className="text-gradient">Acquisitions</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="compact-card group border-none bg-muted/30">
              <CardContent className="p-4 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  {cert.verified && (
                    <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-none text-[8px] font-black uppercase px-2 py-0.5">
                      Verified
                    </Badge>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="font-black text-base leading-tight group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-bold text-muted-foreground">{cert.issuer}</p>
                </div>

                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.year}
                  </div>
                  <div className="text-mono truncate">{cert.credentialId}</div>
                </div>

                <div className="pt-2">
                  <button className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-tighter text-primary hover:opacity-80 transition-opacity">
                    <ExternalLink className="w-3 h-3" />
                    Verify Credential
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
