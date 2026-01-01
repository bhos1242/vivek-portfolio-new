"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    ShieldCheck,
    ExternalLink,
    Download,
    ChevronLeft,
    ChevronRight,
    Maximize2,
    FileText,
    Search,
    ZoomIn,
    ZoomOut
} from "lucide-react"
import { Document, Page, pdfjs } from "react-pdf"

// Set up worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

export function CertificateVaultSection() {
    const [numPages, setNumPages] = useState<number>(0)
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [scale, setScale] = useState<number>(1.0)
    const [isMounted, setIsMounted] = useState(false)
    const [containerWidth, setContainerWidth] = useState<number>(0)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setIsMounted(true)

        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth)
            }
        }

        updateWidth()
        window.addEventListener("resize", updateWidth)
        return () => window.removeEventListener("resize", updateWidth)
    }, [])

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages)
    }

    const changePage = (offset: number) => {
        setPageNumber(prevPageNumber => Math.min(Math.max(1, prevPageNumber + offset), numPages))
    }

    const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 2.0))
    const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5))

    if (!isMounted) return null

    return (
        <section id="vault" className="app-section bg-muted/30">
            <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
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
                            Interactive archive of 50+ certificates. Use the controls below to navigate through all 60 pages.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Button variant="outline" className="rounded-full font-black uppercase text-[10px] tracking-widest hover-lift h-10 px-6" asChild>
                            <a href="/vivek_all_certificates.pdf" download>
                                <Download className="mr-2 w-3.5 h-3.5" />
                                Download Bundle
                            </a>
                        </Button>
                        <Button className="rounded-full font-black uppercase text-[10px] tracking-widest hover-lift h-10 px-6" asChild>
                            <a href="/vivek_all_certificates.pdf" target="_blank">
                                <Maximize2 className="mr-2 w-3.5 h-3.5" />
                                Fullscreen
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="relative group">
                    {/* Decorative Background */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-[2.5rem] blur opacity-25"></div>

                    <div className="relative bg-background border border-border/50 rounded-[2.5rem] overflow-hidden shadow-2xl">
                        {/* Control Bar */}
                        <div className="bg-muted/50 border-b border-border/50 px-4 py-3 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full w-8 h-8"
                                    onClick={() => changePage(-1)}
                                    disabled={pageNumber <= 1}
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </Button>
                                <div className="text-[11px] font-black uppercase tracking-tighter bg-background px-3 py-1 rounded-full border border-border/50">
                                    Page {pageNumber} <span className="text-muted-foreground">of {numPages || '--'}</span>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full w-8 h-8"
                                    onClick={() => changePage(1)}
                                    disabled={pageNumber >= numPages}
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </div>

                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" className="rounded-full w-8 h-8" onClick={zoomOut}>
                                    <ZoomOut className="w-4 h-4" />
                                </Button>
                                <div className="text-[10px] font-bold w-12 text-center uppercase">
                                    {Math.round(scale * 100)}%
                                </div>
                                <Button variant="ghost" size="icon" className="rounded-full w-8 h-8" onClick={zoomIn}>
                                    <ZoomIn className="w-4 h-4" />
                                </Button>
                            </div>

                            <div className="hidden sm:flex items-center gap-2 text-muted-foreground px-3 py-1 rounded-full bg-background/50 border border-border/50">
                                <Search className="w-3.5 h-3.5" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Searchable Document</span>
                            </div>
                        </div>

                        {/* PDF Rendering Area */}
                        <div
                            ref={containerRef}
                            className="flex justify-center p-2 sm:p-8 bg-slate-100/50 dark:bg-slate-900/50 overflow-auto min-h-[500px] max-h-[800px] scrollbar-hide"
                        >
                            <Document
                                file="/vivek_all_certificates.pdf"
                                onLoadSuccess={onDocumentLoadSuccess}
                                loading={
                                    <div className="flex flex-col items-center justify-center p-20 space-y-4">
                                        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                                        <p className="text-[10px] font-black uppercase tracking-widest animate-pulse">Initializing Secure Vault...</p>
                                    </div>
                                }
                                error={
                                    <div className="p-10 text-center space-y-4">
                                        <FileText className="w-12 h-12 text-destructive mx-auto opacity-50" />
                                        <p className="text-sm font-bold text-destructive">Failed to load certificates.</p>
                                        <Button variant="outline" size="sm" className="rounded-full" onClick={() => window.location.reload()}>
                                            Try Again
                                        </Button>
                                    </div>
                                }
                            >
                                <Page
                                    pageNumber={pageNumber}
                                    scale={scale}
                                    width={containerWidth ? Math.min(containerWidth - 32, 800) : 300}
                                    loading={null}
                                    className="shadow-2xl rounded-sm overflow-hidden border border-border/50"
                                    renderTextLayer={true}
                                    renderAnnotationLayer={true}
                                />
                            </Document>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}
