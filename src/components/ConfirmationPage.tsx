
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
import { CalendarIcon, CheckCircleIcon, MapPinIcon, FilePdfIcon } from "lucide-react";
import { LocationCardProps } from "./LocationCard";
import { jsPDF } from "jspdf";

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const {
    formData,
    appointmentDate,
    appointmentTime,
    scanLocation,
    bookingReference
  } = location.state || {};
  
  // If there's no booking reference, redirect back to the home page
  if (!bookingReference) {
    navigate("/");
    return null;
  }

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Add logo or header
    doc.setFontSize(20);
    doc.setTextColor(0, 0, 255);
    doc.text("Universal Scan", 105, 15, { align: "center" });
    
    // Add booking details
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("Booking Confirmation", 105, 30, { align: "center" });
    
    doc.setFontSize(12);
    doc.text(`Reference: ${bookingReference}`, 20, 45);
    doc.text(`Date: ${format(new Date(appointmentDate), "MMMM d, yyyy")}`, 20, 55);
    doc.text(`Time: ${appointmentTime}`, 20, 65);
    
    // Patient details
    doc.text("Patient Details:", 20, 80);
    doc.text(`Name: ${formData.firstName} ${formData.lastName}`, 20, 90);
    doc.text(`Email: ${formData.email}`, 20, 100);
    doc.text(`Phone: ${formData.phone}`, 20, 110);
    doc.text(`Age: ${formData.age}`, 20, 120);
    doc.text(`Gender: ${formData.gender}`, 20, 130);
    
    // Location details
    doc.text("Scan Center Details:", 20, 145);
    doc.text(`Center: ${scanLocation.name}`, 20, 155);
    doc.text(`Address: ${scanLocation.address}`, 20, 165);
    doc.text(`City: ${scanLocation.city}`, 20, 175);
    
    // Important instructions
    doc.setFontSize(11);
    doc.text("Important Instructions:", 20, 195);
    doc.text("1. Please arrive 15 minutes before your appointment time", 25, 205);
    doc.text("2. Bring valid ID and doctor's referral", 25, 215);
    doc.text("3. Follow pre-scan instructions sent to your email", 25, 225);
    doc.text("4. For rescheduling, call: 1800-123-4567", 25, 235);
    
    // Save PDF
    doc.save(`universal-scan-booking-${bookingReference}.pdf`);
  };
  
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircleIcon className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
        <p className="text-gray-600">
          Your PET scan appointment has been successfully scheduled.
          A confirmation email has been sent to {formData.email}.
        </p>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="bg-blue-50">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Appointment Details</CardTitle>
              <CardDescription>Booking Reference: {bookingReference}</CardDescription>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={generatePDF}
              className="flex items-center gap-2"
            >
              <FilePdfIcon className="h-4 w-4" />
              Download PDF
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
                  <CalendarIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">
                      {format(new Date(appointmentDate), "MMMM d, yyyy")}
                    </p>
                    <p className="text-sm text-gray-600">{appointmentTime}</p>
                  </div>
                </div>
                
                <div className="flex items-start mt-3">
                  <MapPinIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">{scanLocation.name}</p>
                    <p className="text-sm text-gray-600">{scanLocation.address}</p>
                    <p className="text-sm text-gray-600">{scanLocation.city}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50">
          <div>
            <p className="text-sm text-gray-600">Need help?</p>
            <p className="text-sm font-medium">Call us at: 1800-123-4567</p>
          </div>
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
