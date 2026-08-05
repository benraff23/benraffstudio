import Image from 'next/image'

/** Primitives visuelles de la homepage.
 *  Vocabulaire paysagiste : visuel, plan de composition, repère annoté. */

export function Kicker({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p className={`text-[0.7rem] font-semibold tracking-[0.22em] uppercase mb-5
                   ${onDark ? 'text-[#f7f5f1]/55' : 'text-[#6b6b6b]'}`}>
      {children}
    </p>
  )
}

export function PlayButton({ size = 56 }: { size?: number }) {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full
                 bg-[#f7f5f1]/90 flex items-center justify-center z-10"
      style={{ width: size, height: size }}
    >
      <div className="ml-1 w-0 h-0 border-y-[9px] border-y-transparent border-l-[14px] border-l-[#1c1c1c]" />
    </div>
  )
}

/** Visuel de projet. Sans `src`, affiche un dégradé — PLACEHOLDER à remplacer
 *  par le vrai visuel du projet de référence. */
export function Visuel({
  src, alt, caption, ratio = 'aspect-[4/3]', sizes = '(max-width: 1024px) 100vw, 520px',
  children, className = '',
}: {
  src?: string; alt?: string; caption?: string; ratio?: string; sizes?: string
  children?: React.ReactNode; className?: string
}) {
  return (
    <div className={`relative ${ratio} rounded-sm overflow-hidden bg-[#2a2620] ${className}`}>
      {src ? (
        <Image src={src} alt={alt ?? ''} fill sizes={sizes} className="object-cover" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2f28] via-[#8a8060] to-[#c9a86a]" />
      )}
      {caption && (
        <>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[rgba(28,28,28,0.6)] to-transparent" />
          <p className="absolute bottom-3 left-4 right-4 text-[0.72rem] tracking-[0.03em] text-white/90">
            {caption}
          </p>
        </>
      )}
      {children}
    </div>
  )
}

/** Repères annotés posés sur un plan de composition 3D. */
export function PlanCallout({ top, left, label }: { top: string; left: string; label: string }) {
  return (
    <span
      className="absolute flex items-center gap-1.5 text-[0.66rem] text-[#1c1c1c]
                 bg-[#f7f5f1]/90 px-2 py-1 rounded-sm"
      style={{ top, left }}
    >
      <span className="w-1 h-1 rounded-full bg-[#1c1c1c] flex-shrink-0" />
      {label}
    </span>
  )
}
