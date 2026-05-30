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
    <div className="min-h-screen bg-[#1e1e1e] text-white">
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
        <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#c8e84e] mb-4">Vos droits &amp; vos données</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Politique de confidentialité
        </h1>
        <p className="text-[#9a9a9a] text-sm mb-16">Conforme au Règlement Général sur la Protection des Données (RGPD, UE 2016/679)</p>

        <div className="flex flex-col gap-14 text-[#b8b8b8] leading-relaxed">

          {/* Responsable */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-white/[0.1]">
              1. Responsable du traitement
            </h2>
            <ul className="flex flex-col gap-1.5 text-sm">
              <li><span className="text-[#9a9a9a]">Nom :</span> Benjamin Raffegeau · BenRaff Studio</li>
              <li><span className="text-[#9a9a9a]">Adresse :</span> Rennes (35000), France</li>
              <li><span className="text-[#9a9a9a]">Email :</span>{' '}
                <a href="mailto:contact@benraffstudio.com" className="text-[#c8e84e] hover:underline">
                  contact@benraffstudio.com
                </a>
              </li>
              <li><span className="text-[#9a9a9a]">Téléphone :</span> 06 24 51 76 41</li>
            </ul>
          </section>

          {/* Données collectées */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-white/[0.1]">
              2. Données collectées et finalités
            </h2>
            <p className="text-sm mb-6">
              BenRaff Studio collecte uniquement les données strictement nécessaires au traitement de vos demandes. Aucune donnée n'est collectée à des fins commerciales ou revendue à des tiers.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.1]">
                    <th className="text-left text-xs font-semibold tracking-wider uppercase text-[#9a9a9a] pb-3 pr-6">Donnée</th>
                    <th className="text-left text-xs font-semibold tracking-wider uppercase text-[#9a9a9a] pb-3 pr-6">Finalité</th>
                    <th className="text-left text-xs font-semibold tracking-wider uppercase text-[#9a9a9a] pb-3">Base légale</th>
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
                      <td className="py-3 pr-6 text-white font-medium">{donnee}</td>
                      <td className="py-3 pr-6 text-[#9a9a9a]">{finalite}</td>
                      <td className="py-3 text-[#9a9a9a]">{base}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Durée de conservation */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-white/[0.1]">
              3. Durée de conservation
            </h2>
            <ul className="flex flex-col gap-2 text-sm list-disc list-inside marker:text-[#c8e84e]">
              <li>Données du formulaire de contact : <strong className="text-white">3 ans</strong> à compter du dernier contact</li>
              <li>Données clients (devis, contrats) : <strong className="text-white">5 ans</strong> (obligation légale comptable)</li>
              <li>Logs techniques : <strong className="text-white">12 mois</strong> maximum</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-white/[0.1]">
              4. Cookies et traceurs
            </h2>
            <p className="text-sm mb-4">
              Ce site utilise uniquement des cookies <strong className="text-white">strictement nécessaires</strong> à son fonctionnement technique. Aucun cookie publicitaire, de profilage ou de suivi analytique n'est déposé sans votre consentement.
            </p>
            <div className="bg-black/[0.03] border border-white/[0.06] rounded-xl p-5 text-sm">
              <p className="font-medium text-white mb-3">Cookies utilisés :</p>
              <ul className="flex flex-col gap-2 text-[#9a9a9a]">
                <li className="flex gap-3">
                  <span className="text-[#c8e84e] flex-shrink-0">→</span>
                  <span><strong className="text-white">Cookie de session</strong> : technique, nécessaire au fonctionnement du formulaire de contact. Durée : session.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c8e84e] flex-shrink-0">→</span>
                  <span><strong className="text-white">Préférences cookies</strong> : mémorise votre choix sur la bannière de consentement. Durée : 12 mois.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Partage des données */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-white/[0.1]">
              5. Partage des données
            </h2>
            <p className="text-sm mb-3">
              Vos données personnelles ne sont <strong className="text-white">jamais vendues ni cédées</strong> à des tiers à des fins commerciales.
            </p>
            <p className="text-sm mb-3">Elles peuvent être transmises aux sous-traitants techniques suivants, dans le strict cadre de leur mission :</p>
            <ul className="flex flex-col gap-2 text-sm list-disc list-inside marker:text-[#c8e84e]">
              <li><strong className="text-white">Vercel Inc.</strong> (hébergement) · politique disponible sur vercel.com/legal/privacy-policy</li>
              <li><strong className="text-white">Prestataires email</strong> utilisés pour répondre à vos demandes (Gmail / messagerie professionnelle)</li>
            </ul>
          </section>

          {/* Vos droits */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-white/[0.1]">
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
                <div key={droit} className="bg-black/[0.03] border border-white/[0.06] rounded-xl p-4">
                  <p className="text-sm font-semibold text-white mb-1">{droit}</p>
                  <p className="text-xs text-[#9a9a9a]">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm mt-6">
              Pour exercer vos droits, contactez-nous par email à{' '}
              <a href="mailto:contact@benraffstudio.com" className="text-[#c8e84e] hover:underline">
                contact@benraffstudio.com
              </a>{' '}
              en précisant votre demande. Nous nous engageons à répondre sous <strong className="text-white">30 jours</strong>.
            </p>
            <p className="text-sm mt-4">
              Vous pouvez également introduire une réclamation auprès de la{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#c8e84e] hover:underline">
                CNIL (cnil.fr)
              </a>.
            </p>
          </section>

          {/* Sécurité */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-white/[0.1]">
              7. Sécurité des données
            </h2>
            <p className="text-sm">
              Des mesures techniques et organisationnelles appropriées sont mises en œuvre pour protéger vos données contre tout accès non autorisé, perte ou altération : connexion HTTPS, accès restreint aux données, hébergement chez un prestataire certifié.
            </p>
          </section>

          {/* Contact DPO */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-white/[0.1]">
              8. Contact
            </h2>
            <p className="text-sm">
              Pour toute question relative à cette politique ou à vos données personnelles :{' '}
              <a href="mailto:contact@benraffstudio.com" className="text-[#c8e84e] hover:underline">
                contact@benraffstudio.com
              </a>
            </p>
          </section>

          <p className="text-xs text-[#7a7a7a] border-t border-white/[0.06] pt-8">
            Dernière mise à jour : mai 2026. BenRaff Studio se réserve le droit de modifier cette politique à tout moment. La version en vigueur est celle publiée sur cette page.
          </p>
        </div>
      </main>
    </div>
  )
}
