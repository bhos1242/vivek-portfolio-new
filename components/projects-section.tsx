import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, ArrowRight, Share2 } from "lucide-react"

const projects = [
  {
    title: "Donate Aid Society",
    description: "Platform for charitable donations with secure online payment gateways, intuitive UI/UX, and Prisma-backed database.",
    url: "https://donateaidsociety.vercel.app/",
    tags: ["React", "Next.js", "Prisma"],

    featured: true,
  },
  {
    title: "PracticeStacks",
    description: "Enterprise-grade proposal and compliance management platform with AI-powered automation, multi-currency support, and advanced analytics for professional service firms.",
    url: "https://www.practicestacks.in/",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AI/ML"],

    featured: true,
  },
  {
    title: "Kaydyach Ani Faydyach",
    description: "Comprehensive platform providing detailed information about legal rights, government schemes, and citizen benefits.",
    url: "https://kaydyanch-ani-faydyach.vercel.app/",
    tags: ["Next.js", "React.js", "TailwindCSS", "Node.js", "MongoDB"],

    featured: true,
  },
  {
    title: "Megaaplex",
    description: "A modern real estate platform for property discovery, listings, and lead management. Built with Next.js and Tailwind CSS.",
    url: "https://www.megaaplex.com/",
    tags: ["Next.js", "React.js", "TailwindCSS", "Node.js", "MongoDB"],

    featured: true,
  },
  {
    title: "DemandToKaro",
    description: "Hyperlocal demand aggregation platform enabling users to request products and services and connect with local vendors.",
    url: "https://www.demandtokaro.com/",
    tags: ["Next.js", "React.js", "Node.js", "MongoDB"],

    featured: false,
  },
  {
    title: "Green Thumb Foundation",
    description: "Environmental conservation platform focused on tree planting initiatives, sustainability education, and community engagement.",
    url: "https://www.greenthumbfoundation.org/",
    tags: ["Next.js", "React.js", "Node.js", "MongoDB"],

    featured: false,
  },
  {
    title: "Epicarp Nature Care",
    description: "Sustainable e-commerce platform offering eco-friendly products with comprehensive environmental impact tracking.",
    url: "https://www.epicarpnaturecare.com/",
    tags: ["Next.js", "Node.js", "Razorpay"],

    featured: false,
  },
  {
    title: "Start Business Consulting",
    description: "Business strategy consulting platform offering market analysis, growth solutions, and comprehensive planning services.",
    url: "https://v0-start-business-demo-website.vercel.app/",
    tags: ["Next.js", "React.js", "MongoDB"],

    featured: false,
  },
  {
    title: "Pixel Perfects",
    description: "Creative design agency platform showcasing portfolio, services, and client testimonials with a focus on UX.",
    url: "https://pixelperfects.in/",
    tags: ["Next.js", "React.js", "TailwindCSS"],

    featured: false,
  },
  {
    title: "Guru Krupa Fire Services",
    description: "Professional fire safety services platform with equipment showcase and emergency consultation booking.",
    url: "https://www.gurukrupafireservices.com/",
    tags: ["Next.js", "React.js", "Node.js"],

    featured: false,
  },
  {
    title: "4 Star Travels",
    description: "Travel agency platform offering personalized travel planning, booking services, and customer support.",
    url: "https://www.4startravels.com/",
    tags: ["Next.js", "React.js", "Node.js"],

    featured: false,
  },
  {
    title: "SnehChhaya",
    description: "Comprehensive platform for child welfare organization providing care, education, and support to underprivileged children.",
    url: "https://www.snehchhaya.org/",
    tags: ["Next.js", "React.js", "MongoDB"],

    featured: false,
  },
  {
    title: "Godham Group",
    description: "Multi-business group platform showcasing agriculture, sustainability initiatives, and diverse business operations.",
    url: "https://www.godhamgroup.in/",
    tags: ["Next.js", "React.js", "MongoDB"],

    featured: false,
  },
  {
    title: "Varad Dental Clinic",
    description: "Modern dental clinic platform providing information on services, appointment booking, and patient resources.",
    url: "https://varad-dental-clinic.vercel.app/",
    tags: ["Next.js", "React.js", "MongoDB"],

    featured: false,
  },
  {
    title: "Biztree Accounting",
    description: "Comprehensive accounting and financial management platform with automated reporting and expense tracking.",
    url: "https://v0-biztree.vercel.app/",
    tags: ["Next.js", "React.js", "MongoDB"],

    featured: false,
  },
  {
    title: "Rainbow HR Consulting",
    description: "Professional HR consulting platform specializing in talent acquisition, employee engagement, and development.",
    url: "https://rainbow-hr-consulting.vercel.app/",
    tags: ["Next.js", "React.js", "MongoDB"],

    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="app-section bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="outline" className="px-4 py-1 rounded-full border-primary/30 text-primary">
              Portfolio
            </Badge>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Selected <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A collection of digital products and web applications built with modern technologies.
            </p>
          </div>
          <Button variant="ghost" className="rounded-full group" asChild>
            <a href="https://github.com/bhos1242" target="_blank">
              More on GitHub <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        <div className="bento-grid">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`compact-card group relative flex flex-col justify-between ${project.featured ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
                }`}
            >
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                {project.featured && (
                  <div className="bg-primary/10 backdrop-blur-md p-2 rounded-full border border-primary/20">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                  </div>
                )}
                <div className="bg-background/50 backdrop-blur-md p-2 rounded-full border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Share2 className="w-4 h-4 text-foreground" />
                </div>
              </div>

              <CardHeader className="p-0 mb-4">
                <CardTitle className={`${project.featured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"} font-black`}>
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0 space-y-4">
                <p className={`text-muted-foreground leading-relaxed ${project.featured ? "text-lg" : "text-sm"}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold px-2 py-1 bg-muted rounded-md uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button size={project.featured ? "lg" : "sm"} className="rounded-full flex-1 hover-lift" asChild>
                    <a href={project.url} target="_blank">
                      <ExternalLink className="mr-2 w-4 h-4" />
                      View Live
                    </a>
                  </Button>
                  <Button size={project.featured ? "lg" : "sm"} variant="outline" className="rounded-full flex-none hover-lift" asChild>
                    <a href="https://github.com/bhos1242" target="_blank">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* View All Card */}
          <Card className="compact-card bg-primary/5 border-dashed border-primary/30 flex items-center justify-center text-center md:col-span-1 md:row-span-1 hover:bg-primary/10 cursor-pointer group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Github className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-base">View More</h3>
                <p className="text-[10px] text-muted-foreground">Check my GitHub for 20+ more projects</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

