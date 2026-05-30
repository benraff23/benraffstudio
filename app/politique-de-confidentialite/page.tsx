import type { Metadata } from 'next'
import Link from 'next/link'
import ClientEffects from '@/components/layout/client-effects'

export const metadata: Metadata = {
  title: 'Politique de confidentialité · BenRaff Studio',
  description: 'Politique de confidentialité et de protection des données personnelles de BenRaff Studio, conformément au RGPD.',
  robots: { index: false, follow: false },
}

export default function PolitiqueConfidentialite() {
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
        <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#6b8a00] mb-4">Vos droits &amp; vos données</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0f0f0f] mb-4">
          Politique de confidentialité
        </h1>
        <p className="text-[#6a6a6a] text-sm mb-16">Conforme au Règlement Général sur la Protection des Données (RGPD, UE 2016/679)</p>

        <div className="flex flex-col gap-14 text-[#4a4a4a] leading-relaxed">

          {/* Responsable */}
          <section>
            <h2 className="text-lg font-semibold text-[#0f0f0f] mb-4 pb-3 border-b border-black/[0.1]">
              1. Responsable du traitement
            </h2>
            <ul className="flex flex-col gap-1.5 text-sm">
              <li><span className="text-[#6a6a6a]">Nom :</span> Benjamin Raffegeau · BenRaff Studio</li>
              <li><span className="text-[#6a6a6a]">Adresse :</span> Rennes (35000), France</li>
              <li><span className="text-[#6a6a6a]">Email :</span>{' '}
                <a href="mailto:contact@benraffstudio.com" className="text-[#6b8a00] hover:underline">
                  contact@benraffstudio.com
                </a>
              </li>
              <li><span className="text-[#6a6a6a]">Téléphone :</span> 06 24 51 76 41</li>
            </ul>
          </section>

          {/* Données collectées */}
          <section>
            <h2 className="text-lg font-semibold text-[#0f0f0f] mb-4 pb-3 border-b border-black/[0.1]">
              2. Données collectées et finalités
            </h2>
            <p className="text-sm mb-6">
              BenRaff Studio collecte uniquement les données strictement nécessaires au traitement de vos demandes. Aucune donnée n'est collectée à des fins commerciales ou revendue à des tiers.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-black/[0.1]">
                    <th className="text-left text-xs font-semibold tracking-wider uppercase text-[#6a6a6a] pb-3 pr-6">Donnée</th>
                    <th className="text-left text-xs font-semibold tracking-wider uppercase text-[#6a6a6a] pb-3 pr-6">Finalité</th>
                    <th className="text-left text-xs font-semibold tracking-wider uppercase text-[#6a6a6a] pb-3">Base légale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.05]">
                  {[
                    ['Nom / société', "Identification de l'interlocuteur", 'Intérêt légitime'],
                    ['Adresse email', 'Réponse à votre demande de contact', "Exécution d'un contrat"],
                    ['Téléphone (optionnel)', 'Prise de contact si nécessaire', 'Consentement'],
                    ['Profil professionnel', 'Qualification de la demande', 'Intérêt légitime'],
                    ['Description du projet', 'Traitement de la demande commerciale', "Exécution d'un contrat"],
                    ['Budget indicatif', 'Qualification de la demande', 'Intérêt légitime'],
                    ['Données de navigation', 'Fonctionnement technique du site', 'Intérêt légitime'],
                  ].map(([donnee, finalite, base]) => (
                    <tr key={donnee}>
                      <td className="py-3 pr-6 text-[#0f0f0f] font-medium">{donnee}</td>
                      <td className="py-3 pr-6 text-[#6a6a6a]">{finalite}</td>
                      <td className="py-3 text-[#6a6a6a]">{base}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Durée de conservation */}
          <section>
            <h2 className="text-lg font-semibold text-[#0f0f0f] mb-4 pb-3 border-b border-black/[0.1]">
              3. Durée de conservation
            </h2>
            <ul className="flex flex-col gap-2 text-sm list-disc list-inside marker:text-[#6b8a00]">
              <li>Données du formulaire de contact : <strong className="text-[#0f0f0f]">3 ans</strong> à compter du dernier contact</li>
              <li>Données clients (devis, contrats) : <strong className="text-[#0f0f0f]">5 ans</strong> (obligation légale comptable)</li>
              <li>Logs techniques : <strong className="text-[#0f0f0f]">12 mois</strong> maximum</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-lg font-semibold text-[#0f0f0f] mb-4 pb-3 border-b border-black/[0.1]">
              4. Cookies et traceurs
            </h2>
            <p className="text-sm mb-4">
              Ce site utilise uniquement des cookies <strong className="text-[#0f0f0f]">strictement nécessaires</strong> à son fonctionnement technique. Aucun cookie publicitaire, de profilage ou de suivi analytique n'est déposé sans votre consentement.
            </p>
            <div className="bg-black/[0.03] border border-black/[0.08] rounded-xl p-5 text-sm">
              <p className="font-medium text-[#0f0f0f] mb-3">Cookies utilisés :</p>
              <ul className="flex flex-col gap-2 text-[#6a6a6a]">
                <li className="flex gap-3">
                  <span className="text-[#6b8a00] flex-shrink-0">→</span>
                  <span><strong className="text-[#0f0f0f]">Cookie de session</strong> : technique, nécessaire au fonctionnement du formulaire de contact. Durée : session.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#6b8a00] flex-shrink-0">→</span>
                  <span><strong className="text-[#0f0f0f]">Préférences cookies</strong> : mémorise votre choix sur la bannière de consentement. Durée : 12 mois.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Partage des données */}
          <section>
            <h2 className="text-lg font-semibold text-[#0f0f0f] mb-4 pb-3 border-b border-black/[0.1]">
              5. Partage des données
            </h2>
            <p className="text-sm mb-3">
              Vos données personnelles ne sont <strong className="text-[#0f0f0f]">jamais vendues ni cédées</strong> à des tiers à des fins commerciales.
            </p>
            <p className="text-sm mb-3">Elles peuvent être transmises aux sous-traitants techniques suivants, dans le strict cadre de leur mission :</p>
            <ul className="flex flex-col gap-2 text-sm list-disc list-inside marker:text-[#6b8a00]">
              <li><strong className="text-[#0f0f0f]">Vercel Inc.</strong> (hébergement) · politique disponible sur vercel.com/legal/privacy-policy</li>
              <li><strong className="text-[#0f0f0f]">Prestataires email</strong> utilisés pour répondre à vos demandes (Gmail / messagerie professionnelle)</li>
            </ul>
          </section>

          {/* Vos droits */}
          <section>
            <h2 className="text-lg font-semibold text-[#0f0f0f] mb-4 pb-3 border-b border-black/[0.1]">
              6. Vos droits
            </h2>
            <p className="text-sm mb-5">
              Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                ["Droit d'accès", 'Obtenir une copie des données vous concernant'],
                ['Droit de rectification', 'Corriger des données inexactes ou incomplètes'],
                ["Droit à l'effacement", 'Demander la suppression de vos données'],
                ['Droit à la portabilité', 'Recevoir vos données dans un format structuré'],
                ["Droit d'opposition", "Vous opposer à un traitement basé sur notre intérêt légitime"],
                ['Droit de limitation', "Demander la suspension temporaire d'un traitement"],
              ].map(([droit, desc]) => (
                <div key={droit} className="bg-black/[0.03] border border-black/[0.08] rounded-xl p-4">
                  <p className="text-sm font-semibold text-[#0f0f0f] mb-1">{droit}</p>
                  <p className="text-xs text-[#6a6a6a]">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm mt-6">
              Pour exercer vos droits, contactez-nous par email à{' '}
              <a href="mailto:contact@benraffstudio.com" className="text-[#6b8a00] hover:underline">
                contact@benraffstudio.com
              </a>{' '}
              en précisant votre demande. Nous nous engageons à répondre sous <strong className="text-[#0f0f0f]">30 jours</strong>.
            </p>
            <p className="text-sm mt-4">
              Vous pouvez également introduire une réclamation auprès de la{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#6b8a00] hover:underline">
                CNIL (cnil.fr)
              </a>.
            </p>
          </section>

          {/* Sécurité */}
          <section>
            <h2 className="text-lg font-semibold text-[#0f0f0f] mb-4 pb-3 border-b border-black/[0.1]">
              7. Sécurité des données
            </h2>
            <p className="text-sm">
              Des mesures techniques et organisationnelles appropriées sont mises en œuvre pour protéger vos données contre tout accès non autorisé, perte ou altération : connexion HTTPS, accès restreint aux données, hébergement chez un prestataire certifié.
            </p>
          </section>

          {/* Contact DPO */}
          <section>
            <h2 className="text-lg font-semibold text-[#0f0f0f] mb-4 pb-3 border-b border-black/[0.1]">
              8. Contact
            </h2>
            <p className="text-sm">
              Pour toute question relative à cette politique ou à vos données personnelles :{' '}
              <a href="mailto:contact@benraffstudio.com" className="text-[#6b8a00] hover:underline">
                contact@benraffstudio.com
              </a>
            </p>
          </section>

          <p className="text-xs text-[#5a5a5a] border-t border-black/[0.08] pt-8">
            Dernière mise à jour : mai 2026. BenRaff Studio se réserve le droit de modifier cette politique à tout moment. La version en vigueur est celle publiée sur cette page.
          </p>
        </div>
      </main>
    </div>
  )
}
