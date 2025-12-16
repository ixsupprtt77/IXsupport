import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HelpCircle, Phone, Mail, ChevronDown } from "@/components/SimpleIcons";
import { useState } from "react";

const FAQItem = ({ question, answer, id }: { question: string; answer: string; id: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown 
          size={20} 
          className={`transition-transform duration-200 flex-shrink-0 text-blue-600 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Are you an official cable or internet service provider?",
      answer: "No. Cosmo Broad is an independent third-party assistance platform, launched in 2025. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider."
    },
    {
      question: "Do you sell internet, cable, or streaming plans?",
      answer: "No. We do not sell internet, cable, or streaming plans directly. We provide guidance and assistance services only. Our role is to help facilitate your search for appropriate telecommunications services."
    },
    {
      question: "Do you charge for your services?",
      answer: "Yes. Our service fees are separate from provider charges. We charge an assistance fee for the guidance and support services we provide. Provider billing is handled independently by your chosen telecommunications company."
    },
    {
      question: "Will I still be billed by my service provider?",
      answer: "Yes. Provider billing remains unchanged. Any subscription fees or service charges from your cable, internet, or streaming provider are separate from our assistance fees and paid directly to the provider."
    },
    {
      question: "Do you need my account passwords or sensitive information?",
      answer: "No. We never request provider account passwords or sensitive personal credentials. Any assistance is provided through secure, compliant methods that protect your privacy."
    },
    {
      question: "Which providers do you support?",
      answer: "We may reference multiple providers for guidance purposes only. All trademarks™, brand names®, and service marks belong to their respective owners. We have no affiliation with any provider."
    },
    {
      question: "Are your services refundable?",
      answer: "Yes. Refund requests may be submitted within 7 to 15 days, subject to the terms outlined in our Refund Policy. Eligibility depends on service type and whether assistance has already been delivered."
    },
    {
      question: "What happens after I use your assistance service?",
      answer: "After receiving our guidance, you'll work directly with your chosen provider for all service installation, billing, and technical support matters. We facilitate the initial connection only."
    },
    {
      question: "How can I contact Cosmo Broad?",
      answer: "You can reach us via phone at (888) 929-6191 or through our Contact Us page. When you call, our greeting will identify us as an independent service assistance platform."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <HelpCircle size={24} />
              <span className="font-semibold text-lg">Frequently Asked Questions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Find answers to common questions about our comparison service
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* All FAQs */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Common Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} id={`faq-${index}`} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl mb-10 text-blue-100">
              Our team is here to help you find the perfect internet and TV solution
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a href="tel:+18889296191" className="bg-white/20 backdrop-blur-sm px-6 py-6 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105 block">
                <Phone className="w-12 h-12 mx-auto mb-3" />
                <p className="font-semibold text-lg">Call Us</p>
                <p className="text-blue-100 mt-2">(888) 929-6191</p>
              </a>
              <a href="/contact" className="bg-white/20 backdrop-blur-sm px-6 py-6 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105 block">
                <Mail className="w-12 h-12 mx-auto mb-3" />
                <p className="font-semibold text-lg">Contact Form</p>
                <p className="text-blue-100 mt-2">Get a response within 24 hours</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
