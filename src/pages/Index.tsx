
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LocationGrid from "@/components/LocationGrid";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Find PET Scan Centers Near You</h2>
          <p className="text-gray-600">
            Browse and book appointments at top-rated PET scan centers across Mumbai
          </p>
        </div>
        
        <LocationGrid />
      </div>
      
      <footer className="bg-gray-50 mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">Universal Scan</h3>
              <p className="text-gray-600 text-sm">
                Making advanced medical imaging accessible and convenient across Mumbai.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Quick Links</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="/" className="hover:text-medical-blue">Home</a></li>
                <li><a href="/locations" className="hover:text-medical-blue">Scan Centers</a></li>
                <li><a href="/about" className="hover:text-medical-blue">About PET Scans</a></li>
                <li><a href="/faq" className="hover:text-medical-blue">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Contact Us</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Email: info@universalscan.com</li>
                <li>Phone: 1800-123-4567</li>
                <li>Hours: 9 AM - 8 PM, Monday to Saturday</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Our Locations</h3>
              <div className="grid grid-cols-2 gap-1 text-gray-600 text-sm">
                <span>Andheri</span>
                <span>Bandra</span>
                <span>Dadar</span>
                <span>Borivali</span>
                <span>Thane</span>
                <span>Navi Mumbai</span>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-4 text-center text-sm text-gray-600">
            <p>&copy; 2025 Universal Scan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
