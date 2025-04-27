
import { useState } from "react";
import LocationCard, { LocationCardProps } from "./LocationCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data for locations
const locationsData: LocationCardProps[] = [
  {
    id: "delhi-1",
    name: "Delhi PET Imaging Center",
    city: "Delhi",
    address: "123 Connaught Place, New Delhi",
    price: 15000,
    rating: 4.8,
    availability: "High",
    image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mumbai-1",
    name: "Mumbai Advanced Diagnostics",
    city: "Mumbai",
    address: "456 Marine Drive, Mumbai",
    price: 16500,
    rating: 4.7,
    availability: "Medium",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bangalore-1",
    name: "Bangalore Health Imaging",
    city: "Bangalore",
    address: "789 MG Road, Bangalore",
    price: 14500,
    rating: 4.9,
    availability: "High",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "chennai-1",
    name: "Chennai Medical Center",
    city: "Chennai",
    address: "321 Anna Salai, Chennai",
    price: 13800,
    rating: 4.6,
    availability: "Medium",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hyderabad-1",
    name: "Hyderabad Scan Center",
    city: "Hyderabad",
    address: "567 Banjara Hills, Hyderabad",
    price: 14200,
    rating: 4.7,
    availability: "High",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kolkata-1",
    name: "Kolkata Diagnostic Hub",
    city: "Kolkata",
    address: "890 Park Street, Kolkata",
    price: 12900,
    rating: 4.5,
    availability: "Medium",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pune-1",
    name: "Pune Health Scan",
    city: "Pune",
    address: "432 Koregaon Park, Pune",
    price: 13500,
    rating: 4.8,
    availability: "High",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ahmedabad-1",
    name: "Ahmedabad Medical Imaging",
    city: "Ahmedabad",
    address: "765 CG Road, Ahmedabad",
    price: 12500,
    rating: 4.6,
    availability: "Medium",
    image: "https://images.unsplash.com/photo-1477511801984-4ad318ed9846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
];

const LocationGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [priceSort, setPriceSort] = useState("");

  const cities = Array.from(new Set(locationsData.map(location => location.city)));

  let filteredLocations = locationsData.filter(location => 
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    location.city.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (selectedCity) {
    filteredLocations = filteredLocations.filter(location => 
      location.city === selectedCity
    );
  }

  if (priceSort === "lowToHigh") {
    filteredLocations.sort((a, b) => a.price - b.price);
  } else if (priceSort === "highToLow") {
    filteredLocations.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            placeholder="Search by center name or city"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="city">Filter by City</Label>
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger id="city" className="mt-1">
              <SelectValue placeholder="All cities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-cities">All cities</SelectItem>
              {cities.map(city => (
                <SelectItem key={city} value={city}>{city}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="price">Sort by Price</Label>
          <Select value={priceSort} onValueChange={setPriceSort}>
            <SelectTrigger id="price" className="mt-1">
              <SelectValue placeholder="Default" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="lowToHigh">Low to High</SelectItem>
              <SelectItem value="highToLow">High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredLocations.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-600">No results found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((location) => (
            <LocationCard 
              key={location.id}
              {...location}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationGrid;
