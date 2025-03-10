# Étape 1 : Builder
FROM node:18 AS builder
WORKDIR /app

# Copier uniquement les fichiers de dépendances pour optimiser le cache
COPY package.json package-lock.json ./

# Installer les dépendances (mise en cache si package.json n'a pas changé)
RUN npm install

# Copier le reste du code source après l'installation des dépendances
COPY . .

# Build de l'application Next.js
RUN npm run build

# Étape 2 : Image finale optimisée
FROM node:18-alpine AS runner
WORKDIR /app

# Copier uniquement les fichiers nécessaires depuis le builder
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/package-lock.json package-lock.json
COPY --from=builder /app/node_modules node_modules

# Installer uniquement les dépendances de production
RUN npm ci --only=production

# Exposer le port Next.js (3000 par défaut)
EXPOSE 3000

# Lancer Next.js en mode production
CMD ["npm", "start"]
