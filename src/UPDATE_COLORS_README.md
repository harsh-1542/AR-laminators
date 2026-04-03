# Color Update Guide for AR Laminators Website

## New Color Scheme

The website has been updated with the client-approved color scheme:

### Primary Colors
- **Maroon**: `#7C1823` (Primary brand color for buttons, CTAs, active states, highlights)
- **Cream**: `#F5F0E8` (Main background color throughout the site)
- **Light Gray**: `#C8CBCE` (Borders, dividers, secondary UI elements)

### Text Colors
- **Black**: `#000000` (All headings, subheadings, and primary text)
- **Gray**: `#6B6B6B` (Secondary text, descriptions)
- **White**: `#ffffff` (Text on dark backgrounds, cards)

## Components Updated

### Core Components
- ✅ Header - Updated with maroon top bar, hover effects, animations
- ✅ Footer - Updated with proper color scheme
- ✅ HeroSection - Maroon buttons, cream gradient background
- ✅ CTABanner - Maroon background with white button
- ✅ ProductCategories - Cream background, maroon accents, hover effects
- ✅ WhyChooseUs - Updated icons and colors
- ✅ FeaturedProjects - Maroon navigation dots and arrows
- ✅ AboutSnapshot - Maroon accents, image hover zoom
- ✅ IndustriesServed - Cream background cards with maroon icons
- ✅ CertificationsStrip - Maroon award icons

### Animations Added
- Smooth hover transitions (300ms duration)
- Scale effects on buttons and cards
- Image zoom on hover (scale-110)
- Translate animations on hover
- Border color transitions
- Shadow effects on elevation

### Responsive Design
- All components are fully responsive
- Mobile-first approach
- Breakpoints: 320px, 375px, 768px, 1024px, 1280px, 1440px+

## Pages Requiring Update

The following page files still need color scheme updates:
- AboutPage.tsx
- ProductsPage.tsx
- ProductDetailPage.tsx
- ProjectsPage.tsx
- ProjectDetailPage.tsx
- IndustriesPage.tsx
- IndustryDetailPage.tsx
- QualityPage.tsx
- MediaPage.tsx
- CareersPage.tsx
- ContactPage.tsx

## Color Replacement Rules

Replace all instances of:
- `text-orange-500` → `style={{ color: '#7C1823' }}`
- `bg-orange-500` → `style={{ backgroundColor: '#7C1823' }}`
- `border-orange-500` → `style={{ borderColor: '#7C1823' }}`
- `hover:text-orange-500` → Remove and use onMouseEnter/Leave or Tailwind with inline styles
- `hover:bg-orange-600` → Update hover states to use darker maroon
- `text-gray-900` → `text-black`
- `text-gray-600` → `style={{ color: '#6B6B6B' }}`
- `bg-gray-50` → `style={{ backgroundColor: '#F5F0E8' }}`
- `border-gray-200` → `style={{ border: '1px solid #C8CBCE' }}`

## Professional Animations

All interactive elements now include:
- `transition-all duration-300` for smooth animations
- `hover:scale-105` for buttons
- `hover:-translate-y-2` for cards
- `hover:shadow-xl` for elevation effects
- `group` utilities for coordinated hover states
