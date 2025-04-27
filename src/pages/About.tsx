
import Navbar from "@/components/Navbar";
import AboutPage from "@/components/AboutPage";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AboutPage />
      
      <footer className="bg-gray-50 mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-gray-600">
            <p>&copy; 2025 IndiaScanReserve. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
