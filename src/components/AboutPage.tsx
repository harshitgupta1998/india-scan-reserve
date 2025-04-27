
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About PET Scans</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-medical-blue mb-4">What is a PET Scan?</h2>
          <p className="mb-4">
            A Positron Emission Tomography (PET) scan is an imaging test that helps reveal how your tissues and organs are functioning. These scans use a radioactive drug (tracer) to show activity within your body at the cellular level.
          </p>
          <p>
            PET scans are commonly used to detect cancer, heart problems, brain disorders, and other central nervous system problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-3">How PET Scans Work</h3>
              <p className="text-gray-700">
                Before a PET scan, a small amount of radioactive tracer is injected into your body. This tracer emits signals that are detected by the PET scanner. The scanner creates 3D images that show where the tracer is being used in the body, helping doctors identify areas of abnormal metabolism or chemical activity.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-3">When PET Scans Are Needed</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Cancer diagnosis, staging, and monitoring treatment response</li>
                <li>Heart disease assessment, including blood flow and heart function</li>
                <li>Brain disorders such as dementia, Alzheimer's, epilepsy</li>
                <li>Planning for surgery or radiation therapy</li>
                <li>Evaluating the effectiveness of treatments</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">Preparing for Your PET Scan</h2>
        <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
          <p className="mb-4">Proper preparation is essential for accurate PET scan results. Your doctor will provide specific instructions, but general guidelines include:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-lg mb-2">Before Your Scan:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Don't eat or drink (except water) for 6 hours before the scan</li>
                <li>Avoid strenuous exercise for 24 hours prior</li>
                <li>Wear comfortable clothing without metal fasteners</li>
                <li>Inform your doctor about medications, allergies, and medical conditions</li>
                <li>Tell your doctor if you're pregnant or breastfeeding</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-2">Day of Your Scan:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Arrive 15 minutes before your appointment</li>
                <li>Bring your doctor's referral and ID</li>
                <li>The procedure typically takes 2-3 hours total</li>
                <li>You'll need to lie still during the scan (30-45 minutes)</li>
                <li>Drink plenty of water after the scan to flush the tracer</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mb-8">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is a PET scan safe?</AccordionTrigger>
            <AccordionContent>
              PET scans are generally safe. The amount of radiation exposure is small, and the radioactive tracer used has a very short half-life, meaning it quickly disappears from your body. The benefits of the diagnostic information obtained usually outweigh the minimal risks of radiation exposure.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger>How long does a PET scan take?</AccordionTrigger>
            <AccordionContent>
              The entire PET scan process typically takes about 2-3 hours. After the tracer is injected, you'll need to wait about an hour for it to distribute throughout your body. The actual scanning time is usually 30-45 minutes.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger>Is a PET scan painful?</AccordionTrigger>
            <AccordionContent>
              The only pain involved is a slight pinch from the needle when the radioactive tracer is injected. The scan itself is painless, though you'll need to lie still for up to 45 minutes, which some people find uncomfortable.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger>When will I get my PET scan results?</AccordionTrigger>
            <AccordionContent>
              A radiologist will review your PET scan images and report the findings to your doctor. Results are typically available within 24-48 hours. Your doctor will discuss the results with you at your follow-up appointment.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger>Can I resume normal activities after a PET scan?</AccordionTrigger>
            <AccordionContent>
              Yes, you can resume all normal activities after a PET scan. The radioactive tracer used has a very short half-life and is quickly eliminated from your body. To help this process, drink plenty of fluids for the remainder of the day.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger>What's the difference between a PET scan and CT or MRI?</AccordionTrigger>
            <AccordionContent>
              PET scans show metabolic activity and function at the cellular level, while CT scans and MRIs show anatomical structure. Often, PET scans are combined with CT scans (PET-CT) to provide both functional and structural information in a single examination.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="bg-medical-blue/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Have More Questions?</h2>
          <p className="mb-4">
            Our medical team is available to answer any questions you may have about PET scans or to help you prepare for your upcoming appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+918001234567" className="bg-medical-blue text-white px-4 py-2 rounded-md text-center hover:bg-blue-600 transition-colors">
              Call Us: 1800-123-4567
            </a>
            <a href="mailto:info@indiascanreserve.com" className="bg-white text-medical-blue border border-medical-blue px-4 py-2 rounded-md text-center hover:bg-blue-50 transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
