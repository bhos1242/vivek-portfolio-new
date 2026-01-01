"use client"

import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Trophy } from "lucide-react"
import Image from "next/image"

const awards = [
  {
    id: 1,
    image: "/gallary/image.png",
    alt: "Award Certificate 1"
  },
  {
    id: 2,
    image: "/gallary/image copy.png",
    alt: "Award Certificate 2"
  },
  {
    id: 3,
    image: "/gallary/image copy 2.png",
    alt: "Award Certificate 3"
  },
  {
    id: 4,
    image: "/gallary/image copy 3.png",
    alt: "Award Certificate 4"
  },
  {
    id: 5,
    image: "/gallary/image copy 4.png",
    alt: "Award Certificate 5"
  },
  {
    id: 6,
    image: "/gallary/image copy 5.png",
    alt: "Award Certificate 6"
  },
  {
    id: 7,
    image: "/gallary/image copy 6.png",
    alt: "Award Certificate 7"
  },
  {
    id: 8,
    image: "/gallary/image copy 7.png",
    alt: "Award Certificate 8"
  },
  {
    id: 9,
    image: "/gallary/image copy 8.png",
    alt: "Award Certificate 9"
  }
  ,
  {
    id: 10,
    image: "/iebos.jpg",
    alt: "Appointment Letter - Industry Expert (Modern College)"
  }
]

// Added recent uploads
awards.push(
  { id: 11, image: "/gallary/image.1.png", alt: "Award Certificate 11" },
  { id: 12, image: "/gallary/image.2.png", alt: "Award Certificate 12" },
  { id: 13, image: "/gallary/image.3.png", alt: "Award Certificate 13" }
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
                <div className="compact-card group cursor-pointer border-none bg-background p-0 h-48 sm:h-64">
                  <div className="relative w-full h-full">
                    <Image
                      src={award.image}
                      alt={award.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/10 transition-colors duration-300" />
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
