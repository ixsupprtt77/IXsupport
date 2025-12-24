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
import CallNowButton from "@/components/CallNowButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="flex justify-center mt-6"><CallNowButton /></div>
      <StatsSection />
      <div className="flex justify-center mt-6"><CallNowButton /></div>
      <NetworkCoverage />
      <div className="flex justify-center mt-6"><CallNowButton /></div>
      <ServicesSection />
      <div className="flex justify-center mt-6"><CallNowButton /></div>
      <TechnologyShowcase />
      <div className="flex justify-center mt-6"><CallNowButton /></div>
      <HowItWorks />
      <div className="flex justify-center mt-6"><CallNowButton /></div>
      <CustomerExperience />
      <div className="flex justify-center mt-6"><CallNowButton /></div>
      <TestimonialCarousel />
      <div className="flex justify-center mt-6"><CallNowButton /></div>
      <TrustIndicators />
      <div className="flex justify-center mt-6"><CallNowButton /></div>
      <Disclaimer />
      <div className="flex justify-center mt-6"><CallNowButton /></div>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
