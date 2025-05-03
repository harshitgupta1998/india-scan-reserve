
import { supabase } from "@/integrations/supabase/client";
import { LocationCardProps } from "@/components/LocationCard";
import { useQuery } from "@tanstack/react-query";

const fetchLocations = async (): Promise<LocationCardProps[]> => {
  const { data, error } = await supabase
    .from('scan_locations')
    .select('*');
  
  if (error) {
    throw new Error(error.message);
  }
  
  return data.map(location => ({
    id: location.id,
    name: location.name,
    city: location.city,
    address: location.address,
    price: location.price,
    rating: 4.7, // Default rating since we don't have it in DB
    availability: "High", // Default availability since we don't have it in DB
    image: location.image_url
  }));
};

export const useLocations = () => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: fetchLocations,
  });
};
