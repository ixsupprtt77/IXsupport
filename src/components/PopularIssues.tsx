import { useState } from "react";
import SimpleButton from "./SimpleButton";

const PopularIssues = () => {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);

  const issues = [
    "Cracked Screen",
    "Battery Drain",
    "Won't Turn On",
    "Water Damage",
    "Slow Performance",
    "Virus Removal",
    "Data Recovery",
    "WiFi Issues",
    "Sound Problems",
    "Charging Port",
    "Camera Issues",
    "Storage Full",
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 popular-issues-animate">
          <h2 className="text-4xl font-bold mb-4">Common Issues We Fix</h2>
          <p className="text-xl text-muted-foreground">
            Select your problem to get started
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {issues.map((issue, index) => (
            <button
              key={issue}
              onClick={() => setSelectedIssue(issue)}
              className={`px-6 py-3 rounded-full font-medium transition-all relative overflow-hidden hover:scale-105 active:scale-95 popular-issue-button ${
                selectedIssue === issue
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                  : "bg-card border-2 border-border hover:border-primary text-foreground"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {selectedIssue === issue && (
                <div className="absolute inset-0 bg-white/20 animate-ping opacity-75" />
              )}
              <span className="relative z-10">{issue}</span>
            </button>
          ))}
        </div>

        {selectedIssue && (
          <div className="text-center mt-8 popular-issue-selected">
            <p className="text-lg text-muted-foreground mb-4">
              Selected: <span className="font-semibold text-primary">{selectedIssue}</span>
            </p>
            <SimpleButton className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold shadow-lg hover:scale-105 active:scale-95">
              Get Quote for {selectedIssue}
            </SimpleButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularIssues;
