# Orderly PWA 🚀

## 📖 Description
Orderly est une **PWA** qui permet aux utilisateurs de commander des repas à emporter.  
Elle est construite avec **Next.js, TailwindCSS et Symfony API Platform**.

## 🔧 Technologies utilisées
- **Frontend** : Next.js, TailwindCSS, Workbox (PWA)
- **Backend** : Symfony API Platform, PostgreSQL
- **CI/CD** : GitHub Actions, Docker
- **Hébergement** : Vercel (frontend), AWS ou autre (backend)

## 📂 Structure du projet
orderly-pwa ├── backend/ (Symfony API) ├── frontend/ (Next.js PWA) ├── docs/ (Documentation) ├── .github/ (CI/CD) └── README.md


## 🚀 Installation
```bash
# Cloner le repo
git clone https://github.com/ton-user/orderly-pwa.git
cd orderly-pwa

# Installation du frontend
cd frontend
npm install
npm run dev

# Installation du backend (Symfony)
cd backend
composer install
php bin/console serve


---

## ✅ **4. Gestion des branches et commits**
### 🔹 **Organisation des branches**
- `main` → **Version stable et déployée**  
- `develop` → **Branche de développement principale**  
- `feature/xxx` → **Branches spécifiques aux nouvelles fonctionnalités**  
- `fix/xxx` → **Branches pour corriger des bugs**  

Exemple de création de branche :
```bash
git checkout -b feature/authentication
git push origin feature/authentication

git commit -m "[feat] Ajout de l'authentification avec JWT"
git commit -m "[fix] Correction du bug d'affichage du panier"
git commit -m "[docs] Ajout de la documentation API"

