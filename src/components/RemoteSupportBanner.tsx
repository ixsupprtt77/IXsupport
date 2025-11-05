import React from "react";
import SimpleButton from "./SimpleButton";
import { Video, Shield, Zap } from "./SimpleIcons";

const RemoteSupportBanner = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 remote-support-animate">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Right Now? Connect Remotely
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Get instant support for software issues, cloud setup, or internet problems. 
              Our certified technicians can access your screen securely and solve issues in real-time.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                  <Video size={24} />
                </div>
                <div>
                  <p className="font-semibold">Live Screen Share</p>
                  <p className="text-sm opacity-80">See & guide</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                  <Shield size={24} />
                </div>
                <div>
                  <p className="font-semibold">Secure Connection</p>
                  <p className="text-sm opacity-80">End-to-end encrypted</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                  <Zap size={24} />
                </div>
                <div>
                  <p className="font-semibold">Quick Resolution</p>
                  <p className="text-sm opacity-80">Average 15 min</p>
                </div>
              </div>
            </div>

            <a href="tel:+18883159311">
              <SimpleButton size="lg" variant="secondary" className="shadow-lg">
                📞 Call (888) 315-9311 Now
              </SimpleButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteSupportBanner;
