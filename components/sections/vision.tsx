import Image from 'next/image'
import { Kicker, PlayButton } from '@/components/ui/frame'

/** Facecam : la seule prise de parole de Benjamin dans le tunnel. */
export default function Vision() {
  return (
    <section id="vision" className="bg-[#ede9e2] py-24 sm:py-32 px-[var(--gutter)]" aria-labelledby="vision-title">
      <div className="max-w-[1080px] mx-auto grid md:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-center">
        {/* PLACEHOLDER — vidéo facecam verticale à tourner et brancher */}
        <div className="reveal-left relative aspect-[9/16] max-w-[300px] mx-auto w-full rounded-xl overflow-hidden
                        bg-[#ede9e2] shadow-[0_30px_60px_rgba(28,28,28,0.2)]">
          <Image
            src="/portrait-benjamin-raffegeau.webp"
            alt="Benjamin Raffegeau, fondateur de BenRaff Studio à Rennes"
            fill
            sizes="300px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(28,28,28,0.22)]" />
          <PlayButton size={48} />
          <p className="absolute bottom-4 left-0 right-0 text-center text-[0.72rem] tracking-wide text-white/85">
            Benjamin Raffegeau
          </p>
        </div>

        <div>
          <Kicker>Un mot de Benjamin</Kicker>
          <h2 id="vision-title"
            className="reveal font-bold tracking-tight text-[clamp(1.6rem,2.8vw,2.1rem)] leading-snug mb-7">
            &laquo;&nbsp;Je ne vends pas des rendus 3D. Je vends le moment où votre client dit oui.&nbsp;&raquo;
          </h2>
          <div className="flex flex-col gap-5 text-[1.03rem] font-light text-[#6b6b6b] leading-relaxed">
            <p className="reveal delay-1">
              Mon rôle n&apos;est pas de redessiner votre projet : c&apos;est de sublimer votre
              conception. La composition, l&apos;implantation, le choix des essences — tout ça
              reste votre travail. Le mien, c&apos;est de le rendre visible et ressenti.
            </p>
            <p className="reveal delay-2">
              Je m&apos;appelle Benjamin Raffegeau et je suis seul aux commandes de BenRaff Studio.
              Vous travaillez avec moi du premier brief à la livraison — jamais avec un chef de
              projet, un commercial ou un studio de production intermédiaire. Je prends peu de
              dossiers à la fois, je connais le vôtre en entier, et personne ne dilue votre
              intention en cours de route.
            </p>
            <p className="reveal delay-3">
              Je vous explique en deux minutes comment Le Book de Présentation Client
              s&apos;intègre à votre process de vente — sans complexifier votre travail
              de paysagiste.
            </p>
          </div>
          <a
            href="/benjamin-raffegeau"
            className="reveal delay-4 inline-flex items-center gap-2 mt-9 text-xs font-medium tracking-[0.1em] uppercase
                       text-[#1c1c1c] border border-[rgba(28,28,28,0.2)] px-7 py-3.5 rounded-full
                       hover:border-[rgba(28,28,28,0.5)] transition-colors duration-200"
          >
            En savoir plus sur moi
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
