# Frontend UI Documentation - AR Laminators

## 1. UI Overview
- **Application Type**: Corporate and product portfolio website for an engineering protection solutions provider (AR Laminators).
- **Core Technologies**: React 18, Vite, TypeScript.
- **Styling & UI**: Tailwind CSS v4, Radix UI Primitives (Shadcn-style component patterns).
- **Animations & 3D**: GSAP (`@gsap/react`), Framer Motion, and Three.js (`@react-three/fiber`, `@react-three/drei`) for 3D modeling.
- **Design Approach**: Component-based architecture prioritizing reusable UI primitives, dynamic micro-animations, and full mobile-desktop responsiveness. 

## 2. Pages / Screens
The routing structure utilizes `react-router-dom` to serve the following main screens:

- **HomePage (`/`)**: Landing screen containing the hero section, client logos, 3D product visualizations, application areas, technical processes, and lead generation banners.
- **AboutPage (`/about`)**: Chronicles company history, mission, vision, and organizational timeline.
- **ProductsPage (`/products`)**: The root directory displaying overarching product families.
- **ProductListPage (`/products/:category`)**: Dynamic route showcasing products belonging to a specific category (e.g., Waterproofing Membranes).
- **ProductDetailPage (`/product/:id`)**: Deep-dive individual item views detailing specs, use-cases, and features.
- **ProjectsPage (`/projects`)**: A portfolio of completed infrastructure and manufacturing projects.
- **ProjectDetailPage (`/project/:id`)**: An isolated case study focused on the challenges and solutions of a specific project.
- **QualityPage (`/certification`)**: Details quality standards and ISO certifications.
- **MediaPage (`/media`)**: Gallery providing downloadable media, brochures, or visual content.
- **CareersPage (`/careers`)**: Portal for sharing workplace culture and recruiting talent.
- **ContactPage (`/contact`)**: Contact details, map integrations, and user inquiry forms.

## 3. Components
Components are categorized into layout, page sections, and atomic UI elements:

- **Layout Components**: 
  - `Header.tsx`: Top navigation complete with a sticky state and a complex desktop Mega Menu.
  - `Footer.tsx`: Universal bottom navigation containing sitemaps and corporate contact information.
- **Page Sections (e.g., from Home)**: 
  - `HeroSection.tsx`, `ClientLogos.tsx`, `ApplicationAreas.tsx`, `Services.tsx`, `TechnicalProcess.tsx`, `WhyChooseUs.tsx`, `CTABanner.tsx`, `ParallaxImageDivider.tsx`.
- **Specialized / Graphical Components**: 
  - `ProductsAnimate.tsx` (complex transition animations) and `ProductsModel.tsx` (Three.js WebGL canvas).
- **Reusable Core UI (`/src/components/ui/`)**: Built on top of Radix UI to ensure accessibility. Elements include `accordion.tsx`, `button.tsx`, `dialog.tsx`, `carousel.tsx`, `form.tsx`, `tabs.tsx`, and `dropdown-menu.tsx`.

## 4. UI Features
- **Navigation**: Dual-mode navigation strategy. Heavy desktop Mega Menu via Hover Cards / Dropdowns, paired with a collapsible full-screen "Hamburger" menu for mobile devices.
- **Animations**: Extensive usage of GSAP for heavy scroll-tied parallax transitions. Additionally integrates `@react-three/fiber` for rendering interactive 3D WebGL experiences within standard UI flows.
- **Forms & State**: Standardized forms via `react-hook-form` paired with the standard shadcn `form.tsx` wrappers. Real-time feedback and toast notifications are handled by `sonner`.
- **Interactivity**: Accessible modals, collapsible sections, context menus, and tooltips powered seamlessly by Radix UI logic and styled specifically to the brand.

## 5. Styling & Design System
- **Styling Approach**: Managed entirely by Tailwind CSS v4 without standalone style modules, leveraging a centralized `globals.css` configuration (using `@theme inline`) to drive utility classes. 
- **Color Theme**: Deeply customized brand palette injected via CSS variables:
  - **Primary**: Maroon (`#7C1823`) - Used for primary calls-to-action and sidebar highlights.
  - **Background**: Cream (`#F5F0E8`) - Creates a warm, industrial tone instead of basic white.
  - **Accents**: Light Gray (`#C8CBCE`) and sharp Black (`#000000`).
- **Typography**: Heavily relies on the **Montserrat** globally sans-serif font family.
- **Responsiveness**: Completely responsive layout utilizing Tailwind's mobile-first breakpoints. Complex interfaces (like top-bar contact strips) cleanly disappear into mobile-friendly slide-out navigations.

## 6. Assets
- **Iconography**: Entire application relies on the `lucide-react` library for crisp, scalable SVG icons (`MapPin`, `Phone`, `Mail`, `ChevronDown`, `Menu`).
- **Media**: Depends predominantly on cloud-hosted or absolute URL imagery (such as external Unsplash references).
- **3D Assets**: Injects geometries and materials dynamically across the Three.js ecosystem within WebGL tags.

## 7. Folder Structure (Frontend Only)
The structure strictly segregates functional routes from presentational elements:
- `/src/pages`: Top-level functional routing components mapping directly to user URLs.
- `/src/components`: Feature-level or section-level aggregates (like a Hero section or a Footer).
- `/src/components/ui`: The "Design System" layer containing dumb, purely presentational generic components (buttons, sliders, inputs).
- `/src/styles`: Contains the overarching `globals.css` that provides the baseline Tailwind layers, font-families, CSS reset rules, and theming tokens.
- `/src/figma` & `/src/guidelines`: Sandbox zones for planning and asset translation into code.
