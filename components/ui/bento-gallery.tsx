"use client"

import React, { useRef, useState, useEffect, useCallback } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { X, MapPin, Calendar, User, Tag, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

const isVideo = (src: string) => /\.(mp4|webm|ogg|mov)$/i.test(src)

export type ImageItem = {
  id: number | string
  title: string
  desc: string
  url: string           // thumbnail (first image)
  span: string
  images?: string[]     // toutes les images du projet
  category?: string
  year?: string
  client?: string
  location?: string
  tags?: string[]
  fullDesc?: string
  brief?: string        // contexte / objectif du projet
  livraison?: string    // ce qui a été livré techniquement
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
const Lightbox = ({
  images,
  index,
  title,
  onClose,
}: {
  images: string[]
  index: number
  title: string
  onClose: () => void
}) => {
  const [current, setCurrent] = useState(index)

  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose()
      if (e.key === "ArrowLeft")  prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose, prev, next])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[1020] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Fermer"
        className="absolute top-4 right-4 flex items-center gap-2 text-xs font-medium tracking-wider
                   uppercase text-white/60 hover:text-white transition-colors px-3 py-2 rounded-lg
                   hover:bg-white/[0.08] z-10"
      >
        <X size={18} strokeWidth={1.5} />
      </button>

      {/* Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-white/40 tracking-widest tabular-nums z-10">
          {current + 1} / {images.length}
        </div>
      )}

      {/* Image ou vidéo */}
      <AnimatePresence mode="wait">
        {isVideo(images[current]) ? (
          <motion.video
            key={current}
            src={images[current]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="max-h-[90vh] max-w-[90vw]"
            autoPlay muted loop playsInline controls
            onClick={e => e.stopPropagation()}
          />
        ) : (
          <motion.img
            key={current}
            src={images[current]}
            alt={`${title} · vue ${current + 1}`}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="max-h-[90vh] max-w-[90vw] object-contain select-none"
            onClick={e => e.stopPropagation()}
          />
        )}
      </AnimatePresence>

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            aria-label="Image précédente"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full
                       bg-white/[0.08] hover:bg-white/[0.16] border border-white/10
                       flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <button
            onClick={e => { e.stopPropagation(); next() }}
            aria-label="Image suivante"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full
                       bg-white/[0.08] hover:bg-white/[0.16] border border-white/10
                       flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={e => { e.stopPropagation(); setCurrent(i) }}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all duration-200",
                i === current ? "bg-[#c8e84e] w-4" : "bg-white/30 hover:bg-white/60"
              )}
            />
          ))}
        </div>
      )}
    </motion.div>
  )
}

// ─── Project Modal (style Behance) ────────────────────────────────────────────
const ProjectModal = ({ item, onClose }: { item: ImageItem; onClose: () => void }) => {
  const allImages = item.images?.length ? item.images : [item.url]
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightboxIndex === null) onClose()
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose, lightboxIndex])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[1010] bg-[#f5f4f0] overflow-y-auto"
      data-lenis-prevent
    >
      {/* ── Sticky header ── */}
      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="sticky top-0 z-10 flex items-center justify-between
                   px-6 sm:px-10 py-4
                   bg-[rgba(245,244,240,0.92)] backdrop-blur-xl
                   border-b border-black/[0.08]"
      >
        <div>
          {item.category && (
            <p className="text-[#6b8a00] text-[10px] font-medium tracking-[0.2em] uppercase mb-0.5">
              {item.category}
            </p>
          )}
          <h2 className="text-[#0f0f0f] text-lg font-semibold tracking-tight leading-tight">
            {item.title}
          </h2>
        </div>
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="flex items-center gap-2 text-xs font-medium tracking-wider uppercase
                     text-[#6a6a6a] hover:text-[#0f0f0f] transition-colors px-3 py-2 rounded-lg
                     hover:bg-black/[0.06]"
        >
          <X size={16} strokeWidth={1.5} />
          <span className="hidden sm:inline">Fermer</span>
        </button>
      </motion.div>

      {/* ── Cover (image ou vidéo) ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="w-full overflow-hidden relative group"
        style={{ aspectRatio: "16/8" }}
      >
        {isVideo(allImages[0]) ? (
          <video
            src={allImages[0]}
            autoPlay muted loop playsInline controls
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <img
              src={allImages[0]}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02] cursor-zoom-in"
              loading="eager"
              onClick={() => setLightboxIndex(0)}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300
                            flex items-center justify-center pointer-events-none">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              bg-black/50 backdrop-blur-sm rounded-full p-3">
                <ZoomIn size={22} className="text-white" strokeWidth={1.5} />
              </div>
            </div>
          </>
        )}
      </motion.div>

      {/* ── Project info ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="max-w-4xl mx-auto px-6 sm:px-10 py-12 sm:py-16"
      >
        {(item.client || item.location || item.year || item.category) && (
          <div className="flex flex-wrap gap-6 sm:gap-10 mb-10 pb-10 border-b border-black/[0.08]">
            {item.client && (
              <div className="flex items-start gap-2">
                <User size={13} className="text-[#5a5a5a] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#5a5a5a] mb-1">Client</p>
                  <p className="text-sm font-medium text-[#0f0f0f]">{item.client}</p>
                </div>
              </div>
            )}
            {item.location && (
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-[#5a5a5a] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#5a5a5a] mb-1">Localisation</p>
                  <p className="text-sm font-medium text-[#0f0f0f]">{item.location}</p>
                </div>
              </div>
            )}
            {item.year && (
              <div className="flex items-start gap-2">
                <Calendar size={13} className="text-[#5a5a5a] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#5a5a5a] mb-1">Année</p>
                  <p className="text-sm font-medium text-[#0f0f0f]">{item.year}</p>
                </div>
              </div>
            )}
            {item.category && (
              <div className="flex items-start gap-2">
                <Tag size={13} className="text-[#5a5a5a] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#5a5a5a] mb-1">Prestation</p>
                  <p className="text-sm font-medium text-[#0f0f0f]">{item.category}</p>
                </div>
              </div>
            )}
          </div>
        )}

        <p className="text-lg sm:text-xl font-light text-[#4a4a4a] leading-relaxed mb-8">
          {item.fullDesc || item.desc}
        </p>

        {/* Brief + Livraison */}
        {(item.brief || item.livraison) && (
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {item.brief && (
              <div className="bg-black/[0.03] border border-black/[0.08] rounded-xl p-5">
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#5a5a5a] mb-2">
                  Brief & Objectif
                </p>
                <p className="text-sm text-[#4a4a4a] leading-relaxed">{item.brief}</p>
              </div>
            )}
            {item.livraison && (
              <div className="bg-[rgba(200,232,78,0.06)] border border-[rgba(200,232,78,0.2)] rounded-xl p-5">
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#6b8a00] mb-2">
                  Livraison
                </p>
                <p className="text-sm text-[#4a4a4a] leading-relaxed">{item.livraison}</p>
              </div>
            )}
          </div>
        )}

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map(tag => (
              <span
                key={tag}
                className="text-xs font-medium tracking-wider text-[#5a5a5a]
                           border border-black/[0.12] px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>

      {/* ── Additional media (cliquable si image) ── */}
      <div className="flex flex-col gap-3 pb-20">
        {allImages.slice(1).map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.08 }}
            className={cn(
              "overflow-hidden relative group",
              i % 3 === 1 ? "mx-4 sm:mx-8 rounded-2xl" : ""
            )}
          >
            {isVideo(src) ? (
              <video
                src={src}
                autoPlay muted loop playsInline controls
                className={cn(
                  "w-full object-cover",
                  i % 3 === 1 ? "aspect-[16/9] rounded-2xl" : "aspect-[21/9]"
                )}
              />
            ) : (
              <>
                <img
                  src={src}
                  alt={`${item.title} · vue ${i + 2}`}
                  className={cn(
                    "w-full object-cover transition-transform duration-500 group-hover:scale-[1.01] cursor-zoom-in",
                    i % 3 === 1 ? "aspect-[16/9] rounded-2xl" : "aspect-[21/9]"
                  )}
                  loading="lazy"
                  decoding="async"
                  onClick={() => setLightboxIndex(i + 1)}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300
                                flex items-center justify-center rounded-[inherit] pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                  bg-black/50 backdrop-blur-sm rounded-full p-3">
                    <ZoomIn size={20} className="text-white" strokeWidth={1.5} />
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={allImages}
            index={lightboxIndex}
            title={item.title}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Stagger variants ──────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
}

// ─── Gallery ──────────────────────────────────────────────────────────────────
interface InteractiveImageBentoGalleryProps {
  imageItems: ImageItem[]
  title?: string
  description?: string
}

const InteractiveImageBentoGallery: React.FC<InteractiveImageBentoGalleryProps> = ({
  imageItems,
  title,
  description,
}) => {
  const [selectedItem, setSelectedItem] = useState<ImageItem | null>(null)
  const [dragConstraint, setDragConstraint] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const calc = () => {
      if (gridRef.current && containerRef.current) {
        const containerW = containerRef.current.offsetWidth
        const gridW = gridRef.current.scrollWidth
        setDragConstraint(Math.min(0, containerW - gridW - 32))
      }
    }
    calc()
    window.addEventListener("resize", calc)
    return () => window.removeEventListener("resize", calc)
  }, [imageItems])

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2], [30, 0])

  return (
    <section ref={targetRef} className="relative w-full overflow-hidden py-0">
      {/* Header */}
      {(title || description) && (
        <motion.div style={{ opacity, y }} className="px-[var(--gutter)] mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 text-[#6b8a00] text-xs font-medium tracking-[0.15em] uppercase mb-4">
                <span className="block w-4 h-px bg-[#c8e84e]" />
                Portfolio
              </span>
              {title && (
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#0f0f0f]">
                  {title}
                </h2>
              )}
            </div>
            {description && (
              <p className="text-[#6a6a6a] text-base font-light leading-relaxed sm:max-w-[32ch] sm:text-right">
                {description}
              </p>
            )}
          </div>
        </motion.div>
      )}

      {/* Horizontal drag-scroll strip */}
      <div ref={containerRef} className="relative w-full cursor-grab active:cursor-grabbing" data-lenis-prevent>
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10
                        bg-gradient-to-r from-[#f5f4f0] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10
                        bg-gradient-to-l from-[#f5f4f0] to-transparent" />

        <motion.div
          className="w-max"
          drag="x"
          dragConstraints={{ left: dragConstraint, right: 0 }}
          dragElastic={0.04}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            ref={gridRef}
            className="auto-cols-[minmax(14rem,1fr)] grid-flow-col gap-3 px-8 md:px-16"
            style={{
              display: "grid",
              gridTemplateRows: "220px 220px",
              gridAutoFlow: "column",
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {imageItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={cn(
                  "group relative flex items-end overflow-hidden rounded-2xl",
                  "border border-black/[0.08] bg-[#e8e5df]",
                  "cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.1)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8e84e]",
                  item.span,
                )}
                whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                onClick={() => setSelectedItem(item)}
                onKeyDown={(e) => e.key === "Enter" && setSelectedItem(item)}
                tabIndex={0}
                aria-label={`Voir le projet ${item.title}`}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover
                             transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                {/* Image count badge */}
                {item.images && item.images.length > 1 && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1
                                  rounded-full bg-black/60 backdrop-blur-sm border border-white/10
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] font-medium text-white/80">
                      {item.images.length} images
                    </span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent
                                opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Info */}
                <div className="relative z-10 w-full p-4 translate-y-3 opacity-0
                                transition-all duration-500
                                group-hover:translate-y-0 group-hover:opacity-100">
                  {item.category && (
                    <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#6b8a00] mb-1">
                      {item.category}
                    </p>
                  )}
                  <h3 className="text-sm font-semibold text-white leading-snug">{item.title}</h3>
                  <p className="text-xs text-white/70 mt-0.5 line-clamp-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Drag hint */}
      <motion.p
        style={{ opacity }}
        className="mt-5 text-center text-xs text-[#6a6a6a] tracking-wider select-none"
      >
        ← Glissez pour explorer · Cliquez pour ouvrir →
      </motion.p>

      {/* Project modal */}
      <AnimatePresence>
        {selectedItem && (
          <ProjectModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default InteractiveImageBentoGallery
