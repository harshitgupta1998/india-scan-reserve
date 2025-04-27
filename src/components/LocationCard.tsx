
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPinIcon, CalendarIcon } from "lucide-react";
import { Link } from "react-router-dom";

export interface LocationCardProps {
  id: string;
  name: string;
  city: string;
  address: string;
  price: number;
  rating: number;
  availability: string;
  image: string;
}

const LocationCard = ({ id, name, city, address, price, rating, availability, image }: LocationCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <Badge className="bg-medical-blue text-white">
            {rating.toFixed(1)} ★
          </Badge>
        </div>
        {availability === "High" && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-medical-green text-white">
              High Availability
            </Badge>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{name}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <MapPinIcon size={14} className="mr-1 text-gray-500" />
              {city}
            </CardDescription>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-medical-dark">₹{price.toLocaleString()}</span>
            <p className="text-xs text-gray-500">Base price</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-gray-500 mb-2">{address}</p>
        <div className="flex items-center text-sm text-medical-green">
          <CalendarIcon size={14} className="mr-1" />
          <span>Next available: Tomorrow</span>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Link to={`/book/${id}`} className="w-full">
          <Button className="w-full bg-medical-blue hover:bg-blue-600">
            Book Appointment
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default LocationCard;
