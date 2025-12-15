const TechnologyShowcase = () => {
  const techImages = [
    {
      url: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop",
      title: "High-Speed Internet",
      description: "Lightning-fast fiber connections"
    },
    {
      url: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=400&h=300&fit=crop",
      title: "Home Entertainment",
      description: "Premium TV and streaming services"
    },
    {
      url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400&h=300&fit=crop",
      title: "Smart Connectivity",
      description: "Connected home solutions"
    },
    {
      url: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop",
      title: "Seamless Streaming",
      description: "Unlimited entertainment options"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powered by Advanced Technology</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our infrastructure combines the latest technology with expert engineering 
            to deliver unmatched performance and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techImages.map((tech, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={tech.url}
                  alt={tech.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg mb-1">{tech.title}</h3>
                  <p className="text-white/90 text-sm">{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;
