import { Target, Zap, Shield } from "./SimpleIcons";

const NetworkCoverage = () => {
  const features = [
    {
      icon: Target,
      title: "Nationwide Provider Network",
      description: "Compare providers in all 50 states and major metro areas"
    },
    {
      icon: Zap,
      title: "Find Ultra-Fast Options",
      description: "Discover providers offering fiber up to 1 Gbps in your area"
    },
    {
      icon: Shield,
      title: "Unbiased Comparisons",
      description: "Independent reviews and transparent pricing information"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nationwide Provider Coverage</h2>
          <p className="text-xl text-gray-600">
            We help you find providers offering lightning-fast speeds and reliable service across all 50 states
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop"
              alt="Fiber Optic Network Infrastructure"
              className="rounded-lg shadow-2xl"
            />
          </div>

          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkCoverage;
