
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-8">
          Find answers to common questions about PET scans and our booking process.
        </p>
        
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Booking & Appointments</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="booking-1">
              <AccordionTrigger>How do I book a PET scan appointment?</AccordionTrigger>
              <AccordionContent>
                Booking a PET scan is simple. You can book online through our website by selecting a preferred location, date, and time. Fill in your details, upload your doctor's referral if required, and complete the payment. You'll receive an instant confirmation of your appointment.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="booking-2">
              <AccordionTrigger>Do I need a doctor's referral for a PET scan?</AccordionTrigger>
              <AccordionContent>
                Yes, a doctor's referral is required for all PET scan appointments. This is because PET scans involve radiation exposure and should only be performed when medically necessary. You can upload your referral during the booking process or bring it with you to your appointment.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="booking-3">
              <AccordionTrigger>How much does a PET scan cost?</AccordionTrigger>
              <AccordionContent>
                PET scan costs vary depending on the location and specific requirements. The base price typically ranges from ₹12,000 to ₹18,000. The exact price will be displayed when you select a location. Some insurance plans may cover part or all of the cost - we recommend checking with your insurance provider.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="booking-4">
              <AccordionTrigger>Can I cancel or reschedule my appointment?</AccordionTrigger>
              <AccordionContent>
                Yes, you can cancel or reschedule your appointment up to 24 hours before the scheduled time without any charges. For cancellations made less than 24 hours before the appointment, a cancellation fee may apply. To cancel or reschedule, log in to your account or contact our customer support.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="booking-5">
              <AccordionTrigger>How far in advance should I book my appointment?</AccordionTrigger>
              <AccordionContent>
                We recommend booking at least 3-5 days in advance to ensure availability at your preferred location and time. However, we often have same-day or next-day appointments available at many locations if you need a scan urgently.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Preparation & Procedure</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="prep-1">
              <AccordionTrigger>How should I prepare for my PET scan?</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Don't eat or drink anything except water for 6 hours before your scan</li>
                  <li>Avoid strenuous exercise for 24 hours before the scan</li>
                  <li>Wear comfortable clothing without metal zippers or buttons</li>
                  <li>Inform your doctor if you're pregnant, breastfeeding, or diabetic</li>
                  <li>Follow any specific instructions provided in your appointment confirmation</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="prep-2">
              <AccordionTrigger>How long does a PET scan procedure take?</AccordionTrigger>
              <AccordionContent>
                The entire procedure typically takes 2-3 hours. After you arrive, you'll receive an injection of the radioactive tracer. You'll then need to rest quietly for about 60 minutes while the tracer distributes throughout your body. The actual scanning time is approximately 30-45 minutes.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="prep-3">
              <AccordionTrigger>Is a PET scan painful or dangerous?</AccordionTrigger>
              <AccordionContent>
                PET scans are not painful. You may feel a slight pinch when the radioactive tracer is injected. The radiation exposure from a PET scan is considered safe and low-risk. The tracer has a very short half-life and leaves your body quickly through your urine.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="prep-4">
              <AccordionTrigger>Can I bring someone with me to my appointment?</AccordionTrigger>
              <AccordionContent>
                Yes, you can bring a friend or family member for support. However, they will need to wait in the waiting area during the actual scan. Pregnant women and children should not accompany you in the injection or scanning rooms due to minimal radiation exposure.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">After Your Scan</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="after-1">
              <AccordionTrigger>When and how will I get my PET scan results?</AccordionTrigger>
              <AccordionContent>
                The scan images will be reviewed by a radiologist, and a detailed report will be prepared within 24-48 hours. The report will be sent directly to your referring physician. You can also access your results through our online portal. We recommend scheduling a follow-up appointment with your doctor to discuss the results.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="after-2">
              <AccordionTrigger>Can I resume normal activities after a PET scan?</AccordionTrigger>
              <AccordionContent>
                Yes, you can resume all normal activities immediately after the scan. We recommend drinking plenty of water to help flush the radioactive tracer from your body more quickly. There are no restrictions on your diet or activities following the scan.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="after-3">
              <AccordionTrigger>How can I get a copy of my PET scan images or report?</AccordionTrigger>
              <AccordionContent>
                You can download your images and report from our secure patient portal. Alternatively, you can request a CD or printed copy of your results by contacting the imaging center where your scan was performed. There may be a small fee for physical copies.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Insurance & Payment</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="insurance-1">
              <AccordionTrigger>Does insurance cover PET scans?</AccordionTrigger>
              <AccordionContent>
                Many insurance plans cover PET scans when they are deemed medically necessary. Coverage depends on your specific insurance policy and the reason for the scan. We recommend contacting your insurance provider before booking to verify coverage and any pre-authorization requirements.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="insurance-2">
              <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
              <AccordionContent>
                We accept all major credit and debit cards (Visa, Mastercard, American Express, RuPay), UPI payments, net banking, and digital wallets. Payment is required at the time of booking to confirm your appointment.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="insurance-3">
              <AccordionTrigger>Do you offer any discounts or financial assistance?</AccordionTrigger>
              <AccordionContent>
                We offer discounts for senior citizens and patients from economically weaker sections. We also have tie-ups with various hospitals and healthcare providers that may offer special rates. Please contact our customer support to learn about any applicable discounts or assistance programs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-3">Still have questions?</h2>
          <p className="mb-4">
            Our customer support team is available to assist you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-medical-blue hover:bg-blue-600">
              Contact Support
            </Button>
            <Button variant="outline">
              Call: 1800-123-4567
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
