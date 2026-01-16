"use client"

import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Trophy } from "lucide-react"
import Image from "next/image"

const awards = [
  {
    id: 1,
    image: "/gallary/image.png",
    alt: "Vivek Bhos - Achievement Photo 1"
  },
  {
    id: 2,
    image: "/gallary/image copy.png",
    alt: "Vivek Bhos - Achievement Photo 2"
  },
  {
    id: 3,
    image: "/gallary/image copy 2.png",
    alt: "Vivek Bhos - Achievement Photo 3"
  },
  {
    id: 4,
    image: "/gallary/image copy 3.png",
    alt: "Vivek Bhos - Achievement Photo 4"
  },
  {
    id: 5,
    image: "/gallary/image copy 4.png",
    alt: "Vivek Bhos - Achievement Photo 5"
  },
  {
    id: 6,
    image: "/gallary/image copy 5.png",
    alt: "Vivek Bhos - Achievement Photo 6"
  },
  {
    id: 7,
    image: "/gallary/image copy 6.png",
    alt: "Vivek Bhos - Achievement Photo 7"
  },
  {
    id: 8,
    image: "/gallary/image copy 7.png",
    alt: "Vivek Bhos - Achievement Photo 8"
  },
  {
    id: 9,
    image: "/gallary/image copy 8.png",
    alt: "Vivek Bhos - Achievement Photo 9"
  }
  ,
  {
    id: 10,
    image: "/iebos.jpg",
    alt: "Vivek Bhos - Appointment Letter (Modern College)"
  }
]

// Added recent uploads
awards.push(
  { id: 11, image: "/gallary/image.1.png", alt: "Vivek Bhos - Achievement Photo 11" },
  { id: 12, image: "/gallary/image.2.png", alt: "Vivek Bhos - Achievement Photo 12" },
  { id: 13, image: "/gallary/image.3.png", alt: "Vivek Bhos - Achievement Photo 13" }
)

export function AwardsGallerySection() {
  return (
    <section id="awards" className="app-section bg-muted/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="outline" className="px-4 py-1 rounded-full border-primary/30 text-primary">
              <Trophy className="mr-2 h-3.5 w-3.5" />
              Achievements
            </Badge>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Recognition & <span className="text-gradient">Awards</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {awards.map((award) => (
            <Dialog key={award.id}>
              <DialogTrigger asChild>
                <div className="compact-card shine-effect group cursor-pointer border border-border/10 bg-background/50 p-1.5 h-48 sm:h-64 hover:border-primary/50 transition-all duration-500">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src={award.image}
                      alt={award.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
             
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-full h-[85vh] p-2 bg-transparent border-none">
                <DialogTitle className="sr-only">{award.alt}</DialogTitle>
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-background/80 backdrop-blur-xl border border-white/20">
                  <Image
                    src={award.image}
                    alt={award.alt}
                    fill
                    className="object-contain p-4"
                    sizes="90vw"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
