# 🐾 Pet Gallery – React + TypeScript Hackathon Project

A modern, responsive pet image gallery built with **React, TypeScript, and styled-components**.  
This project demonstrates full frontend engineering capabilities including data fetching, global state management, infinite scrolling, dynamic routing, and ZIP file generation.

---

## 🚀 Live Demo

👉 ** Deployment:**  

https://eulerity-hackathon-1im9dt81o-avdigrigolis-projects.vercel.app/

---

## 📸 Features

### 🖼️ Image Gallery
- Fetches pet data from: https://eulerity-hackathon.appspot.com/pets

- Displays images with title, description, and metadata
- Responsive grid layout:
- 1 column (mobile)
- 2 columns (tablet)
- 4 columns (desktop)

---

### 🔍 Search & Sorting
- Search by **title or description**
- Sort options:
- Name A–Z
- Name Z–A
- Newest First
- Oldest First

---

### ☑️ Selection System
- Select / deselect individual pets
- Select All / Clear Selection
- Global selection state persists across routes
- Selection count displayed in toolbar

---

### 📦 Download Feature
- Download selected images as a `.zip`
- Built using:
- JSZip
- FileSaver
- Includes:
- Progress tracking
- File size estimation
- Concurrent image fetching

---

### 🔎 Detail Pages (React Router)
- Dynamic route:
```

/pets/:id

````
- Individual pet detail view
- Select/unselect from detail page
- Navigation back to gallery

---

### ⚡ Performance Features
- Infinite scroll using IntersectionObserver
- Concurrent image fetching for ZIP creation
- Optimized rendering using useMemo and React hooks

---

### 🧠 Architecture Highlights
- Custom hook: `usePets`
- Handles loading, error, empty states
- Global state via Context API
- Selection persists across routes
- Clean separation of:
- API layer
- Hooks
- Components
- Pages

---

### 🎨 UI System
- Built with **styled-components**
- Responsive design system
- Sticky toolbar with search + filters
- Skeleton loading states

---

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- styled-components
- react-router-dom
- jszip
- file-saver

---

## 📦 Installation & Setup

### 1. Clone the repo
```bash
git clone https://github.com/your-username/pet-gallery.git
cd pet-gallery
````

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Start development server

```bash
npm run dev
```

App runs at:

```
http://localhost:5173
```

---

### 4. Build for production

```bash
npm run build
```

---

### 5. Preview production build

```bash
npm run preview
```

---

## 🌐 Deployment

This project is optimized for **Vercel deployment**.

Steps:

1. Push repo to GitHub
2. Import into Vercel
3. Select **Vite preset**
4. Deploy 🚀

---

## 📁 Project Structure

```
src/
│
├── api/              # API requests
├── components/       # UI components
├── context/          # Global state (selection)
├── hooks/            # Custom hooks (usePets)
├── pages/            # Route pages (Home, Detail, About)
├── routes/           # App routing
├── types/            # TypeScript types
├── utils/            # Helpers (ZIP download, etc.)
│
├── App.tsx
└── main.tsx
```

---

## ✨ Key Implementation Notes

* Selection state persists using Context + localStorage
* Infinite scroll via IntersectionObserver
* ZIP download with concurrent fetching
* File size estimation for selected images
* Fully typed API → domain model transformation

---

## 👤 About

Hi, I’m **Anthony DiGrigoli**, a Full Stack Software Developer with a strong focus on frontend engineering. I specialize in building clean, accessible, and high-performance interfaces while also working across the full stack to bring complete applications to life.

---

I’m a full stack developer focused on building clean, responsive, and user-centered applications with a strong interest in turning ideas into real usable products. I enjoy working across the stack to solve problems end-to-end—from designing interfaces to implementing backend logic.

Recently, I’ve been especially focused on developing my own app projects to sharpen both my technical skills and product thinking.

Outside of engineering, I enjoy:
- 🏒 Watching hockey (big New York Rangers fan)
- 🏋️ Training and staying active at the gym
- 🚣 Kayaking and outdoor activities
- 🎬 Watching movies and exploring storytelling

I bring that same curiosity for design, systems, and experience into the way I build software.

---

## 💼 Experience

### Senior Associate – Software Engineering
**Manhattan Strategies** (Aug 2024 – Present)
- Built high-performance websites using React, JavaScript, Webflow, and GSAP
- Improved SEO and AEO strategies to increase visibility and engagement
- Led internal and client-facing projects from kickoff to launch
- Established scalable Agile workflows across teams
- Delivered full-stack applications for enterprise and Fortune 100 clients
- Integrated automation tools with Salesforce, HubSpot, and Zapier

---

### Lead Full Stack Developer
**Azark** (Jul 2023 – Aug 2024)
- Built NYC property intelligence dashboard using React and external APIs
- Developed full-stack blog system with Node.js, Express, and MongoDB
- Created data visualization tools generating DOCX/PDF property reports
- Designed and deployed client websites using React, Figma, and Node.js

---

### Full Stack Developer
**Lifeline Media** (Oct 2022 – Jun 2023)
- Built restaurant websites and ordering systems with React and Node.js
- Improved client SEO and online presence across multiple projects
- Developed data-driven internal tools using NYC APIs and CSV/SQL pipelines

---

### Freelance Developer (2020 – Present)
- Built full-stack Java-based ecommerce system (Picturehouse441)
- Developed real-time social applications (Polr App, Lifeline Chat)
- Created video streaming and event ticketing platforms
- Built React Native + Firebase community-driven social apps

---

## 🚀 Projects

A selection of client and production work:

### Enterprise & Agency Work
- Groundbreakers (Prologis)
- Fedcap Group
- IPC
- Spotlight on Poverty
- BTS Platform
- Groundbreakers Magazine
- Manhattan Strategies Website
- Boxcar Digital

### Nonprofit & Civic Tech
- Community Work Services
- NY Tech Alliance
- Civic Hall
- Fedcap Canada
- Easterseals Lone Star
- Single Stop

### AI / Fintech / Startup Ecosystem
- Shaper Capital
- Shaper AI Summit
- Adelphi AI
- Fractional AI
- American Fintech Council
- Fintech Summit

### Additional Work
- Prudentia Sciences Dashboard
- Bamberg & Vlasto
- Qnovo
- ACT
- Dr. Brown’s Soda
- AI Imperative 2030
- HP Newsroom
- Apex Technical Schools
- Runway of Dreams
- Cedar Innovation
- Plot2x
- CIPI

---

## 🛠 Tech Focus

- React / TypeScript / JavaScript
- Node.js / Express / MongoDB
- Webflow + GSAP
- React Native
- REST & API Integrations
- Data Visualization
- Full Stack Architecture

---

## 📄 License

This project is for evaluation/demo purposes.
