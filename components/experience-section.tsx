import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Briefcase, ChevronRight, Clock, Target, ExternalLink } from "lucide-react"

const experiences = [
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
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-secondary/20 via-secondary/10 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Mobile-First Timeline */}
        <div className="lg:hidden space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Mobile Timeline Connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-primary/20"></div>
              )}
              
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-muted/50 bg-background/50 backdrop-blur-sm ml-14">
                {/* Timeline Node */}
                <div className="absolute -left-14 top-6 z-10">
                  <div className={`w-6 h-6 rounded-full border-4 border-background flex items-center justify-center ${
                    exp.type === 'Current' ? 'bg-primary shadow-lg shadow-primary/30' : 'bg-muted'
                  }`}>
                    {exp.type === 'Current' && (
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="space-y-3">
                    {/* Status Badge */}
                    {exp.type === 'Current' && (
                      <Badge className="bg-primary/10 text-primary w-fit text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        Currently Working
                      </Badge>
                    )}
                    
                    {/* Company & Position */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Building className="h-5 w-5 text-primary flex-shrink-0" />
                        <a 
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl text-primary group-hover:text-primary/80 transition-colors hover:underline flex items-center gap-2 font-bold"
                        >
                          {exp.company}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <div className="flex items-center gap-2 ml-7">
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                        <p className="text-lg font-semibold text-foreground">{exp.position}</p>
                      </div>
                    </div>
                    
                    {/* Duration & Location */}
                    <div className="flex flex-col sm:flex-row gap-3 ml-7 text-sm">
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
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start group/item hover:bg-muted/30 rounded-lg p-2 -m-2 transition-colors">
                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 mr-3 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                        <span className="text-foreground text-sm leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Main Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-20 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 top-8 transform -translate-x-1/2 z-20">
                  <div className={`w-6 h-6 rounded-full border-4 border-background flex items-center justify-center ${
                    exp.type === 'Current' ? 'bg-primary shadow-lg shadow-primary/30' : 'bg-muted'
                  }`}>
                    {exp.type === 'Current' && (
                      <>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30"></div>
                      </>
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-muted/50 bg-background/50 backdrop-blur-sm overflow-hidden">
                    {/* Current Role Indicator */}
                    {exp.type === 'Current' && (
                      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-primary/20 px-6 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                          <span className="text-primary font-medium text-sm">Currently Active</span>
                        </div>
                      </div>
                    )}

                    <CardHeader className="pb-4">
                      <div className="space-y-4">
                        {/* Company Header */}
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <Building className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <a 
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xl text-primary group-hover:text-primary/80 transition-colors hover:underline flex items-center gap-2 font-bold"
                            >
                              {exp.company}
                              <ExternalLink className="h-4 w-4" />
                            </a>
                            <p className="text-muted-foreground text-sm">{exp.position}</p>
                          </div>
                        </div>
                        
                        {/* Meta Information */}
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 mb-4">
                          <Target className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-primary">Key Achievements</span>
                        </div>
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start group/item hover:bg-muted/30 rounded-lg p-3 -m-3 transition-all duration-200">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                            <span className="text-foreground text-sm leading-relaxed group-hover/item:text-foreground/90 transition-colors">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="mt-16 lg:mt-20">
          <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Ready for New Challenges</h3>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Passionate about building innovative solutions and driving business growth through technology. 
                  Let's create something amazing together.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  <Target className="mr-2 h-4 w-4" />
                  Goal-Oriented
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  <Building className="mr-2 h-4 w-4" />
                  Team Leadership
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Full-Stack Development
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
