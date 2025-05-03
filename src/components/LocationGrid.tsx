
import { useState } from "react";
import LocationCard from "./LocationCard";
import { useLocations } from "@/hooks/useLocations";
import { locationsData } from "@/data/locations"; // Fallback data

const LocationGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: locations, isLoading, isError } = useLocations();
  
  // Use locations from Supabase if available, otherwise use fallback data
  const displayLocations = locations || locationsData;
  
  const filteredLocations = displayLocations.filter((location) => {
    return (
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      location.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  
  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by center name or city..."
          className="w-full p-3 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {isLoading && (
        <div className="text-center py-8">
          <p className="text-lg">Loading locations...</p>
        </div>
      )}
      
      {isError && (
        <div className="text-center py-8">
          <p className="text-lg text-red-500">Error loading locations. Showing fallback data.</p>
        </div>
      )}
      
      {filteredLocations.length === 0 && !isLoading && (
        <div className="text-center py-8">
          <p className="text-lg">No locations found matching "{searchTerm}"</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredLocations.map((location) => (
          <LocationCard key={location.id} {...location} />
        ))}
      </div>
    </div>
  );
};

export default LocationGrid;
