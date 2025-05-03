
// This file is kept for backward compatibility
// The app will now fetch locations data from Supabase

import { LocationCardProps } from "@/components/LocationCard";

// Fallback data in case of connection issues
export const locationsData: LocationCardProps[] = [
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
  }
];

export default locationsData;
