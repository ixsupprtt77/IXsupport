import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CookieBanner from "@/components/CookieBanner";
import NetworkCoverage from "@/components/NetworkCoverage";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import CustomerExperience from "@/components/CustomerExperience";
import TrustIndicators from "@/components/TrustIndicators";
import Disclaimer from "@/components/Disclaimer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <StatsSection />
      <NetworkCoverage />
      <ServicesSection />
      <TechnologyShowcase />
      <HowItWorks />
      <CustomerExperience />
      <TestimonialCarousel />
      <TrustIndicators />
      <Disclaimer />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
