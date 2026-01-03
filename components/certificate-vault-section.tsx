"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    ShieldCheck,
    Download,
    Maximize2,
    Grid,
    Columns,
    ChevronLeft,
    ChevronRight,
    X,
    ZoomIn,
    Pause,
    Play
} from "lucide-react"
import { cn } from "@/lib/utils"

export function CertificateVaultSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 3000, stopOnInteraction: false })
    ])
    const [isGridView, setIsGridView] = useState(false)
    const [lightboxImage, setLightboxImage] = useState<string | null>(null)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)

    // Generate paths for 57 images: page-0001.jpg to page-0057.jpg
    const certificates = Array.from({ length: 57 }, (_, i) => ({
        id: i + 1,
        src: `/certificates/vivek_all_certificates_page-${String(i + 1).padStart(4, '0')}.jpg`,
        alt: `Certificate Page ${i + 1}`
    }))

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const toggleAutoplay = useCallback(() => {
        if (!emblaApi) return
        const autoplay = emblaApi.plugins().autoplay
        if (!autoplay) return

        if (autoplay.isPlaying()) {
            autoplay.stop()
            setIsPlaying(false)
        } else {
            autoplay.play()
            setIsPlaying(true)
        }
    }, [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on("select", onSelect)
        emblaApi.on("autoplay:stop", () => setIsPlaying(false))
        emblaApi.on("autoplay:play", () => setIsPlaying(true))
    }, [emblaApi, onSelect])

    return (
        <section id="vault" className="app-section bg-muted/30">
            <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <Badge variant="outline" className="px-4 py-1 rounded-full border-primary/30 text-primary">
                            <ShieldCheck className="mr-2 h-3.5 w-3.5" />
                            Verified Credentials
                        </Badge>
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                            Certificate <span className="text-gradient">Vault</span>
                        </h2>
                        <p className="text-lg text-muted-foreground font-medium">
                            Comprehensive archive of 57 verified certificates from top institutions.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <div className="flex bg-muted rounded-full p-1 border border-border/50">
                            <Button
                                variant={!isGridView ? "secondary" : "ghost"}
                                size="sm"
                                className="rounded-full h-8 px-4 text-[10px] font-black uppercase tracking-widest"
                                onClick={() => setIsGridView(false)}
                            >
                                <Columns className="w-3.5 h-3.5 mr-2" />
                                Carousel
                            </Button>
                            <Button
                                variant={isGridView ? "secondary" : "ghost"}
                                size="sm"
                                className="rounded-full h-8 px-4 text-[10px] font-black uppercase tracking-widest"
                                onClick={() => setIsGridView(true)}
                            >
                                <Grid className="w-3.5 h-3.5 mr-2" />
                                Grid
                            </Button>
                        </div>
                        <Button variant="outline" className="rounded-full font-black uppercase text-[10px] tracking-widest hover-lift h-10 px-6" asChild>
                            <a href="/vivek_all_certificates.pdf" download>
                                <Download className="mr-2 w-3.5 h-3.5" />
                                Download Bundle
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Main Content Area - Clean Layout */}
                <div className="flex flex-col gap-6">

                    {!isGridView ? (
                        // CAROUSEL VIEW
                        <>
                            <div className="overflow-hidden rounded-xl bg-transparent" ref={emblaRef}>
                                <div className="flex touch-pan-y">
                                    {certificates.map((cert, index) => (
                                        <div className="flex-[0_0_100%] min-w-0 relative h-[500px] sm:h-[700px] flex items-center justify-center p-0" key={cert.id}>
                                            <div className="relative w-full h-full cursor-zoom-in" onClick={() => setLightboxImage(cert.src)}>
                                                <Image
                                                    src={cert.src}
                                                    alt={cert.alt}
                                                    fill
                                                    className="object-contain"
                                                    priority={index < 2}
                                                    sizes="(max-width: 768px) 100vw, 1000px"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Carousel Controls */}
                            <div className="flex items-center justify-center gap-4">
                                <Button variant="outline" size="icon" className="rounded-full w-10 h-10 shadow-sm hover:bg-muted" onClick={scrollPrev}>
                                    <ChevronLeft className="w-5 h-5" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full w-10 h-10 shadow-sm hover:bg-muted"
                                    onClick={toggleAutoplay}
                                >
                                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                                </Button>
                                <div className="text-[12px] font-black uppercase tracking-widest text-muted-foreground w-32 text-center">
                                    {selectedIndex + 1} / {certificates.length}
                                </div>
                                <Button variant="outline" size="icon" className="rounded-full w-10 h-10 shadow-sm hover:bg-muted" onClick={scrollNext}>
                                    <ChevronRight className="w-5 h-5" />
                                </Button>
                            </div>
                        </>
                    ) : (
                        // GRID VIEW
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {certificates.map((cert, index) => (
                                <div
                                    key={cert.id}
                                    className="aspect-[3/4] relative rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all cursor-pointer group/card bg-background"
                                    onClick={() => {
                                        setIsGridView(false)
                                        // Slight delay to allow carousel to mount
                                        setTimeout(() => emblaApi?.scrollTo(index), 10)
                                    }}
                                >
                                    <Image
                                        src={cert.src}
                                        alt={cert.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                                        sizes="(max-width: 768px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end opacity-0 group-hover/card:opacity-100 transition-opacity">
                                        <span className="text-[10px] font-bold text-white">#{cert.id}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* LIGHTBOX */}
            {lightboxImage && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 text-white/50 hover:text-white rounded-full w-12 h-12"
                        onClick={() => setLightboxImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </Button>
                    <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
                        <Image
                            src={lightboxImage}
                            alt="Full View"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            )}
        </section>
    )
}
