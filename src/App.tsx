import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Warranty from "./pages/Warranty";
import Contact from "./pages/Contact";
import CookiePolicy from "./pages/CookiePolicy";
import RefundPolicy from "./pages/RefundPolicy";
import FAQ from "./pages/FAQ";
import DisclaimerPage from "./pages/DisclaimerPage";
import NotFound from "./pages/NotFound";
import ScrollToTopButton from "./components/ScrollToTopButton";
import useScrollToTop from "./hooks/useScrollToTop";
import CallNowButton from "./components/CallNowButton";

const AppContent = () => {
  useScrollToTop();

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTopButton />
      <CallNowButton sticky />
    </>
  );
};

const App = () => (
  <BrowserRouter basename="/">
    <AppContent />
  </BrowserRouter>
);

export default App;
