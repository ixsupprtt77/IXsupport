import { useState } from "react";
import SimpleButton from "./SimpleButton";
import { Package } from "./SimpleIcons";

const TrackRepairForm = () => {
  const [jobId, setJobId] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Tracking:", { jobId, email });
  };

  return (
    <section id="track-repair" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Package className="text-white" size={32} />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-center mb-2">
              Track My Repair
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Enter your Job ID and email to check your repair status
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Job ID
                </label>
                <input
                  type="text"
                  value={jobId}
                  onChange={(e) => setJobId(e.target.value)}
                  placeholder="e.g., IX-2024-12345"
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              <SimpleButton
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
                size="lg"
              >
                Track Status
              </SimpleButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRepairForm;
