# Replica Kitchen Create

Un site destiné à la création de factices alimentaires

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2a84be4c-aab4-5d5b-a6ce-0459233476d7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Déploiement sur GitHub Pages

Le workflow `.github/workflows/deploy-pages.yml` déploie le site à chaque push
sur `main`. Il peut aussi être lancé depuis **Actions → Deploy Factice Works to
GitHub Pages → Run workflow**.

Dans le dépôt GitHub, ouvrir **Settings → Pages → Build and deployment**, puis
choisir **GitHub Actions** comme source. Le dépôt doit être connecté à Lovable
ou contenir une copie de ce projet ; le workflow ne crée pas de dépôt.

Le workflow teste le site, génère sa version statique et publie uniquement
`dist/client`. Le chemin du dépôt (ou du domaine personnalisé) est détecté par
GitHub Pages pour que les images et les liens restent corrects. Le mode
`github-pages` ne modifie pas le déploiement habituel sur Lovable.
