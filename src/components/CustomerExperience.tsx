import { Heart, Star, Users } from "./SimpleIcons";

const CustomerExperience = () => {
  const experiences = [
    {
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop",
      title: "Work From Home",
      description: "Reliable connectivity for remote work and video conferencing",
      stat: "500K+",
      statLabel: "Happy Customers"
    },
    {
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop",
      title: "Family Entertainment",
      description: "Stream, game, and browse simultaneously without lag",
      stat: "99.9%",
      statLabel: "Uptime"
    },
    {
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
      title: "Smart Home Ready",
      description: "Support for all your connected devices and smart home tech",
      stat: "24/7",
      statLabel: "Support"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
            <Heart className="w-5 h-5" />
            <span className="font-semibold">Customer Experience</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Built For Your Lifestyle</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're working, streaming, or staying connected with loved ones, 
            we've got the perfect solution for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{exp.title}</h3>
                <p className="text-gray-600 mb-6">{exp.description}</p>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-blue-600">{exp.stat}</div>
                      <div className="text-sm text-gray-500">{exp.statLabel}</div>
                    </div>
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerExperience;
