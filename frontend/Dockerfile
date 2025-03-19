# Étape 1 : Base commune
FROM node:18 AS base
WORKDIR /app

# Copier uniquement les fichiers de dépendances
COPY package.json package-lock.json ./

# Étape 2 : Développement (avec hot reload)
FROM base AS dev
ENV NODE_ENV=development

# Installation des dépendances en mode développement
RUN npm install

# Copier tout le code source
COPY . .

# Exposer le port de développement
EXPOSE 3000

# Commande pour Next.js en mode développement (hot reload activé)
CMD ["npm", "run", "dev"]
