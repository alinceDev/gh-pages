# Vuepress

## Liens rapides

- [Documentation en ligne sur github](https://alincedev.github.io/gh-pages)
- [Documentation de vuepress](https://v1.vuepress.vuejs.org)

## Langage Markdown

L'écriture de la documentation nécessite de connaître un minimum le langage Markdown

- Consulter le guide sur le [Markdown](https://www.markdownguide.org/)
- Consulter le [Cheat sheet](https://www.markdownguide.org/cheat-sheet/)

## Hébergement

La documentation est hébergée sur le repository documentation sur Github via "Github page" accessible à l'adresse :
[https://alincedev.github.io/gh-pages](https://alincedev.github.io/gh-pages)

## Modification en ligne

Il est possible de modifier la documentation directement en ligne sur le repository Github via le petit IDE de Github ou depuis le vscode en ligne :
[https://github.dev/alinceDev/gh-pages](https://github.dev/alinceDev/gh-pages)

Des liens de modification sont aussi disponible sur la doc en ligne.

## Modification en local

Cloner le repository

```bash
git clone git@github.com:alinceDev/gh-pages.git`
```

Pour pouvoir lancer la documentation en local pour développer ou debugger il est nécessaire d'avoir nodejs en local.

Aller sur le repository puis faire un :
```bash
yarn install
```

### Les commandes 

Les commandes se trouvent dans le fichier package.json dans scripts

- `yarn dev` permet de lancer la doc en local pour tester si besoin le bon fonctionnement
- `yarn build` construit le site static de la doc, à exécuter seulement en prod.

## Configuration

La configuration de vuepress, ainsi que la gestion des liens et de la navigation se fait au travers du fichier :
`.vuepress/config.js`

## Deployer la documentation

Le déploiement est réalisé via un simple push du code ou via un commit sur le github du projet.

## Création d'une nouvelle page

La création d'une page consiste en la création d'un nouveau fichier markdown avec l'extension *.md, dans l'arborescence du dossier src/.
La page peut être ajouté soit dans le menu/navigation principal (nav), soit dans le menu latéral gauche (sidebar) du fichier :
`src/.vuepress/config.js`

```js
module.exports = {
    nav: [{},], 
    sidebar: [{},]
}
```

## Création d'un lien vers des documents

Tous les documents pdf, doc, docx et images (png, jpeg,...) doivent être placé dans le dossier src/.vuepress/public/assets.
Voici un exemple d'un lien qui fait référence à un document *.docx
- [Doc Webservices](/assets/webservice/doc.docx)

## Ajout de tags à une page

Exemple d'ajout de tags à une page.

```md
---
tags:
  - Installation
  - back
  - front 
  - blabla
---

# Installation

Mon fichier install.md
....

```




