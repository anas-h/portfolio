# Portfolio — Anass Hilama

Portfolio personnel bilingue (FR / EN) : profil, expérience et projets.

**Stack** : Next.js 16 (App Router), TypeScript, Tailwind CSS v4. Les deux
langues sont prégénérées en statique, aucune dépendance au-delà du framework.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run start    # sert le build
```

## Multilingue

| Route  | Contenu                                                    |
| ------ | ---------------------------------------------------------- |
| `/`    | Redirige vers la langue du navigateur, repli sur `/fr`     |
| `/fr`  | Version française                                          |
| `/en`  | Version anglaise                                           |

La redirection depuis `/` est gérée par `src/proxy.ts` (le nom `middleware` est
déprécié depuis Next 16). Les deux locales sont déclarées dans
`src/content/dictionaries.ts` — en ajouter une revient à créer un fichier de
contenu et à l'enregistrer dans ce dictionnaire.

## Modifier le contenu

Le contenu vit dans **`src/content/fr.ts`** et **`src/content/en.ts`**, qui
respectent tous deux le type `Content` défini dans `src/content/types.ts`.
TypeScript signale toute clé manquante dans une des deux langues. Aucun
composant n'a besoin d'être touché pour mettre le site à jour.

| Clé           | Ce qu'elle alimente                                  |
| ------------- | ---------------------------------------------------- |
| `profile`     | Nom, rôle, accroche, photo, liens                    |
| `experiences` | Timeline des missions                                |
| `heroStats`   | Repères chiffrés du bandeau d'ouverture               |
| `projects`    | Projets (cartes du carrousel + détail)               |
| `stack`       | Technologies, groupées par type (section dédiée)     |
| `education`   | Formation                                            |
| `languages`   | Langues                                              |
| `ui.nav*`     | Libellés de la navigation (voir `src/content/sections.ts` pour les `id`, communs aux deux langues) |
| `ui`          | Libellés d'interface hors contenu éditorial          |

Le CV téléchargeable est `public/cv.pdf` et la photo `public/anass.jpg` — les
remplacer suffit à mettre le site à jour.

## Design

- Fond sombre, barre de navigation collante en haut, contenu en pleine largeur
  dans un conteneur centré.
- Ouverture (`Hero`) : identité, portrait et repères chiffrés (`heroStats`).
- Les travaux sont un carrousel de cartes (`ProjectCarousel`) : défilement
  natif par `scroll-snap`, piloté par les boutons et les pastilles. Le geste
  tactile fonctionne sans JS.
- Un seul accent couleur (`--color-accent`), défini dans `src/app/globals.css`.
- Révélation au scroll via `IntersectionObserver` (`src/components/Reveal.tsx`),
  neutralisée si `prefers-reduced-motion` est actif et désactivée sans JS
  (`<noscript>` dans le layout), pour que le contenu reste lisible dans tous les
  cas — y compris à l'arrivée sur une ancre profonde.
- Halo suivant le curseur (`src/components/Spotlight.tsx`), inactif au tactile.

## Formulaire de contact

Le formulaire poste vers une Server Action (`src/app/[lang]/actions.ts`) qui
valide côté serveur — dans la langue de la page — puis délègue l'envoi à
`src/lib/mailer.ts`. Celui-ci appelle l'API HTTP de Resend avec `fetch`, sans
SDK : pour changer de fournisseur, cette seule fonction est à réécrire.

Trois variables d'environnement sont nécessaires, sans quoi l'envoi échoue et
le formulaire affiche son message d'erreur :

```bash
RESEND_API_KEY=re_xxx
CONTACT_TO_EMAIL=hilama.anas@gmail.com
CONTACT_FROM_EMAIL=contact@ton-domaine.fr   # domaine vérifié chez Resend
```

Un champ piège (`website`), masqué et hors du parcours clavier, écarte les
robots. Il n'y a pas de limitation de débit : à ajouter si le formulaire prend
du spam.

## Déploiement

Production : VPS IONOS sous Ubuntu 24.04, Docker Compose et Traefik.
`anasshilama.com`.

Le site **ne peut pas être exporté en statique** : `src/proxy.ts` (redirection
`/` → langue) et la Server Action du formulaire ont besoin d'un runtime Node.
`next.config.ts` est en `output: "standalone"`, ce qui permet une image finale
sans `node_modules` complet.

### Première mise en place

```bash
# 1. DNS chez IONOS, avant tout le reste : Let's Encrypt valide par HTTP,
#    le domaine doit déjà pointer sur le VPS.
#    A     @     <IP du VPS>
#    A     www   <IP du VPS>

# 2. Sur le VPS
apt-get update && apt-get install -y docker.io docker-compose-plugin git
git clone <url-du-depot> /opt/portfolio && cd /opt/portfolio

# 3. Variables : le fichier sert à la fois à l'interpolation Compose
#    (DOMAIN, ACME_EMAIL) et aux variables du conteneur (RESEND_*).
cp .env.production.example .env.production
$EDITOR .env.production

# 4. Démarrage
docker compose -f docker-compose.prod.yml --env-file .env.production up -d --build
```

`--env-file` n'est pas optionnel : sans lui, Compose n'interpole pas `${DOMAIN}`
ni `${ACME_EMAIL}`, et Traefik démarre sans route ni certificat.

### Mises à jour

```bash
cd /opt/portfolio && git pull
docker compose -f docker-compose.prod.yml --env-file .env.production up -d --build
```

### Ce que fait la stack

- **Traefik** écoute sur 80 et 443, redirige tout le trafic clair vers HTTPS et
  obtient le certificat par challenge HTTP. Le socket Docker est monté en
  lecture seule, et aucun conteneur n'est exposé sans label explicite.
- **portfolio** ne publie aucun port sur l'hôte : Traefik l'atteint par le
  réseau `web`. Le conteneur tourne sous un utilisateur non privilégié.
- `www.anasshilama.com` est redirigé en 301 vers le domaine nu.

### Vérifications utiles

```bash
docker compose -f docker-compose.prod.yml --env-file .env.production ps
docker compose -f docker-compose.prod.yml --env-file .env.production logs -f portfolio
docker compose -f docker-compose.prod.yml --env-file .env.production logs traefik | grep -i acme
```
