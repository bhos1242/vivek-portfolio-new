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
  }
]

export function AwardsGallerySection() {
  return (
    <section id="awards" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            <Trophy className="mr-2 h-4 w-4" />
            Awards & Recognition
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto"></div>
        </div>

        {/* Clean Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {awards.map((award) => (
            <Dialog key={award.id}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={award.image}
                      alt={award.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-full h-[85vh] p-2">
                <DialogTitle className="sr-only">{award.alt}</DialogTitle>
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-white">
                  <Image
                    src={award.image}
                    alt={award.alt}
                    fill
                    className="object-contain"
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
