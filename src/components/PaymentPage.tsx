
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { format } from "date-fns";
import { CreditCardIcon, CheckCircleIcon } from "lucide-react";
import { LocationCardProps } from "./LocationCard";

interface PaymentFormData {
  cardNumber: string;
  cardholderName: string;
  expiryDate: string;
  cvv: string;
}

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  referringDoctor: string;
  medicalHistory: string;
}

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract data from location state
  const {
    formData = {} as BookingFormData,
    appointmentDate,
    appointmentTime,
    location: scanLocation = {} as LocationCardProps,
  } = location.state || {};
  
  const [paymentData, setPaymentData] = useState<PaymentFormData>({
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",
  });
  
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [processing, setProcessing] = useState<boolean>(false);
  const [paymentComplete, setPaymentComplete] = useState<boolean>(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    let formattedValue = value;
    
    // Format card number with spaces
    if (name === "cardNumber") {
      formattedValue = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
        .slice(0, 19);
    }
    
    // Format expiry date
    if (name === "expiryDate") {
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .slice(0, 5);
    }
    
    // Limit CVV to 3 or 4 digits
    if (name === "cvv") {
      formattedValue = value.replace(/\D/g, "").slice(0, 4);
    }
    
    setPaymentData(prev => ({ ...prev, [name]: formattedValue }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (paymentMethod === "card") {
      // Basic validation
      if (!paymentData.cardNumber || paymentData.cardNumber.length < 19) {
        toast.error("Please enter a valid card number");
        return;
      }
      
      if (!paymentData.cardholderName) {
        toast.error("Please enter the cardholder name");
        return;
      }
      
      if (!paymentData.expiryDate || paymentData.expiryDate.length < 5) {
        toast.error("Please enter a valid expiry date");
        return;
      }
      
      if (!paymentData.cvv || paymentData.cvv.length < 3) {
        toast.error("Please enter a valid CVV");
        return;
      }
    }
    
    // Process payment
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setPaymentComplete(true);
      toast.success("Payment successful! Your appointment is confirmed.");
      
      // In a real app, you would save the booking to a database here
      
      // After a delay, navigate to a confirmation page
      setTimeout(() => {
        navigate("/confirmation", {
          state: {
            formData,
            appointmentDate,
            appointmentTime,
            scanLocation,
            paymentAmount: scanLocation.price + 200,
            bookingReference: `PET-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
          }
        });
      }, 2000);
    }, 2000);
  };
  
  // If there's no scan location or form data, redirect back to the home page
  if (!scanLocation.id || !formData || !appointmentDate) {
    navigate("/");
    return null;
  }
  
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Payment</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {!paymentComplete ? (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Select Payment Method</h2>
                <div className="flex space-x-4">
                  <Button
                    type="button"
                    variant={paymentMethod === "card" ? "default" : "outline"}
                    className={`flex-1 ${paymentMethod === "card" ? "bg-medical-blue" : ""}`}
                    onClick={() => setPaymentMethod("card")}
                  >
                    <CreditCardIcon className="mr-2 h-4 w-4" />
                    Credit/Debit Card
                  </Button>
                  <Button
                    type="button"
                    variant={paymentMethod === "upi" ? "default" : "outline"}
                    className={`flex-1 ${paymentMethod === "upi" ? "bg-medical-blue" : ""}`}
                    onClick={() => setPaymentMethod("upi")}
                  >
                    UPI
                  </Button>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                {paymentMethod === "card" ? (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={paymentData.cardNumber}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="cardholderName">Cardholder Name</Label>
                      <Input
                        id="cardholderName"
                        name="cardholderName"
                        placeholder="John Doe"
                        value={paymentData.cardholderName}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          name="expiryDate"
                          placeholder="MM/YY"
                          value={paymentData.expiryDate}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          type="text"
                          placeholder="123"
                          value={paymentData.cvv}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="upiId">UPI ID</Label>
                      <Input
                        id="upiId"
                        placeholder="yourname@upi"
                        className="mt-1"
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      You will receive a payment request on your UPI app.
                    </p>
                  </div>
                )}
                
                <Button
                  type="submit"
                  className="w-full mt-6 bg-medical-blue hover:bg-blue-600 text-white"
                  size="lg"
                  disabled={processing}
                >
                  {processing ? "Processing..." : `Pay ₹${(scanLocation.price + 200).toLocaleString()}`}
                </Button>
              </form>
            </div>
          ) : (
            <Card className="border-medical-green border-2">
              <CardContent className="pt-6 text-center">
                <CheckCircleIcon className="h-16 w-16 text-medical-green mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-medical-green mb-2">Payment Successful</h2>
                <p className="text-gray-600 mb-4">
                  Your appointment has been confirmed. A confirmation email has been sent to {formData.email}.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
              <CardDescription>Review your appointment details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Patient</h3>
                <p className="text-base">{formData.firstName} {formData.lastName}</p>
                <p className="text-sm text-gray-600">{formData.email}</p>
                <p className="text-sm text-gray-600">{formData.phone}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Location</h3>
                <p className="text-base">{scanLocation.name}</p>
                <p className="text-sm text-gray-600">{scanLocation.address}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Date & Time</h3>
                <p className="text-base">
                  {format(new Date(appointmentDate), "MMMM d, yyyy")} at {appointmentTime}
                </p>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-medium">PET Scan</span>
                  <span>₹{scanLocation.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>Processing Fee</span>
                  <span>₹200</span>
                </div>
                <div className="flex justify-between font-semibold text-lg mt-3 border-t pt-3">
                  <span>Total</span>
                  <span className="text-medical-blue">₹{(scanLocation.price + 200).toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="text-xs text-gray-500">
              <p>By proceeding with the payment, you accept our Terms of Service and Privacy Policy.</p>
            </CardFooter>
          </Card>
          
          <div className="mt-4 text-sm text-gray-600">
            <p className="flex items-center">
              <CheckCircleIcon className="h-4 w-4 text-medical-green mr-2" />
              Secure Payment
            </p>
            <p className="flex items-center mt-1">
              <CheckCircleIcon className="h-4 w-4 text-medical-green mr-2" />
              Instant Appointment Confirmation
            </p>
            <p className="flex items-center mt-1">
              <CheckCircleIcon className="h-4 w-4 text-medical-green mr-2" />
              Free Cancellation up to 24 hours before appointment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
