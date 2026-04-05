import { HeroSection } from '../components/HeroSection';
import { ClientLogos } from '../components/ClientLogos';
import { AboutSnapshot } from '../components/AboutSnapshot';
import { ProductCategories } from '../components/ProductCategories';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { ApplicationAreas } from '../components/ApplicationAreas';
import { Services } from '../components/Services';
import { TechnicalProcess } from '../components/TechnicalProcess';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CTABanner } from '../components/CTABanner';
import { ContactPreview } from '../components/ContactPreview';
import { CertificationsStrip } from '../components/CertificationsStrip';
import { ParallaxImageDivider } from '../components/ParallaxImageDivider';
import { ProductsAnimate } from './ProductsAnimate';
import { ProductsModel } from './ProductsModel';

export function HomePage() {
  // const factoryImage = "https://images.unsplash.com/photo-1675093022653-59233299f8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMG1hbnVmYWN0dXJpbmclMjBmYWNpbGl0eSUyMHBsYW50fGVufDF8fHx8MTc3NDcyMDgwN3ww&ixlib=rb-4.1.0&q=80&w=1080";

  return (
    <div>
      <HeroSection />
      <ClientLogos />
      {/* <AboutSnapshot /> */}
      <ParallaxImageDivider />
      {/* <ProductCategories /> */}
      {/* <FeaturedProducts /> */}
      {/* demo */}
      <ProductsAnimate />
      <ProductsModel/>
      <ApplicationAreas />
      <Services />
      <TechnicalProcess />
      <WhyChooseUs />
      <CTABanner />
      {/* <ContactPreview />
      <CertificationsStrip /> */}
    </div>
  );
}