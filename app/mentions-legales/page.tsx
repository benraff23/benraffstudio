import type { Metadata } from 'next'
import Link from 'next/link'
import ClientEffects from '@/components/layout/client-effects'

export const metadata: Metadata = {
  title: 'Mentions légales · BenRaff Studio',
  description: 'Mentions légales du site benraffstudio.com : éditeur, hébergeur, propriété intellectuelle.',
  robots: { index: false, follow: false },
}

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f5f0]">
      <ClientEffects />
      {/* Nav minimaliste */}
      <header className="border-b border-white/[0.06] px-6 py-5 flex items-center justify-between max-w-[1400px] mx-auto">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          <img src="/logo-blanc.webp" alt="BenRaff Studio" className="h-7 w-auto" />
        </Link>
        <Link href="/" className="text-xs font-medium tracking-wider uppercase text-[#9a9a9a] hover:text-white transition-colors">
          ← Retour au site
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#c8e84e] mb-4">Informations légales</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-16">
          Mentions légales
        </h1>

        <div className="flex flex-col gap-14 text-[#b8b8b8] leading-relaxed">

          {/* Éditeur */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-white/[0.08]">
              1. Éditeur du site
            </h2>
            <p className="mb-2">Le site <strong className="text-white">benraffstudio.com</strong> est édité par :</p>
            <ul className="flex flex-col gap-1.5 text-sm">
              <li><span className="text-[#7a7a7a]">Nom :</span> Benjamin Raffegeau</li>
              <li><span className="text-[#7a7a7a]">Activité :</span> BenRaff Studio · Studio de visualisation architecturale 3D</li>
              <li><span className="text-[#7a7a7a]">Adresse :</span> Rennes (35000), Ille-et-Vilaine, France</li>
              <li><span className="text-[#7a7a7a]">Téléphone :</span> 06 24 51 76 41</li>
              <li><span className="text-[#7a7a7a]">Email :</span>{' '}
                <a href="mailto:contact@benraffstudio.com" className="text-[#c8e84e] hover:underline">
                  contact@benraffstudio.com
                </a>
              </li>
              <li><span className="text-[#7a7a7a]">SIRET :</span> 878 174 739</li>
            </ul>
          </section>

          {/* Directeur de publication */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-white/[0.08]">
              2. Directeur de la publication
            </h2>
            <p className="text-sm">Benjamin Raffegeau, en qualité de responsable de BenRaff Studio.</p>
          </section>

          {/* Hébergeur */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-white/[0.08]">
              3. Hébergeur
            </h2>
            <ul className="flex flex-col gap-1.5 text-sm">
              <li><span className="text-[#7a7a7a]">Société :</span> Vercel Inc.</li>
              <li><span className="text-[#7a7a7a]">Adresse :</span> 340 Pine Street, Suite 600, San Francisco, CA 94104, États-Unis</li>
              <li><span className="text-[#7a7a7a]">Site :</span>{' '}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#c8e84e] hover:underline">
                  vercel.com
                </a>
              </li>
            </ul>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-white/[0.08]">
              4. Propriété intellectuelle
            </h2>
            <p className="text-sm mb-3">
              L'ensemble des contenus présents sur ce site (textes, images, rendus 3D, animations, logotype, charte graphique) sont la propriété exclusive de Benjamin Raffegeau (BenRaff Studio), protégés par le droit d'auteur (Code de la propriété intellectuelle).
            </p>
            <p className="text-sm">
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de l'éditeur.
            </p>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-white/[0.08]">
              5. Limitation de responsabilité
            </h2>
            <p className="text-sm mb-3">
              BenRaff Studio s'efforce de maintenir les informations présentes sur ce site aussi précises et à jour que possible. Toutefois, l'éditeur ne peut garantir l'exactitude, l'exhaustivité ou l'actualité des informations diffusées.
            </p>
            <p className="text-sm">
              Les liens hypertextes pointant vers d'autres sites internet n'engagent pas la responsabilité de l'éditeur quant au contenu de ces sites tiers.
            </p>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-white/[0.08]">
              6. Droit applicable et juridiction
            </h2>
            <p className="text-sm">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-white/[0.08]">
              7. Données personnelles
            </h2>
            <p className="text-sm">
              Pour toute information relative au traitement de vos données personnelles, consultez notre{' '}
              <Link href="/politique-de-confidentialite" className="text-[#c8e84e] hover:underline">
                Politique de confidentialité
              </Link>.
            </p>
          </section>

          <p className="text-xs text-[#5a5a5a] border-t border-white/[0.06] pt-8">
            Dernière mise à jour : mai 2026
          </p>
        </div>
      </main>
    </div>
  )
}
