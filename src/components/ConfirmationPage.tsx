
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { CalendarIcon, CheckCircleIcon, MapPinIcon, PrinterIcon } from "lucide-react";
import { LocationCardProps } from "./LocationCard";

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const {
    formData,
    appointmentDate,
    appointmentTime,
    scanLocation,
    paymentAmount,
    bookingReference
  } = location.state || {};
  
  // If there's no booking reference, redirect back to the home page
  if (!bookingReference) {
    navigate("/");
    return null;
  }
  
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircleIcon className="h-8 w-8 text-medical-green" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
        <p className="text-gray-600">
          Your PET scan appointment has been successfully scheduled.
          A confirmation email has been sent to {formData.email}.
        </p>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="bg-medical-blue/10">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Appointment Details</CardTitle>
              <CardDescription>Booking Reference: {bookingReference}</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => window.print()}>
              <PrinterIcon className="h-4 w-4 mr-2" />
              Print
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Patient Information</h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                <p className="text-sm text-gray-600 mt-1">{formData.email}</p>
                <p className="text-sm text-gray-600">{formData.phone}</p>
                <div className="mt-2 text-sm">
                  <span className="text-gray-500">Age: </span>
                  <span>{formData.age}</span>
                  <span className="mx-2">•</span>
                  <span className="text-gray-500">Gender: </span>
                  <span className="capitalize">{formData.gender}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Appointment Details</h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex items-start">
                  <CalendarIcon className="h-5 w-5 text-medical-blue mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">
                      {format(new Date(appointmentDate), "MMMM d, yyyy")}
                    </p>
                    <p className="text-sm text-gray-600">{appointmentTime}</p>
                  </div>
                </div>
                
                <div className="flex items-start mt-3">
                  <MapPinIcon className="h-5 w-5 text-medical-blue mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">{scanLocation.name}</p>
                    <p className="text-sm text-gray-600">{scanLocation.address}</p>
                    <p className="text-sm text-gray-600">{scanLocation.city}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Payment Information</h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between mb-1">
                  <span>PET Scan</span>
                  <span>₹{scanLocation.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Processing Fee</span>
                  <span>₹200</span>
                </div>
                <div className="border-t mt-2 pt-2 flex justify-between font-medium">
                  <span>Total Paid</span>
                  <span>₹{paymentAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Important Information</h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <ul className="text-sm space-y-2">
                  <li className="flex">
                    <CheckCircleIcon className="h-4 w-4 text-medical-green mr-2 mt-0.5 shrink-0" />
                    <span>Please arrive 15 minutes before your appointment time</span>
                  </li>
                  <li className="flex">
                    <CheckCircleIcon className="h-4 w-4 text-medical-green mr-2 mt-0.5 shrink-0" />
                    <span>Bring your valid ID, doctor's referral, and booking reference</span>
                  </li>
                  <li className="flex">
                    <CheckCircleIcon className="h-4 w-4 text-medical-green mr-2 mt-0.5 shrink-0" />
                    <span>Follow the pre-scan instructions sent to your email</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 flex justify-between">
          <div>
            <p className="text-sm text-gray-600">Need help?</p>
            <p className="text-sm font-medium">Call us at: 1800-123-4567</p>
          </div>
          <Button onClick={() => navigate("/")}>
            Return to Home
          </Button>
        </CardFooter>
      </Card>
      
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-3">What's Next?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-medium mb-1">Pre-Scan Instructions</p>
            <p className="text-sm text-gray-600">Check your email for detailed preparation guidelines</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-medium mb-1">Appointment Reminder</p>
            <p className="text-sm text-gray-600">We'll send you a reminder 24 hours before your appointment</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-medium mb-1">View Report Online</p>
            <p className="text-sm text-gray-600">Your scan results will be available within 24-48 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
