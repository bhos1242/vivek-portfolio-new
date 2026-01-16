import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Cloud, Palette, Brain, Zap } from "lucide-react"

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code className="h-5 w-5" />,
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "C++",
      "C"
    ],
  },
  {
    title: "Frameworks",
    icon: <Zap className="h-5 w-5" />,
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js"
    ],
  },
  {
    title: "Web Technologies",
    icon: <Palette className="h-5 w-5" />,
    skills: [
      "HTML5",
      "CSS3",
      "REST APIs",
      "JSON"
    ],
  },
  {
    title: "Databases",
    icon: <Database className="h-5 w-5" />,
    skills: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Prisma ORM"
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-5 w-5" />,
    skills: [
      "AWS",
      "Docker",
      "Git",
      "GitHub",
      "CI/CD"
    ],
  },
  {
    title: "Soft Skills",
    icon: <Brain className="h-5 w-5" />,
    skills: [
      "Team Collaboration",
      "Communication",
      "Leadership",
      "Problem-Solving",
      "Time Management",
      "Analytical Thinking",
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="app-section bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-6">
          <div className="space-y-2 max-w-2xl">
            <Badge variant="outline" className="px-4 py-1 rounded-full border-primary/30 text-primary">
              Hard & Soft Skills
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Technical <span className="text-gradient">Versatility</span>
            </h2>
          </div>
        </div>

        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="flex w-full max-w-xs mb-5 p-1 bg-muted/50 rounded-full h-10">
            <TabsTrigger value="technical" className="flex-1 rounded-full text-xs font-bold data-[state=active]:bg-background data-[state=active]:shadow-sm">Technical</TabsTrigger>
            <TabsTrigger value="soft" className="flex-1 rounded-full text-xs font-bold data-[state=active]:bg-background data-[state=active]:shadow-sm">Soft Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="technical">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {skillCategories.slice(0, 5).map((category, index) => (
                <Card
                  key={index}
                  className="compact-card shine-effect group border-none bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <CardContent className="p-3.5 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
                        {category.icon}
                      </div>
                      <h3 className="font-bold text-sm tracking-tight">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-[10px] font-bold px-2.5 py-1 bg-primary/10 text-primary border border-primary/10 rounded-full uppercase tracking-tighter"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="soft">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="compact-card bg-muted/30 border-none">
                <CardContent className="p-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-xl text-primary">
                      {skillCategories[5].icon}
                    </div>
                    <h3 className="font-bold text-lg">{skillCategories[5].title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillCategories[5].skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="rounded-full text-[10px] uppercase font-black px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="compact-card bg-primary/5 border-primary/20">
                <CardContent className="p-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-xl text-primary">
                      <Zap className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-lg">Key Strengths</h3>
                  </div>
                  <div className="space-y-2">
                    {[
                      "Technical Leadership",
                      "Full-Stack Architecture",
                      "Product Strategy",
                      "Client Relationship"
                    ].map((strength, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm font-medium">{strength}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
