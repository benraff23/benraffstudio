# Mini-site de présentation client

Page privée ouverte en rendez-vous par le paysagiste devant son client final.
Elle met en scène les livrables du projet, elle ne les commente pas.

URL : `https://benraffstudio.com/projets/presentation/<slug>`

`noindex` + `nofollow`, absente du sitemap, aucun lien depuis le site. Le segment
`presentation` est statique : il est prioritaire sur `/projets/[slug]` et n'entre
donc jamais en conflit avec un projet du portfolio.

## Ajouter un projet

**1. Déposer les assets** dans `public/presentation/<slug>/` :

```
public/presentation/jardin-saint-lunaire/
  hero.webp
  plan.webp
  terrasse-bois.webp
  bassin-miroir.webp
  ...
  video.mp4
```

Images en `.webp` (les vues sont affichées pleine largeur : viser 2400 px de large
maximum). Le plan doit être exporté à plat, sans annotation incrustée : les points
sont posés par le template.

**2. Ajouter l'objet projet** dans `lib/presentation-data.ts`, tableau `presentations` :

```ts
{
  slug: 'jardin-saint-lunaire',
  titre: 'Jardin littoral',
  localisation: 'Saint-Lunaire (35)',
  paysagiste: { nom: 'Atelier Kerlan', logoUrl: '/presentation/jardin-saint-lunaire/logo.svg' },
  heroImage: '/presentation/jardin-saint-lunaire/hero.webp',
  plan3d: {
    image: '/presentation/jardin-saint-lunaire/plan.webp',
    download: '/presentation/jardin-saint-lunaire/plan.webp',
    hotspots: [
      { x: 44, y: 33, label: 'Terrasse bois', imageIndex: 0 },
      { x: 74, y: 39, label: 'Bassin miroir', imageIndex: 1 },
    ],
  },
  imagesSignature: [
    { src: '...terrasse-bois.webp', alt: '...', zone: 'Terrasse bois', downloadHd: '...terrasse-bois.webp' },
    { src: '...bassin-miroir.webp', alt: '...', zone: 'Bassin miroir', downloadHd: '...bassin-miroir.webp' },
  ],
  maquetteXR: { embedUrl: 'https://<url-embed-d5-xr-tour>' },
  video: { url: '...video.mp4', poster: '...hero.webp', download: '...video.mp4' },
}
```

C'est tout : la page est générée au build (`generateStaticParams`).

## Les hotspots du plan

`x` et `y` sont des **pourcentages de l'image du plan** (0-100), pas des pixels :
le positionnement reste juste quel que soit l'écran.

Pour relever les coordonnées : ouvrir l'image du plan seule dans le navigateur,
console, puis cliquer sur le point voulu —

```js
document.querySelector('img').addEventListener('click', e => {
  const r = e.target.getBoundingClientRect()
  console.log(
    +(((e.clientX - r.left) / r.width) * 100).toFixed(1),
    +(((e.clientY - r.top) / r.height) * 100).toFixed(1)
  )
})
```

- `label` : deux ou trois mots, vocabulaire paysagiste. Il s'affiche au survol et
  au focus clavier.
- `imageIndex` : index dans `imagesSignature`. Le clic ouvre la vue en plein écran.
  Sans `imageIndex`, le clic se contente d'afficher le label.
- Éviter `y` inférieur à 8 : le label s'affiche au-dessus du point et serait rogné.

## Livrables optionnels

`maquetteXR` et `video` absents : les sections correspondantes ne sont pas rendues,
l'alternance des fonds reste correcte. Une image sans `downloadHd` n'apparaît pas
dans la liste « À télécharger » et n'affiche pas de bouton HD.

## Signature BenRaff

Par défaut, pied de page « Réalisation 3D - BenRaff Studio ». Pour la retirer sur
un projet : `branding: { whiteLabel: true }` — le pied de page disparaît entièrement.

## Démo

Deux projets d'exemple avec placeholders (`public/presentation-demo/`) :

- `/projets/presentation/jardin-saint-lunaire` — complet : 6 hotspots, 5 vues,
  maquette XR, vidéo.
- `/projets/presentation/terrasse-dinard` — allégé : ni maquette XR ni vidéo.

Les deux sont à supprimer de `lib/presentation-data.ts` quand les vrais projets
arrivent, avec le dossier `public/presentation-demo/`.
