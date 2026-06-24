# Trouve ton artisan !

Projet fictif réalisé dans le cadre de la formation Développeur Web Full Stack — plateforme de mise en relation entre particuliers et artisans de la région Auvergne-Rhône-Alpes.

🔗 **Site en ligne** : https://trouve-ton-artisan-mb.netlify.app
🔗 **API en ligne** : https://trouve-ton-artisan-lhvw.onrender.com

## Sommaire

- [Stack technique](#stack-technique)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Base de données](#base-de-données)
- [Lancement du projet](#lancement-du-projet)
- [Structure du projet](#structure-du-projet)

## Stack technique

**Front-end** : React (Vite), React Router, Bootstrap, Sass
**Back-end** : Node.js, Express, Sequelize
**Base de données** : MySQL

## Prérequis

- [Node.js](https://nodejs.org/) (v18 ou supérieure)
- [MySQL](https://www.mysql.com/) (ou MariaDB)
- Un gestionnaire de paquets : npm (inclus avec Node.js)

## Installation

1. Cloner le dépôt :
```bash
git clone https://github.com/Marine-Briet/trouve-ton-artisan.git
cd trouve-ton-artisan
```

2. Installer les dépendances du back-end :
```bash
cd server
npm install
```

3. Installer les dépendances du front-end :
```bash
cd ../client
npm install
```

## Base de données

1. Créer une base de données MySQL nommée `trouve_ton_artisan`.

2. Exécuter les scripts SQL situés dans `server/database/`, dans l'ordre :
   - `01_creation.sql` — création des tables (`categorie`, `specialite`, `artisan`)
   - `02_population.sql` — jeu de données de test (4 catégories, 15 spécialités, 17 artisans)

3. Configurer les variables d'environnement du back-end :

   Dans le dossier `server/`, créer un fichier `.env` à partir de `.env.example` et renseigner vos propres valeurs :

```
DB_HOST=localhost
DB_PORT=3306
DB_NAME=trouve_ton_artisan
DB_USER=root
DB_PASSWORD=votre_mot_de_passe
DB_SSL=false

API_KEY=votre_cle_api

EMAIL_USER=votre_adresse_gmail
EMAIL_PASSWORD=votre_mot_de_passe_application
```

   > La clé `API_KEY` peut être une chaîne aléatoire de votre choix (elle sécurise l'accès à l'API). `EMAIL_USER`/`EMAIL_PASSWORD` correspondent à un compte Gmail dédié à l'envoi des emails du formulaire de contact, avec un [mot de passe d'application](https://support.google.com/accounts/answer/185833).

4. Configurer les variables d'environnement du front-end :

   Dans le dossier `client/`, créer un fichier `.env` :

```
VITE_API_URL=http://localhost:3000/api
VITE_API_KEY=la_meme_cle_que_cote_serveur
```

## Lancement du projet

**Back-end** (depuis `server/`) :
```bash
npm run dev
```
L'API est disponible sur `http://localhost:3000`.

**Front-end** (depuis `client/`, dans un second terminal) :
```bash
npm run dev
```
Le site est disponible sur `http://localhost:5173`.

## Structure du projet

```
trouve-ton-artisan/
├── client/              # Application React (front-end)
│   ├── src/
│   │   ├── components/  # Header, Footer, Layout, Breadcrumb...
│   │   ├── pages/        # Home, Recherche, ArtisanDetail, NotFound...
│   │   ├── hooks/         # useSeo
│   │   ├── styles/        # Variables Sass + Bootstrap
│   │   └── utils/         # Fonctions d'appel à l'API
│   └── public/
├── server/              # API Node.js / Express (back-end)
│   ├── config/           # Configuration Sequelize
│   ├── controllers/      # Logique métier des routes
│   ├── database/         # Scripts SQL (création + population)
│   ├── middlewares/       # Vérification de la clé API
│   ├── models/            # Modèles Sequelize
│   └── routes/            # Définition des routes Express
└── README.md
```
