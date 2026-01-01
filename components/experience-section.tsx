import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Building, Briefcase, ChevronRight, Clock, Target, ExternalLink } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

const experiences = [
  {
    company: "Modern College of Arts, Science & Commerce",
    position: "Industry Expert — Board of Studies",
    duration: "2025 – Present",
    location: "Pune, India",
    type: "Current",
    website: "https://www.moderncollegepune.edu.in",
    achievements: [
      "Appointed as Industry Expert on the Board of Studies to advise curriculum alignment with industry needs.",
      "Collaborating with faculty to review course content, projects, and assessment methods for software engineering programs.",
    ],
  },
  {
    company: "Navibyte Innovations",
    position: "Co-Founder",
    duration: "Jan 2025 – Present",
    location: "Pune, India",
    type: "Current",
    website: "https://www.navibyte.in",
    achievements: [
      "Leading technical strategy and product development for innovative web solutions.",
      "Building scalable full-stack applications using modern technologies and best practices.",
      "Driving business growth through technology innovation and strategic partnerships.",
    ],
  },
  {
    company: "My Abhyasika",
    position: "Co-Founder",
    duration: "2024 – Present",
    location: "Pune, India",
    type: "Current",
    website: "https://www.abhyasika.online",
    achievements: [
      "Built a cloud-based study-space platform with real-time booking and automated payments.",
      "Integrated WhatsApp/SMS notifications and analytics dashboard for seat optimization.",
      "Improved operational efficiency by 30% through data-driven insights and automation.",
    ],
  },
  {
    company: "Work4u Services",
    position: "Co-Founder",
    duration: "2023 – 2024",
    location: "Pune, India",
    type: "Previous",
    website: "https://www.work4uservices.in",
    achievements: [
      "Founded and developed service-based business solutions for local enterprises.",
      "Managed end-to-end project delivery and client relationship management.",
      "Gained valuable entrepreneurial experience in business operations and strategy.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="app-section bg-muted/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="outline" className="px-4 py-1 rounded-full border-primary/30 text-primary">
              Work History
            </Badge>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Professional <span className="text-gradient">Journey</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="compact-card group flex flex-col justify-between border-none bg-muted/30">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-lg leading-tight group-hover:text-primary transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-sm font-bold text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  {exp.type === "Current" && (
                    <Badge className="bg-primary/20 text-primary border-none text-[10px] font-black uppercase px-2 py-0.5 animate-pulse">
                      Active
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </div>
                </div>

                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground leading-snug">{achievement}</p>
                    </div>
                  ))}
                </div>

                {index === 0 && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="rounded-full text-xs font-bold hover-lift">
                        <Clock className="w-3.5 h-3.5 mr-2" />
                        View Appointment Letter
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl w-full p-4">
                      <DialogTitle className="sr-only">Appointment Letter</DialogTitle>
                      <div className="relative h-[70vh] w-full rounded-2xl overflow-hidden bg-white shadow-2xl">
                        <Image src="/iebos.jpg" alt="Appointment Letter" fill className="object-contain" />
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>

              <div className="pt-4 mt-auto">
                <Button variant="ghost" size="sm" className="p-0 h-auto font-black text-xs uppercase tracking-tighter hover:bg-transparent hover:text-primary group/link" asChild>
                  <a href={exp.website} target="_blank" rel="noopener noreferrer">
                    Company Website <ExternalLink className="ml-1 w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
