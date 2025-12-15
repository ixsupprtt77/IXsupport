import { AlertCircle } from "./SimpleIcons";

const Disclaimer = () => {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Important Disclosure</h3>
                <p>
                  <strong>Cosmo Broad is an independent lead generation and comparison service.</strong> We are not a 
                  direct provider of internet, TV, cable, or phone services. Our platform connects consumers with 
                  service providers based on availability in their area.
                </p>
                <p>
                  <strong>How We Operate:</strong> We partner with telecommunications providers nationwide to help you 
                  compare available options. When you request information or connect with a provider through our platform, 
                  we may receive compensation from that provider.
                </p>
                <p>
                  <strong>Pricing & Availability:</strong> All pricing, speeds, channel counts, and availability information 
                  displayed on this website are estimates and subject to change. Actual prices, plans, and availability vary 
                  by location and are determined by the individual service providers. We recommend confirming all details 
                  directly with your chosen provider before making a purchase decision.
                </p>
                <p>
                  <strong>No Direct Service:</strong> Cosmo Broad does not install equipment, provide technical support 
                  for services, or handle billing for internet, TV, or phone services. All service-related inquiries 
                  should be directed to your chosen provider.
                </p>
                <p className="text-xs text-gray-500 italic pt-2 border-t border-gray-200 mt-3">
                  Last Updated: December 2025 | By using this website, you acknowledge and agree to these terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
