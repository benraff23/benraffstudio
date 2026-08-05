import type { Metadata } from 'next'
import Link from 'next/link'
import ClientEffects from '@/components/layout/client-effects'
import FloatingCta from '@/components/layout/floating-cta'
import Nav from '@/components/layout/nav'
import Hero from '@/components/sections/hero'
import Constat from '@/components/sections/constat'
import Livrables from '@/components/sections/livrables'
import Process from '@/components/sections/process'
import Restitution from '@/components/sections/restitution'
import Portfolio from '@/components/sections/portfolio'
import Preuve from '@/components/sections/preuve'
import Roi, { roiObjections } from '@/components/sections/roi'
import Vision from '@/components/sections/vision'
import Faq, { homeFaq } from '@/components/sections/faq'

const WA_URL =
  'https://wa.me/33624517641?text=Bonjour%20Benjamin%2C%20je%20souhaite%20discuter%20d%27un%20projet%20d%27am%C3%A9nagement%20ext%C3%A9rieur.'

export const metadata: Metadata = {
  title: 'Rendu 3D pour concepteurs paysagistes · BenRaff Studio',
  description:
    'Plan de composition 3D, maquette interactive, images et vidéo : faites vivre votre projet paysager avant le premier coup de pelle. Rennes, toute la France.',
  keywords: [
    'rendu 3D paysagiste',
    'visualisation 3D jardin avant travaux',
    'plan de composition en 3D',
    'perspective 3D aménagement extérieur',
    'rendu 3D piscine à débordement',
    'rendu 3D pool house',
    'maquette 3D interactive jardin',
    'présentation client paysagiste',
    'Book de Présentation Client',
    'BenRaff Studio',
  ],
  openGraph: {
    images: ['/og.jpg'],
    title: 'Le Book de Présentation Client · BenRaff Studio',
    description:
      'Plan de composition en 3D, maquette interactive, images signature et vidéo immersive : votre projet paysager devient une expérience que votre client ressent dès la présentation.',
    type: 'website',
    url: 'https://benraffstudio.com',
    locale: 'fr_FR',
    siteName: 'BenRaff Studio',
  },
  alternates: { canonical: 'https://benraffstudio.com' },
}

// Objections + questions fréquentes exposées aux moteurs de réponse.
// Toutes ces paires sont réellement présentes sur la page (sections ROI et FAQ).
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [...roiObjections, ...homeFaq].map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

// ─── Contact ──────────────────────────────────────────────────────────────────
const CALENDLY_URL = 'https://calendly.com/contact-benraffstudio/nouvelle-reunion'

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Deux entrées selon l'antériorité de la relation :
 *  client existant → brief direct ; premier contact → appel de cadrage. */
function Contact() {
  return (
    <section id="contact" className="bg-white py-24 sm:py-32" aria-label="contact">
      <div className="max-w-[1080px] mx-auto px-[var(--gutter)]">
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <span className="label reveal justify-center">Votre prochain projet</span>
          <h2 className="reveal delay-1 mt-5 mb-6 font-bold tracking-tight text-[clamp(1.85rem,3.4vw,2.7rem)] leading-tight text-[#1c1c1c]">
            Parlons du projet que vous devez faire signer.
          </h2>
          <p className="reveal delay-2 text-lg font-light text-[#6b6b6b] leading-relaxed">
            Deux points de départ. Dans les deux cas, je vous réponds personnellement sous 24h.
          </p>
        </div>

        {/* Les deux parcours */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {/* 1 — Client existant */}
          <div className="reveal bg-[#f7f5f1] border border-[rgba(28,28,28,0.08)] rounded-2xl p-8 sm:p-10 flex flex-col">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#9a9a9a] mb-4">
              On a déjà travaillé ensemble
            </span>
            <h3 className="font-bold tracking-tight text-[1.45rem] leading-snug mb-4 text-[#1c1c1c]">
              Remplissez et envoyez votre brief interactif.
            </h3>
            <p className="text-[#6b6b6b] font-light leading-relaxed mb-8 flex-1">
              Vous connaissez déjà ma façon de travailler : allons droit au projet.
              Relevé, plan de plantation, listing mobilier et matériaux, photos du terrain —
              tout ce dont j&apos;ai besoin est déjà dans votre dossier de conception.
            </p>
            <Link
              href="/brief"
              className="inline-flex items-center justify-center gap-3 text-xs font-medium tracking-[0.1em] uppercase
                         text-[#f7f5f1] bg-[#1c1c1c] px-7 py-4 rounded-full
                         hover:bg-[#333333] hover:-translate-y-0.5 transition-all duration-200"
            >
              Remplir mon brief interactif
              <Arrow />
            </Link>
          </div>

          {/* 2 — Premier contact */}
          <div className="reveal delay-1 bg-[#1c1c1c] rounded-2xl p-8 sm:p-10 flex flex-col">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#f7f5f1]/50 mb-4">
              Première collaboration
            </span>
            <h3 className="font-bold tracking-tight text-[1.45rem] leading-snug mb-4 text-[#f7f5f1]">
              Réservez un appel pour discuter de votre vision et de vos projets.
            </h3>
            <p className="text-[#f7f5f1]/70 font-light leading-relaxed mb-8 flex-1">
              On fait le tour de votre façon de présenter vos projets aujourd&apos;hui, de ce qui
              bloque en rendez-vous client, et je vous dis franchement si Le Book de Présentation
              Client a du sens dans votre cas.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 text-xs font-medium tracking-[0.1em] uppercase
                         text-[#1c1c1c] bg-[#f7f5f1] px-7 py-4 rounded-full
                         hover:bg-white hover:-translate-y-0.5 transition-all duration-200"
            >
              Réserver un appel
              <Arrow />
            </a>
          </div>
        </div>

        {/* Contact direct */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-base font-light text-[#1c1c1c] hover:text-[#6b6b6b] transition-colors"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp · 06 24 51 76 41
          </a>
          <a href="mailto:contact@benraffstudio.com"
            className="inline-flex items-center gap-3 text-base font-light text-[#1c1c1c] hover:text-[#6b6b6b] transition-colors">
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            contact@benraffstudio.com
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#1c1c1c] py-14" role="contentinfo">
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
        <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
          <img src="/logo-blanc.webp" alt="BenRaff Studio" className="h-7 w-auto opacity-80" />
          <a href="mailto:contact@benraffstudio.com"
            className="text-sm text-[#f7f5f1]/40 hover:text-[#f7f5f1]/70 transition-colors font-light">
            contact@benraffstudio.com
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[rgba(247,245,241,0.06)]">
          <p className="text-xs text-[#f7f5f1]/30 font-light">
            &copy; <span id="year" /> BenRaff Studio · Images 3D d&apos;aménagement extérieur à Rennes.
          </p>
          <nav className="flex items-center gap-5" aria-label="Liens légaux">
            <a href="/zone-intervention"
              className="text-xs text-[#f7f5f1]/30 hover:text-[#f7f5f1]/60 transition-colors font-light">
              Zone d&apos;intervention
            </a>
            <a href="/mentions-legales"
              className="text-xs text-[#f7f5f1]/30 hover:text-[#f7f5f1]/60 transition-colors font-light">
              Mentions légales
            </a>
            <a href="/politique-de-confidentialite"
              className="text-xs text-[#f7f5f1]/30 hover:text-[#f7f5f1]/60 transition-colors font-light">
              Confidentialité
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ClientEffects />
      <FloatingCta />
      <Nav />
      <main>
        {/* Tunnel complet : accroche → qualification → constat → projets récents
            → offre (4 livrables) → process → restitution → preuve → ROI
            → mot de Benjamin → questions fréquentes → contact */}
        <Hero />
        <Constat />
        <Portfolio />
        <Livrables />
        <Process />
        <Restitution />
        <Preuve />
        <Roi />
        <Vision />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
