# 🏗️ VRDControl

> Système de suivi de chantiers VRD open-source, léger et souverain

[![License](https://img.shields.io/badge/License-MIT%20with%20Attribution-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-Alpha%200.5.1-orange.svg)](https://github.com/TON-USERNAME/vrdcontrol/releases)

## ✨ Fonctionnalités

- 📍 **Points géolocalisés** sur carte interactive OpenStreetMap
- 📸 **Photos compressées** automatiquement (JPEG 70%)
- 📊 **Rapports HTML professionnels** avec cartes et historique
- 🗺️ **Double fond de carte** : Standard (OSM) et Satellite (Esri)
- 💬 **Historique des statuts** avec timestamps et attribution
- 📱 **Responsive** : Fonctionne sur PC, tablette et smartphone
- 🔒 **100% auto-hébergeable** : Tes données, tes règles
- 🆓 **Gratuit et open-source** : 0€ de coût

## 🚀 Démo en ligne

**Accès direct (HTTPS) :**  
[https://TON-USERNAME.github.io/vrdcontrol/](https://TON-USERNAME.github.io/vrdcontrol/)

*Remplace `TON-USERNAME` par ton username GitHub*

## 📱 Plateformes supportées

- 💻 **Desktop** : Chrome, Firefox, Safari, Edge
- 📱 **Mobile** : Android (Chrome), iOS (Safari)
- 🌐 **Offline** : Fonctionne hors ligne après première visite (PWA)

## 🎯 Cas d'usage

- Suivi de chantiers VRD (Voirie et Réseaux Divers)
- Inspection d'infrastructures routières
- Relevé de nids de poule et marquages
- Documentation avant/après travaux
- Gestion multi-projets avec archivage

## 📖 Guide d'utilisation rapide

### 1️⃣ Créer un projet
```
Sidebar → ➕ Nouveau Projet → Entrer nom → Créer
```

### 2️⃣ Ajouter des points
```
Cliquer sur la carte → Remplir infos → Ajouter photo → Sauvegarder
```

### 3️⃣ Gérer les statuts
```
⏸️ À faire → ⏳ En cours → ✅ Terminé
(Historique complet avec dates et auteurs)
```

### 4️⃣ Générer un rapport
```
📊 Générer Rapport → Choisir format (HTML/CSV/TXT) → Télécharger
```

## 🔧 Installation locale

### Option 1 : Fichier unique (recommandé)
```bash
# Télécharger le fichier HTML
wget https://github.com/TON-USERNAME/vrdcontrol/raw/main/index.html

# Ouvrir dans le navigateur
firefox index.html
```

### Option 2 : Cloner le repository
```bash
git clone https://github.com/TON-USERNAME/vrdcontrol.git
cd vrdcontrol
firefox index.html
```

## 📱 Installation comme application

### Android (Chrome)
1. Ouvrir le site
2. Menu (⋮) → "Ajouter à l'écran d'accueil"
3. L'application apparaît comme une app native

### iOS (Safari)
1. Ouvrir le site
2. Bouton Partage → "Sur l'écran d'accueil"
3. Icône créée sur l'écran d'accueil

## 🌍 Hébergement

### GitHub Pages (gratuit)
```
✅ HTTPS automatique
✅ Certificat SSL valide
✅ CDN mondial
✅ 0€ à vie
```

### Alternatives
- **Vercel** : Déploiement automatique depuis GitHub
- **Netlify** : CI/CD intégré
- **Serveur perso** : Nginx + Let's Encrypt

## 💰 Coûts

| Poste | VRDControl | Kraaft (concurrent) |
|-------|-----------|---------------------|
| Développement | **0€** (open-source) | ~13M€ levés |
| Hébergement | **0€** (GitHub Pages) | Inclus dans abonnement |
| Prix par utilisateur | **0€** | **25€/mois** |
| **Total 50 users/an** | **0€** | **15 000€** |

**Économie : 15 000€/an** 🎯

## 🏆 Avantages vs solutions commerciales

| Critère | VRDControl | Kraaft | Autres |
|---------|-----------|--------|--------|
| **Prix** | 0€ | 25€/user/mois | 10-50€/user/mois |
| **Données** | Chez toi | Cloud propriétaire | Cloud |
| **Offline** | ✅ | ❌ | Partiel |
| **Open-source** | ✅ | ❌ | ❌ |
| **Customisation** | 100% | Limitée | Limitée |
| **Complexité** | Simple | Surchargé | Variable |

## 📜 Licence

**MIT License with Attribution Clause (MITAC)**

**Ce que tu peux faire :**
- ✅ Utiliser gratuitement (personnel ou commercial)
- ✅ Modifier le code
- ✅ Distribuer des versions modifiées
- ✅ Utiliser en interne dans ton entreprise

**Ce que tu dois faire :**
- 📋 Garder l'attribution "VRDControl" visible
- 📋 Partager le code source si distribution publique

**Ce que tu ne peux pas faire :**
- ❌ Rebrander comme ton propre produit commercial
- ❌ Retirer les crédits VRDControl

Voir le fichier [LICENSE](LICENSE) pour les détails complets.

## 🛠️ Technologies

- **Frontend** : HTML5, CSS3, JavaScript (Vanilla)
- **Carte** : Leaflet.js + OpenStreetMap / Esri Satellite
- **Stockage** : localStorage (client-side)
- **Capture** : html2canvas
- **PWA** : Service Workers pour mode offline

**Aucune dépendance serveur** = Déploiement trivial

## 📊 Fonctionnalités détaillées

### Gestion des projets
- ✅ Création/édition/suppression de projets
- ✅ Multi-projets simultanés
- ✅ Archive avec rétention configurable (3-12 mois)
- ✅ Statistiques par projet (todo/progress/done)

### Gestion des points
- ✅ Numérotation automatique
- ✅ Géolocalisation GPS smartphone
- ✅ Recherche d'adresse
- ✅ Clic direct sur carte
- ✅ Photos compressées (70% qualité)
- ✅ Commentaires riches
- ✅ 3 statuts avec historique complet

### Rapports
- ✅ Rapport HTML avec cartes intégrées
- ✅ Export CSV/Excel
- ✅ Export texte simple
- ✅ Liens GPS cliquables (Google Maps)
- ✅ Timeline des changements de statut
- ✅ Miniatures cartes par point (zoom 19)
- ✅ Carte générale du projet

### Mode invité (entreprise)
- ✅ URL unique par projet
- ✅ Lecture seule + validation
- ✅ Changement statuts trackés
- ✅ Pas d'édition/suppression

## 🗺️ Roadmap

### Version actuelle : Alpha 0.5.1
- ✅ Core fonctionnel validé
- ✅ Tests terrain positifs
- ✅ Rapports professionnels

### Prochaines versions

**Alpha 0.6.0** (2-3 semaines)
- 🔜 Multi-photos par point (avant/après)
- 🔜 Recherche globale tous projets
- 🔜 Notifications PWA

**Beta 0.8.0** (2-3 mois)
- 🔜 Intégration chat Zulip
- 🔜 Authentification multi-utilisateurs
- 🔜 API REST

**v1.0.0 Production** (6 mois)
- 🔜 Tests de charge validés
- 🔜 Documentation complète
- 🔜 Support communautaire

## 🤝 Contribution

Les contributions sont les bienvenues ! 

### Comment contribuer
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

### Signaler un bug
Ouvrir une [Issue](https://github.com/TON-USERNAME/vrdcontrol/issues) avec :
- Description du bug
- Étapes pour reproduire
- Comportement attendu vs observé
- Screenshots si pertinent

## 💬 Support

- 📧 **Email** : [ton-email@example.com]
- 💬 **Issues** : [GitHub Issues](https://github.com/TON-USERNAME/vrdcontrol/issues)
- 📖 **Documentation** : [Wiki](https://github.com/TON-USERNAME/vrdcontrol/wiki)

## 🙏 Remerciements

- **Claude AI** (Anthropic) : Développement assisté par IA
- **OpenStreetMap** : Données cartographiques ouvertes
- **Leaflet.js** : Bibliothèque de cartes interactive
- **Communauté open-source** : Inspiration et outils

## 📈 Statistiques

- ⭐ **Stars** : Si tu aimes le projet, laisse une étoile !
- 🍴 **Forks** : N'hésite pas à fork et contribuer
- 🐛 **Issues** : Signale les bugs pour améliorer l'app

## 📸 Screenshots

*(À ajouter après déploiement)*

## 🎯 FAQ

**Q: Mes données sont-elles sécurisées ?**  
R: Oui, tout est stocké localement dans ton navigateur (localStorage). Aucune donnée n'est envoyée à un serveur externe.

**Q: Ça fonctionne hors ligne ?**  
R: Oui, après la première visite, l'app fonctionne sans connexion internet (sauf fond de carte).

**Q: Puis-je l'utiliser commercialement ?**  
R: Oui, la licence le permet, tant que tu gardes l'attribution "VRDControl".

**Q: Comment récupérer mes données ?**  
R: Les rapports HTML/CSV contiennent toutes tes données. Tu peux aussi exporter le localStorage.

**Q: Y a-t-il une limite de projets/points ?**  
R: Limite = capacité localStorage de ton navigateur (~5-10MB). En pratique, plusieurs centaines de points.

---

**Développé avec ❤️ et Claude AI**

**Version :** Alpha 0.5.1  
**Dernière mise à jour :** 4 février 2025  
**Licence :** MIT with Attribution Clause
