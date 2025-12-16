import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Award, Zap, Shield, Target, Heart } from "@/components/SimpleIcons";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "Clear, honest information about our services and separate assistance fees"
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Streamlined guidance to help you navigate telecommunications options quickly"
    },
    {
      icon: Heart,
      title: "Customer Support",
      description: "Dedicated assistance team ready to help guide you through the process"
    },
    {
      icon: Target,
      title: "Independence",
      description: "Unbiased assistance without affiliation to any provider or service company"
    }
  ];

  const mission = [
    {
      title: "Who We Are",
      description: "Cosmo Broad is an independent third-party service assistance platform, founded in 2025. We exist to help customers understand and navigate the often confusing world of telecommunications services."
    },
    {
      title: "What We Do",
      description: "We provide guidance, assistance, and support for finding internet, TV, and phone services. We don't sell plans directly—instead, we assist you in understanding your options and facilitate connections with providers."
    },
    {
      title: "Why Choose Us",
      description: "As a newly launched startup, we're building our reputation on transparency and honesty. We clearly disclose our service fees, our independent status, and our role as facilitators—not providers."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <span className="font-semibold">Launched in 2025</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              About Cosmo Broad
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              An independent service assistance startup helping you navigate telecommunications choices
            </p>
          </div>
        </div>
      </section>

      {/* Important Disclosure */}
      <section className="py-12 bg-yellow-50 border-y-2 border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-yellow-200 text-yellow-900 px-4 py-2 rounded-full mb-4 font-semibold">
              ⚠️ Important Information
            </div>
            <p className="text-lg text-yellow-900 leading-relaxed">
              <strong>Cosmo Broad is an independent third-party service assistance startup, launched in 2025.</strong> We are NOT affiliated with, 
              endorsed by, or sponsored by any cable, internet, or streaming service provider. We do not sell telecommunications services directly. 
              We charge separate service fees for the assistance and guidance we provide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Foundation</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {mission.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              The principles guiding our assistance services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">How We Assist You</h2>
            <div className="space-y-8">
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
                <h3 className="text-2xl font-bold mb-4 text-blue-900">1. Understanding Your Needs</h3>
                <p className="text-gray-700 leading-relaxed">
                  We help you identify what type of internet, TV, or phone service best fits your household or business requirements. 
                  Our guidance takes into account your location, usage patterns, and budget preferences.
                </p>
              </div>
              
              <div className="bg-purple-50 p-8 rounded-2xl border border-purple-200">
                <h3 className="text-2xl font-bold mb-4 text-purple-900">2. Explaining Your Options</h3>
                <p className="text-gray-700 leading-relaxed">
                  We facilitate your understanding of what services are available in your area. We explain different plan types, 
                  speeds, features, and pricing structures in clear, easy-to-understand language.
                </p>
              </div>
              
              <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
                <h3 className="text-2xl font-bold mb-4 text-green-900">3. Supporting Your Decision</h3>
                <p className="text-gray-700 leading-relaxed">
                  Once you've decided on a direction, we can help facilitate next steps. Remember, all final service agreements, 
                  installations, and billing are handled directly between you and your chosen provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We're NOT Section */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-red-900">What We're NOT</h2>
            <p className="text-center text-gray-700 mb-8 text-lg">
              It's important to understand our limitations
            </p>
            <div className="bg-white p-8 rounded-2xl border-2 border-red-300">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <p className="text-gray-700"><strong>We are NOT an internet, cable, or TV provider</strong> — We don't install equipment or deliver services</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <p className="text-gray-700"><strong>We are NOT affiliated with any provider</strong> — We maintain independence and don't represent any company</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <p className="text-gray-700"><strong>We do NOT handle provider billing</strong> — All service charges go directly to your chosen provider</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <p className="text-gray-700"><strong>We do NOT guarantee provider approval</strong> — Provider decisions are outside our control</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Assistance?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our team is ready to help guide you through finding the right telecommunications services for your needs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+18889296191">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                📞 Call (888) 929-6191
              </button>
            </a>
            <a href="/contact">
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
                Get Assistance
              </button>
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            When you call, our greeting identifies us as an independent service assistance platform
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
