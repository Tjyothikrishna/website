# Modern Company Website (React + Vite + Tailwind CSS)

This project is a modern, responsive company website built with **React** and **Vite**, styled using **Tailwind CSS**.

## Features

- Vite + React setup
- Tailwind CSS configured
- Clean structure with reusable components
- Responsive corporate design
- SEO meta tags added in `index.html`
- Includes sections:
  - Navbar
  - Hero
  - Services (3 cards)
  - About
  - Contact
  - Footer

## Folder Structure

```text
src/
  components/
    About.jsx
    Contact.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    Services.jsx
  pages/
    Home.jsx
  App.jsx
  index.css
  main.jsx
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Notes

- Update `index.html` meta tags (`og:url`, `og:image`, company name) for your real deployment.
- Replace placeholder brand text (`YourCompany`) with your actual organization name.
