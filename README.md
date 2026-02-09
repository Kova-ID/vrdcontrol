# 🏗️ VRDControl - Construction Site Tracking

**Open-source web application for VRD (Voirie et Réseaux Divers) construction site tracking and management.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Alpha](https://img.shields.io/badge/version-0.6.0--alpha-orange.svg)]()

---

## ✨ Features

- **Interactive Map** — Place and manage inspection points on OpenStreetMap or satellite imagery
- **Status Tracking** — Track work progress (To Do → In Progress → Done) with full audit trail
- **Photo Documentation** — Attach multiple photos per point with automatic compression
- **GPS Geolocation** — Locate yourself on-site with smartphone GPS
- **Professional Reports** — Generate HTML reports with embedded maps and photos
- **🆕 Interactive Reports** — Send reports that recipients can modify (statuses, photos, notes) and sync back
- **Offline-First** — Works without internet, data stored locally
- **Mobile Responsive** — Full functionality on smartphones and tablets
- **Archive System** — Archive completed projects with configurable retention periods
- **Export Formats** — HTML, Interactive HTML, CSV, and plain text

## 🚀 What's New in Alpha 0.6.0

### Interactive HTML Reports ⭐

The standout feature: generate a self-contained HTML file that your contractors can **modify directly**:

1. **You** generate an interactive report and email it
2. **Contractor** opens the HTML, changes statuses, adds photos and notes
3. **Contractor** clicks "Download sync file" → gets a `.json` file
4. **You** import the `.json` in VRDControl → all changes applied with full traceability

**No accounts, no server, no authentication needed.** Just email.

### Multi-Photo Support

Points now support multiple photos with a grid preview and easy management.

### Modular Codebase

The application has been refactored from a single 3000+ line HTML file into a clean, documented, multi-file architecture.

## 📁 Project Structure

```
vrdcontrol/
├── index.html              # Main application entry point
├── css/
│   └── main.css            # All application styles
├── js/
│   ├── core/
│   │   ├── helpers.js      # Async utilities (timeout, image loading)
│   │   └── app.js          # App initialization and global handlers
│   ├── storage/
│   │   └── storage.js      # Data persistence (localStorage + future cloud)
│   ├── map/
│   │   ├── map.js          # Leaflet map setup and marker management
│   │   └── capture.js      # Map screenshot capture for reports
│   ├── ui/
│   │   ├── modals.js       # Modal dialog management
│   │   ├── projects.js     # Project CRUD and sidebar
│   │   ├── archives.js     # Archive management
│   │   └── points.js       # Point CRUD and multi-photo support
│   └── reports/
│       ├── standard.js     # Static HTML report generation
│       ├── interactive.js  # Interactive HTML report (NEW)
│       ├── sync.js         # Sync file import for interactive reports
│       ├── csv.js          # CSV/Excel export
│       └── text.js         # Plain text export
├── README.md
├── LICENSE
└── CREDITS.md
```

## 🛠️ Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/vrdcontrol.git
   ```

2. Serve with any static file server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

3. Open `http://localhost:8000` in your browser

> **Note:** For GPS geolocation on mobile, deploy with HTTPS (GitHub Pages provides this automatically).

## 🌐 Deployment

### GitHub Pages (Recommended — Free)
1. Push to GitHub
2. Go to Settings → Pages → Deploy from branch `main`
3. Your app is live at `https://username.github.io/vrdcontrol/`

### Cloudflare Pages (Alternative — Free)
1. Connect your GitHub repo to Cloudflare Pages
2. Build command: _(none, static site)_
3. Output directory: `/`

## 📊 Technology Stack

| Technology | Purpose | License |
|-----------|---------|---------|
| [Leaflet.js](https://leafletjs.com/) | Interactive maps | BSD-2-Clause |
| [OpenStreetMap](https://www.openstreetmap.org/) | Map tiles | ODbL |
| [Esri World Imagery](https://www.arcgis.com/) | Satellite tiles | Esri Terms |
| [leaflet-simple-map-screenshoter](https://github.com/grinat/leaflet-simple-map-screenshoter) | Fast map capture | MIT |
| [html2canvas](https://html2canvas.hertzen.com/) | Fallback screenshot | MIT |
| [Nominatim](https://nominatim.org/) | Reverse geocoding | ODbL |
| [Barlow](https://fonts.google.com/specimen/Barlow) | UI typography | OFL |
| [JetBrains Mono](https://www.jetbrains.com/lp/mono/) | Technical data font | OFL |

## 💝 Support Open Source

VRDControl is built on the shoulders of open-source projects. Please consider supporting them:

| Project | Donate |
|---------|--------|
| **Leaflet.js** | [GitHub Sponsors — Vladimir Agafonkin](https://github.com/sponsors/mourner) |
| **OpenStreetMap** | [donate.openstreetmap.org](https://donate.openstreetmap.org/) |
| **html2canvas** | [GitHub Sponsors — Niklas von Hertzen](https://github.com/sponsors/nicknisi) |
| **JetBrains Mono** | [JetBrains Open Source](https://www.jetbrains.com/community/opensource/) |
| **Nominatim / OSM** | [OpenStreetMap Foundation](https://supporting.openstreetmap.org/) |

## 🤝 Contributing

Contributions are welcome! Whether it's bug reports, feature requests, or code:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Cédric Kovacevic** — [VRDControl](https://github.com/YOUR_USERNAME/vrdcontrol)

---

<p align="center">
  🏗️ Built for construction professionals, by construction professionals.<br>
  <strong>VRDControl</strong> — Suivi professionnel de chantiers VRD
</p>
