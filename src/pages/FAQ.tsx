
import Navbar from "@/components/Navbar";
import FAQPage from "@/components/FAQPage";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <FAQPage />
      
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

export default FAQ;
