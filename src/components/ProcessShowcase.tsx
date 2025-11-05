import React from "react";
import repairProcess from "@/assets/repair-process.jpg";
import { CheckCircle2 } from "./SimpleIcons";
import SimpleButton from "./SimpleButton";

const features = [
  "Professional diagnosis and transparent quotes",
  "High-quality OEM and aftermarket parts",
  "Comprehensive testing before return",
  "90-day warranty on all repairs"
];

const ProcessShowcase = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative process-showcase-animate">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-300">
              <img 
                src={repairProcess} 
                alt="Professional Repair Process" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-card/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-border process-showcase-badge">
                <div className="text-2xl font-bold text-primary">15K+</div>
                <div className="text-xs text-muted-foreground">Devices Fixed</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse" />
          </div>

          {/* Content Side */}
          <div className="process-showcase-animate-right">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              Our Process
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Expert Repair Process
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> You Can Trust</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Every repair follows our rigorous quality standards. From initial diagnosis to final testing, 
              we ensure your device returns to peak performance.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group process-showcase-feature"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 mt-1 hover:scale-125 hover:rotate-[360deg] transition-transform duration-500">
                    <CheckCircle2 className="text-primary" size={24} />
                  </div>
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 process-showcase-button">
              <a href="tel:+18883159311">
                <SimpleButton
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  📞 Call (888) 315-9311
                </SimpleButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessShowcase;
