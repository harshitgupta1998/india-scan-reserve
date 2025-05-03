
import { Button } from "@/components/ui/button";
import { MapPinIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-medical-dark mb-4">
              Book Your PET Scan <br />
              <span className="text-medical-blue">Appointment Online</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Find and reserve PET scan appointments at top medical centers across Mumbai.
              Quick booking, transparent pricing, and hassle-free experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-medical-blue hover:bg-blue-600 text-lg">
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <MapPinIcon className="mr-2 h-5 w-5" />
                Browse Locations
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1581595219315-a187668e0531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="PET Scanner"
              className="rounded-lg w-full h-72 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
