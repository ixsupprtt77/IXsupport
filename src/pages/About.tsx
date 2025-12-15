import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Award, Zap, Shield, Target, Heart } from "@/components/SimpleIcons";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "99.9% uptime guarantee with robust infrastructure and 24/7 monitoring"
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Lightning-fast fiber optic network delivering speeds up to 1 Gbps"
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Award-winning support team dedicated to your satisfaction"
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly upgrading technology to provide the best service"
    }
  ];

  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      description: "20+ years of experience in telecommunications industry"
    },
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      description: "Leading our network infrastructure and innovation initiatives"
    },
    {
      name: "Michael Chen",
      role: "Head of Customer Success",
      description: "Ensuring every customer receives exceptional service"
    }
  ];

  const milestones = [
    { year: "2010", event: "Company Founded" },
    { year: "2015", event: "Reached 100,000 Customers" },
    { year: "2018", event: "Launched Fiber Network" },
    { year: "2021", event: "Expanded to 50 Cities" },
    { year: "2023", event: "500,000+ Happy Customers" },
    { year: "2025", event: "Industry Leader in Customer Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              About Cosmo Broad
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Your independent guide to finding the perfect internet and TV services since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Cosmo Broad is an independent comparison platform that simplifies your search for internet and TV services. 
                  We partner with leading providers nationwide to bring you unbiased comparisons, exclusive deals, and personalized 
                  recommendations based on your location and needs. We don't provide the services directly - instead, we connect 
                  you with the best providers in your area.
                </p>
                <p className="text-lg text-gray-700">
                  With over 15 years of experience, we've built a reputation for excellence in service 
                  delivery, customer support, and technological innovation. We're not just a service 
                  provider—we're your partner in staying connected.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">500K+</div>
                    <div className="text-gray-600">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                    <div className="text-gray-600">Cities Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                    <div className="text-gray-600">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                    <div className="text-gray-600">Support</div>
                  </div>
                </div>
              </div>
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
              The principles that guide everything we do
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

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Journey</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Milestones that shaped who we are today
            </p>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                        <div className="text-gray-900 font-semibold">{milestone.event}</div>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Leadership Team</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Meet the people driving our vision forward
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="text-white" size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                  <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join over 500,000 satisfied customers enjoying reliable connectivity
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/pricing">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                View Plans
              </button>
            </a>
            <a href="/contact">
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
