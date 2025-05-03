import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { LocationCardProps } from "./LocationCard";
import { locationsData } from "@/data/locations";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, ChevronRightIcon, MapPinIcon } from "lucide-react";

const timeSlots = [
  "9:00 AM", 
  "10:00 AM", 
  "11:00 AM", 
  "12:00 PM", 
  "2:00 PM", 
  "3:00 PM", 
  "4:00 PM"
];

const BookingForm = () => {
  const { locationId } = useParams();
  const navigate = useNavigate();
  const [location, setLocation] = useState<LocationCardProps | null>(null);
  const [date, setDate] = useState<Date | undefined>();
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "male",
    referringDoctor: "",
    medicalHistory: "",
  });
  
  useEffect(() => {
    const foundLocation = locationsData.find(loc => loc.id === locationId) || null;
    setLocation(foundLocation);
  }, [locationId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, gender: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot) {
      toast.error("Please select a date and time");
      return;
    }

    toast.success("Appointment details saved!");
    
    const bookingReference = `USC-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    
    navigate("/confirmation", {
      state: {
        formData,
        appointmentDate: date,
        appointmentTime: timeSlot,
        scanLocation: location,
        bookingReference
      }
    });
  };

  if (!location) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Location not found</h2>
        <Button onClick={() => navigate("/")}>Return to Homepage</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">Book Your PET Scan Appointment</h1>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6 flex items-center">
            <MapPinIcon className="h-5 w-5 text-medical-blue mr-2" />
            <div>
              <h3 className="font-semibold">{location.name}</h3>
              <p className="text-sm text-gray-600">{location.address}, {location.city}</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="date">Appointment Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="date"
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal mt-1",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => 
                            date < new Date() || // Can't book in the past
                            date > new Date(new Date().setDate(new Date().getDate() + 30)) // Can book up to 30 days ahead
                          }
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  {date && (
                    <div>
                      <Label>Available Time Slots</Label>
                      <div className="grid grid-cols-3 gap-2 mt-1">
                        {timeSlots.map((slot) => (
                          <Button
                            key={slot}
                            type="button"
                            variant={timeSlot === slot ? "default" : "outline"}
                            className={cn(
                              "h-10",
                              timeSlot === slot ? "bg-medical-blue" : ""
                            )}
                            onClick={() => setTimeSlot(slot)}
                          >
                            {slot}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Medical Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    required
                    value={formData.age}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label>Gender</Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={handleRadioChange}
                    className="flex space-x-4 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male" className="cursor-pointer">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" className="cursor-pointer">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other" className="cursor-pointer">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div>
                  <Label htmlFor="referringDoctor">Referring Doctor</Label>
                  <Input
                    id="referringDoctor"
                    name="referringDoctor"
                    value={formData.referringDoctor}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <Label htmlFor="medicalHistory">Medical History (Optional)</Label>
                  <Textarea
                    id="medicalHistory"
                    name="medicalHistory"
                    rows={3}
                    value={formData.medicalHistory}
                    onChange={handleInputChange}
                    placeholder="Please provide any relevant medical information"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full md:w-auto bg-medical-blue hover:bg-blue-600 text-lg"
              size="lg"
              disabled={!date || !timeSlot}
            >
              Confirm Reservation
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Appointment Summary</CardTitle>
              <CardDescription>Review your appointment details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Location</h3>
                <p className="text-base">{location.name}</p>
                <p className="text-sm text-gray-600">{location.address}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Date & Time</h3>
                <p className="text-base">
                  {date ? format(date, "MMMM d, yyyy") : "Not selected"}
                  {timeSlot ? ` at ${timeSlot}` : ""}
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Patient</h3>
                <p className="text-base">
                  {formData.firstName || formData.lastName
                    ? `${formData.firstName} ${formData.lastName}`
                    : "Not provided"}
                </p>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-medium">Base Price</span>
                  <span>₹{location.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>Processing Fee</span>
                  <span>₹200</span>
                </div>
                <div className="flex justify-between font-semibold text-lg mt-3 border-t pt-3">
                  <span>Total</span>
                  <span className="text-medical-blue">₹{(location.price + 200).toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start text-sm text-gray-600 space-y-2">
              <p>• Pre-scan instructions will be sent to your email</p>
              <p>• Please bring a valid ID and your doctor's referral</p>
              <p>• Cancellation is free up to 24 hours before appointment</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
