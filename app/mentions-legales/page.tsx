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
    <div className="min-h-screen bg-[#f5f4f0] text-[#0f0f0f]">
      <ClientEffects />
      {/* Nav minimaliste */}
      <header className="border-b border-black/[0.08] px-6 py-5 flex items-center justify-between max-w-[1400px] mx-auto">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          <img src="/logo-noir.webp" alt="BenRaff Studio" className="h-7 w-auto" />
        </Link>
        <Link href="/" className="text-xs font-medium tracking-wider uppercase text-[#6a6a6a] hover:text-[#0f0f0f] transition-colors">
          ← Retour au site
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#6b8a00] mb-4">Informations légales</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0f0f0f] mb-16">
          Mentions légales
        </h1>

        <div className="flex flex-col gap-14 text-[#4a4a4a] leading-relaxed">

          {/* Éditeur */}
          <section>
            <h2 className="text-lg font-semibold text-[#0f0f0f] mb-4 pb-3 border-b border-black/[0.1]">
              1. Éditeur du site
            </h2>
            <p className="mb-2">Le site <strong className="text-[#0f0f0f]">benraffstudio.com</strong> est édité par :</p>
            <ul className="flex flex-col gap-1.5 text-sm">
              <li><span className="text-[#6a6a6a]">Nom :</span> Benjamin Raffegeau</li>
              <li><span className="text-[#6a6a6a]">Activité :</span> BenRaff Studio · Studio de visualisation architecturale 3D</li>
              <li><span className="text-[#6a6a6a]">Adresse :</span> Rennes (35000), Ille-et-Vilaine, France</li>
              <li><span className="text-[#6a6a6a]">Téléphone :</span> 06 24 51 76 41</li>
              <li><span className="text-[#6a6a6a]">Email :</span>{' '}
                <a href="mailto:contact@benraffstudio.com" className="text-[#6b8a00] hover:underline">
                  contact@benraffstudio.com
                </a>
              </li>
              <li><span className="text-[#6a6a6a]">SIRET :</span> 878 174 739</li>
            </ul>
          </section>

          {/* Directeur de publication */}
          <section>
            <h2 className="text-lg font-semibold text-[#0f0f0f] mb-4 pb-3 border-b border-black/[0.1]">
              2. Directeur de la publication
            </h2>
            <p className="text-sm">Benjamin Raffegeau, en qualité de responsable de BenRaff Studio.</p>
          </section>

          {/* Hébergeur */}
          <section>
            <h2 className="text-lg font-semibold text-[#0f0f0f] mb-4 pb-3 border-b border-black/[0.1]">
              3. Hébergeur
            </h2>
            <ul className="flex flex-col gap-1.5 text-sm">
              <li><span className="text-[#6a6a6a]">Société :</span> Vercel Inc.</li>
              <li><span className="text-[#6a6a6a]">Adresse :</span> 340 Pine Street, Suite 600, San Francisco, CA 94104, États-Unis</li>
              <li><span className="text-[#6a6a6a]">Site :</span>{' '}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#6b8a00] hover:underline">
                  vercel.com
                </a>
              </li>
            </ul>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-lg font-semibold text-[#0f0f0f] mb-4 pb-3 border-b border-black/[0.1]">
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
            <h2 className="text-lg font-semibold text-[#0f0f0f] mb-4 pb-3 border-b border-black/[0.1]">
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
            <h2 className="text-lg font-semibold text-[#0f0f0f] mb-4 pb-3 border-b border-black/[0.1]">
              6. Droit applicable et juridiction
            </h2>
            <p className="text-sm">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-lg font-semibold text-[#0f0f0f] mb-4 pb-3 border-b border-black/[0.1]">
              7. Données personnelles
            </h2>
            <p className="text-sm">
              Pour toute information relative au traitement de vos données personnelles, consultez notre{' '}
              <Link href="/politique-de-confidentialite" className="text-[#6b8a00] hover:underline">
                Politique de confidentialité
              </Link>.
            </p>
          </section>

          <p className="text-xs text-[#5a5a5a] border-t border-black/[0.08] pt-8">
            Dernière mise à jour : mai 2026
          </p>
        </div>
      </main>
    </div>
  )
}
