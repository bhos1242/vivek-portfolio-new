import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Briefcase } from "lucide-react"

const experiences = [
  {
    company: "Navibyte Innovations",
    position: "Co-Founder",
    duration: "Jan 2025 – Present",
    location: "Pune, India",
    type: "Current",
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
    achievements: [
      "Founded and developed service-based business solutions for local enterprises.",
      "Managed end-to-end project delivery and client relationship management.",
      "Gained valuable entrepreneurial experience in business operations and strategy.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-secondary/20 via-secondary/10 to-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            Professional Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Career Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            A journey of entrepreneurship, innovation, and technical leadership
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-muted"></div>

          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full border-4 border-background ${
                    exp.type === 'Current' ? 'bg-primary shadow-lg shadow-primary/30' : 'bg-muted'
                  }`}>
                    {exp.type === 'Current' && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30"></div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-muted/50 bg-background/50 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 mb-1">
                            <Building className="h-4 w-4 text-primary" />
                            <CardTitle className="text-xl text-primary">{exp.company}</CardTitle>
                            {exp.type === 'Current' && (
                              <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                                Current
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                            <p className="text-lg font-semibold text-foreground">{exp.position}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-2 text-sm">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="mr-2 h-4 w-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="mr-2 h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start group">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                            <span className="text-foreground text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
              <h3 className="text-xl font-semibold mb-2">Looking for a dedicated team member?</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                I'm passionate about building innovative solutions and driving business growth through technology
              </p>
              <Badge variant="outline" className="px-4 py-2">
                <Briefcase className="mr-2 h-4 w-4" />
                Open to New Opportunities
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
