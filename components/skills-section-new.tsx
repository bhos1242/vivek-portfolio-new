import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Cloud, Palette, Brain, Zap } from "lucide-react"

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: (string | Skill)[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
      { name: "C", level: 70 }
    ],
  },
  {
    title: "Frameworks",
    icon: <Zap className="h-5 w-5" />,
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 }
    ],
  },
  {
    title: "Web Technologies",
    icon: <Palette className="h-5 w-5" />,
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "REST APIs", level: 90 },
      { name: "JSON", level: 95 }
    ],
  },
  {
    title: "Databases",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Prisma ORM", level: 85 }
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-5 w-5" />,
    skills: [
      { name: "AWS", level: 75 },
      { name: "Docker", level: 70 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 95 },
      { name: "CI/CD", level: 70 }
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
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            Skills & Technologies
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 lg:mb-12 p-1 h-12">
            <TabsTrigger value="technical" className="text-sm font-medium">Technical Skills</TabsTrigger>
            <TabsTrigger value="soft" className="text-sm font-medium">Soft Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {skillCategories.slice(0, 5).map((category, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-muted/50 bg-background/50 backdrop-blur-sm"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-primary text-lg flex items-center gap-3 group-hover:text-primary/80 transition-colors">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        {category.icon}
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        {typeof skill === 'object' ? (
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-xs text-muted-foreground">{skill.level}%</span>
                            </div>
                            <Progress 
                              value={skill.level} 
                              className="h-2 bg-muted"
                            />
                          </div>
                        ) : (
                          <Badge
                            variant="secondary"
                            className="text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default mr-2 mb-2"
                          >
                            {skill}
                          </Badge>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="soft" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-muted/50 bg-background/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-primary text-lg flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {skillCategories[5].icon}
                    </div>
                    {skillCategories[5].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(skillCategories[5].skills as string[]).map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default justify-center py-2"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-muted/50 bg-background/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-primary text-lg flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="h-5 w-5" />
                    </div>
                    Key Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-medium">Co-founded Navibyte Innovations</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-medium">Led multiple full-stack projects</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-medium">Agile methodology expertise</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-medium">Cross-functional team leadership</span>
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
