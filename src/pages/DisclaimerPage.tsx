import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertCircle, Shield, CheckCircle, Info } from "@/components/SimpleIcons";
import CallNowButton from "@/components/CallNowButton";

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <AlertCircle size={24} />
              <span className="font-semibold text-lg">Important Information</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Disclaimer
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Please read this important information about our services
            </p>
            <div className="flex justify-center mt-6">
              <CallNowButton />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mt-6">
              <CallNowButton />
            </div>

            {/* Independent Service Notice */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-12 border-2 border-blue-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Info className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Independent Comparison Service</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Cosmo Broad is an independent lead generation and comparison service.</strong> We are not a 
                    direct provider of internet, TV, cable, or phone services. Our platform connects consumers with 
                    service providers based on availability in their area.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We partner with telecommunications providers nationwide to help you compare available options. 
                    When you request information or connect with a provider through our platform, we may receive 
                    compensation from that provider. This does not affect the price you pay.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Operate */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-7 h-7 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">How We Operate</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Lead Generation Platform</h3>
                  <p className="leading-relaxed">
                    Cosmo Broad operates as a lead generation and comparison platform. We help consumers find and 
                    compare internet, TV, and phone service providers in their area. We are compensated by providers 
                    when we connect them with potential customers.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">No Direct Service Provision</h3>
                  <p className="leading-relaxed">
                    We do not install equipment, provide technical support, handle billing, or offer any direct 
                    telecommunications services. All service-related matters are handled by the individual providers 
                    you choose to work with.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Transparent Recommendations</h3>
                  <p className="leading-relaxed">
                    While we may receive compensation from providers, we strive to provide objective comparisons 
                    based on your location, needs, and preferences. Our goal is to help you make informed decisions 
                    about your telecommunications services.
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing & Availability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing & Availability</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Important:</strong> All pricing, speeds, channel counts, and availability information 
                  displayed on this website are estimates and subject to change.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Actual prices vary by location and are determined by individual service providers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Promotional rates may be limited-time offers with specific terms and conditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Service availability depends on your specific address and local infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>We recommend confirming all details directly with your chosen provider before purchasing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service Provider Relationship */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Provider Relationship</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>No Direct Service Agreement:</strong> When you choose a service provider through Cosmo Broad, 
                  you will enter into a direct service agreement with that provider. Cosmo Broad is not a party to 
                  this agreement and has no control over the terms, conditions, or quality of service provided.
                </p>
                <p>
                  <strong>Provider Responsibility:</strong> All installation, service delivery, billing, technical 
                  support, and customer service are the sole responsibility of your chosen service provider. Any 
                  issues or disputes must be resolved directly with the provider.
                </p>
                <p>
                  <strong>Provider Selection:</strong> While we may highlight certain providers or plans, the final 
                  decision is entirely yours. We encourage you to research providers, read reviews, and carefully 
                  review all terms before making a commitment.
                </p>
              </div>
            </div>

            {/* Accuracy of Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Accuracy of Information</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We make every effort to provide accurate and up-to-date information about service providers, 
                  plans, and pricing. However, the telecommunications industry is dynamic, and information may 
                  change without notice.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Cosmo Broad is not responsible for any inaccuracies, errors, or omissions in the information 
                  provided. Always verify all details, including pricing, speeds, contract terms, and availability, 
                  directly with the service provider before making a purchase decision.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>No Warranty:</strong> Cosmo Broad provides comparison and connection services "as is" 
                  without any warranties of any kind, either express or implied.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Service Quality:</strong> We are not responsible for the quality, reliability, or 
                  performance of any services provided by third-party telecommunications companies.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Indirect Damages:</strong> Cosmo Broad shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages arising from your use of our comparison service or 
                  from services provided by third-party providers.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Questions About This Disclaimer?</h2>
              <p className="mb-6 text-blue-100">
                If you have questions about this disclaimer or our services, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+18889296191" className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-colors">
                  <p className="text-sm"><strong>Phone:</strong> (888) 929-6191</p>
                </a>
                <a href="/contact" className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-colors">
                  <p className="text-sm"><strong>Contact Form:</strong> Send us a message</p>
                </a>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-500 italic">
                Last Updated: December 2025
              </p>
              <p className="text-sm text-gray-600 mt-2">
                By using this website, you acknowledge and agree to these terms.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DisclaimerPage;
