'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const IMG_PADDING = 12

// ─── Parallax image section ────────────────────────────────────────────────────
interface TextParallaxContentProps {
  imgUrl: string
  subheading: string
  heading: string
  children: React.ReactNode
}

const TextParallaxContent = ({ imgUrl, subheading, heading, children }: TextParallaxContentProps) => (
  <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
    <div className="relative h-[150vh]">
      <StickyImage imgUrl={imgUrl} />
      <OverlayCopy heading={heading} subheading={subheading} />
    </div>
    {children}
  </div>
)

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  })
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url('${imgUrl.split('/').map(s => encodeURIComponent(s)).join('/')}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div className="absolute inset-0 bg-[#080808]/55" style={{ opacity }} />
    </motion.div>
  )
}

const OverlayCopy = ({ subheading, heading }: { subheading: string; heading: string }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })
  const y       = useTransform(scrollYProgress, [0, 1], [250, -250])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white px-6"
    >
      <p className="mb-3 text-center text-xs font-medium tracking-[0.2em] uppercase text-[#c8e84e] md:mb-5 md:text-sm">
        {subheading}
      </p>
      <p className="text-center text-[clamp(2.5rem,6vw,5.5rem)] font-bold tracking-tight leading-[1.05]">
        {heading}
      </p>
    </motion.div>
  )
}

// ─── Sticky video (joue au viewport, pause en dehors) ─────────────────────────
const StickyVideo = ({ src }: { src: string }) => {
  const targetRef = useRef<HTMLDivElement>(null)
  const videoRef  = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  })
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.25 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={targetRef}
      style={{ height: `calc(100vh - ${IMG_PADDING * 2}px)`, top: IMG_PADDING, scale }}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        loop
        preload="auto"
        className="w-full h-full object-cover"
      />
      <motion.div className="absolute inset-0 bg-[#080808]/30" style={{ opacity }} />
    </motion.div>
  )
}

// ─── Video section (même structure que TextParallaxContent) ───────────────────
const ScrollVideoSection = ({
  src,
  subheading,
  heading,
  children,
}: {
  src: string
  subheading: string
  heading: string
  children: React.ReactNode
}) => (
  <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
    <div className="relative h-[150vh]">
      <StickyVideo src={src} />
      <OverlayCopy heading={heading} subheading={subheading} />
    </div>
    {children}
  </div>
)

// ─── Service block ─────────────────────────────────────────────────────────────
interface ServiceBlockProps {
  label: string
  title: string
  body: string
  href: string
  cta: string
}

const ServiceBlock = ({ label, title, body, href, cta }: ServiceBlockProps) => (
  <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-6 pb-24 pt-14 md:grid-cols-12">
    <div className="col-span-1 md:col-span-4">
      <span className="inline-flex items-center gap-2 text-[#c8e84e] text-xs font-medium tracking-[0.15em] uppercase mb-4">
        <span className="block w-4 h-px bg-[#c8e84e]" />
        {label}
      </span>
      <h3 className="text-2xl font-bold text-white leading-snug tracking-tight">{title}</h3>
    </div>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-8 text-lg font-light text-[#9a9a9a] leading-relaxed">{body}</p>
      <a
        href={href}
        className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase
                   text-[#080808] bg-[#c8e84e] px-8 py-4 rounded-full
                   hover:bg-[#d4f05a] hover:-translate-y-0.5
                   hover:shadow-[0_8px_32px_rgba(200,232,78,0.35)]
                   transition-all duration-200"
      >
        {cta}
        <ArrowUpRight size={15} strokeWidth={2} />
      </a>
    </div>
  </div>
)

// ─── Exported section ──────────────────────────────────────────────────────────
export function TextParallaxShowcase() {
  return (
    <div className="bg-[#080808]">
      <TextParallaxContent
        imgUrl="/projets/cuisine-rose/Close up final 4K.png"
        subheading="Rendus fixes"
        heading="Chaque pixel est une décision."
      >
        <ServiceBlock
          label="Image haute résolution"
          title="Un cadrage qui vend, pas qui décore."
          body="Composition en règle des tiers, profondeur de champ calculée, lumière choisie pour l'heure et la saison. Chaque rendu fixe est construit pour guider le regard exactement là où il doit aller, et faire dire oui."
          href="#contact"
          cta="Demander un rendu"
        />
      </TextParallaxContent>

      <ScrollVideoSection
        src="/projets/interieur/kling_20260516_作品_the_camera_4692_0.mp4"
        subheading="Animations vidéo"
        heading="Le projet prend vie."
      >
        <ServiceBlock
          label="Séquence cinématique"
          title="Une présentation inoubliable."
          body="Transitions, plans de coupe, ambiances dynamiques. La vidéo permet à vos clients de traverser l'espace avant la pose de la première pierre, et de sentir ce que les plans ne montrent pas."
          href="#contact"
          cta="Voir les formats vidéo"
        />
      </ScrollVideoSection>

      <TextParallaxContent
        imgUrl="/projets/interieur/Generated Image May 08, 2026 - 7_13PM.jpg"
        subheading="Visites virtuelles"
        heading="Entrez avant de construire."
      >
        <ServiceBlock
          label="360° interactif"
          title="L'immersion qui fait valider."
          body="Navigation libre à 360° dans l'espace non construit. Vos clients explorent, ressentent et valident les choix architecturaux en temps réel. La décision vient d'elle-même."
          href="#contact"
          cta="Découvrir les visites"
        />
      </TextParallaxContent>
    </div>
  )
}
