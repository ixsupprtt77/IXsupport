import { Award, Shield, Users, Star } from "./SimpleIcons";

const TrustIndicators = () => {
  const awards = [
    {
      icon: Award,
      title: "Best Service 2024",
      organization: "Industry Awards"
    },
    {
      icon: Star,
      title: "4.8/5 Rating",
      organization: "Customer Reviews"
    },
    {
      icon: Shield,
      title: "Top Security",
      organization: "Security Standards"
    },
    {
      icon: Users,
      title: "500K+ Customers",
      organization: "Nationwide"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by Thousands</h2>
          <p className="text-xl text-gray-600">
            Award-winning service backed by industry-leading standards
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-1">{award.title}</h3>
                <p className="text-gray-600 text-sm">{award.organization}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers and experience the difference
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/pricing">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Plans
              </button>
            </a>
            <a href="/contact">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
