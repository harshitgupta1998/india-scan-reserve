
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
import { CalendarIcon, CheckCircleIcon, MapPinIcon, FileIcon, PrinterIcon } from "lucide-react";
import { LocationCardProps } from "./LocationCard";
import { jsPDF } from "jspdf";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

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
  
  if (!bookingReference) {
    navigate("/");
    return null;
  }

  // Query to fetch appointment details if needed
  const { data: appointmentData } = useQuery({
    queryKey: ['appointment', bookingReference],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .eq('booking_reference', bookingReference)
        .single();
      
      if (error) {
        console.error('Error fetching appointment:', error);
        return null;
      }
      
      return data;
    },
    enabled: !!bookingReference,
  });

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Add logo and styling
    doc.setFillColor(0, 102, 204);
    doc.rect(0, 0, 210, 25, "F");
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.text("Universal Scan", 105, 15, { align: "center" });
    
    doc.setFontSize(18);
    doc.setTextColor(0, 102, 204);
    doc.text("Reservation Confirmation", 105, 35, { align: "center" });
    
    // Add reference number with background
    doc.setFillColor(240, 247, 255);
    doc.rect(20, 40, 170, 15, "F");
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text(`Booking Reference: ${bookingReference}`, 105, 48, { align: "center" });
    
    // Add appointment details
    doc.setFontSize(14);
    doc.text("Appointment Details", 20, 65);
    doc.line(20, 67, 190, 67);
    
    doc.setFontSize(12);
    doc.text(`Date: ${format(new Date(appointmentDate), "MMMM d, yyyy")}`, 20, 75);
    doc.text(`Time: ${appointmentTime}`, 20, 83);
    
    // Add patient details
    doc.setFontSize(14);
    doc.text("Patient Details", 20, 100);
    doc.line(20, 102, 190, 102);
    
    doc.setFontSize(12);
    doc.text(`Name: ${formData.firstName} ${formData.lastName}`, 20, 110);
    doc.text(`Email: ${formData.email}`, 20, 118);
    doc.text(`Phone: ${formData.phone}`, 20, 126);
    doc.text(`Age: ${formData.age}`, 20, 134);
    doc.text(`Gender: ${formData.gender}`, 20, 142);
    
    // Add scan center details
    doc.setFontSize(14);
    doc.text("Scan Center Details", 20, 159);
    doc.line(20, 161, 190, 161);
    
    doc.setFontSize(12);
    doc.text(`Center: ${scanLocation.name}`, 20, 169);
    doc.text(`Address: ${scanLocation.address}`, 20, 177);
    doc.text(`City: ${scanLocation.city}`, 20, 185);
    
    // Add instructions
    doc.setFillColor(240, 247, 255);
    doc.rect(20, 195, 170, 55, "F");
    doc.setFontSize(14);
    doc.setTextColor(0, 102, 204);
    doc.text("Important Instructions:", 105, 205, { align: "center" });
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text("1. Please arrive 15 minutes before your appointment time", 30, 215);
    doc.text("2. Bring valid ID and doctor's referral", 30, 225);
    doc.text("3. Follow pre-scan instructions sent to your email", 30, 235);
    doc.text("4. For rescheduling, call: 1800-123-4567", 30, 245);
    
    // Add footer
    doc.setFillColor(0, 102, 204);
    doc.rect(0, 275, 210, 15, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text("Universal Scan - Premier PET Scan Centers", 105, 283, { align: "center" });
    
    doc.save(`universal-scan-reservation-${bookingReference}.pdf`);
  };

  const printConfirmation = () => {
    window.print();
  };
  
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircleIcon className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Reservation Confirmed!</h1>
        <p className="text-gray-600">
          Your PET scan appointment has been successfully scheduled.
          A confirmation email has been sent to {formData.email}.
        </p>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="bg-blue-50">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Reservation Details</CardTitle>
              <CardDescription>Booking Reference: {bookingReference}</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={printConfirmation}
                className="flex items-center gap-2"
              >
                <PrinterIcon className="h-4 w-4" />
                Print
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={generatePDF}
                className="flex items-center gap-2"
              >
                <FileIcon className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
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
