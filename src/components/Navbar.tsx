
import { Link } from 'react-router-dom';
import { HomeIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="bg-medical-blue text-white p-2 rounded-md">
            <HomeIcon size={20} />
          </span>
          <span className="text-xl font-bold text-medical-dark">Universal Scan</span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-medical-dark hover:text-medical-blue transition-colors">
            Home
          </Link>
          <Link to="/locations" className="text-medical-dark hover:text-medical-blue transition-colors">
            Locations
          </Link>
          <Link to="/about" className="text-medical-dark hover:text-medical-blue transition-colors">
            About PET Scans
          </Link>
          <Link to="/faq" className="text-medical-dark hover:text-medical-blue transition-colors">
            FAQs
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
