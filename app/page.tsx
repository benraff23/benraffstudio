import ClientEffects from '@/components/layout/client-effects'
import ContactForm from '@/components/layout/contact-form'
import FloatingCta from '@/components/layout/floating-cta'
import Nav from '@/components/layout/nav'
import Hero from '@/components/sections/hero'
import Vision from '@/components/sections/vision'
import Portfolio from '@/components/sections/portfolio'
import Process from '@/components/sections/process'
import EspaceProjet from '@/components/sections/espace-projet'

const WA_URL =
  'https://wa.me/33624517641?text=Bonjour%20Benjamin%2C%20je%20souhaite%20discuter%20d%27un%20projet%20de%20visualisation%20architecturale.'

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="bg-white py-24 sm:py-32" aria-label="contact">
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-16 lg:gap-24 items-start">
          <div>
            <span className="label reveal">Contact</span>
            <h2 className="reveal delay-1 mt-5 mb-6 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] text-[#1c1c1c]">
              Votre projet mérite d&apos;être ressenti.
            </h2>
            <p className="reveal delay-2 text-lg font-light text-[#6b6b6b] leading-relaxed mb-10">
              Partagez-moi votre projet. Je vous réponds personnellement sous 24h.
            </p>

            <div className="reveal delay-3 flex flex-col gap-3">
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

          <div className="reveal-right bg-[#f7f5f1] border border-[rgba(28,28,28,0.07)] rounded-2xl p-8 sm:p-10">
            <ContactForm />
          </div>
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
            &copy; <span id="year" /> BenRaff Studio · Séries cinématographiques &amp; visualisation architecturale à Rennes.
          </p>
          <nav className="flex items-center gap-5" aria-label="Liens légaux">
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
      <ClientEffects />
      <FloatingCta />
      <Nav />
      <main>
        <Hero />
        <Vision />
        <Portfolio />
        <Process />
        <EspaceProjet />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
