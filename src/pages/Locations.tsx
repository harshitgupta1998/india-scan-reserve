
import Navbar from "@/components/Navbar";
import LocationGrid from "@/components/LocationGrid";

const Locations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-blue-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">PET Scan Centers Across India</h1>
          <p className="text-gray-600">
            Find and book appointments at top-rated medical centers in your city
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <LocationGrid />
      </div>
      
      <div className="container mx-auto px-4 py-8 mt-4">
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">What to Look for in a PET Scan Center</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-2">Advanced Technology</h3>
              <p className="text-gray-600 text-sm">
                Look for centers with the latest PET-CT technology for the highest quality images and most accurate results.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Expert Radiologists</h3>
              <p className="text-gray-600 text-sm">
                Centers with board-certified radiologists specialized in nuclear medicine provide the most reliable interpretations.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Comfortable Facilities</h3>
              <p className="text-gray-600 text-sm">
                Choose centers that prioritize patient comfort with private waiting areas and a supportive environment.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-gray-50 mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">IndiaScanReserve</h3>
              <p className="text-gray-600 text-sm">
                Making advanced medical imaging accessible and convenient across India.
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
                <li>Email: info@indiascanreserve.com</li>
                <li>Phone: 1800-123-4567</li>
                <li>Hours: 9 AM - 8 PM, Monday to Saturday</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Cities We Serve</h3>
              <div className="grid grid-cols-2 gap-1 text-gray-600 text-sm">
                <span>Delhi</span>
                <span>Mumbai</span>
                <span>Bangalore</span>
                <span>Chennai</span>
                <span>Hyderabad</span>
                <span>Kolkata</span>
                <span>Pune</span>
                <span>Ahmedabad</span>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-4 text-center text-sm text-gray-600">
            <p>&copy; 2025 IndiaScanReserve. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Locations;
