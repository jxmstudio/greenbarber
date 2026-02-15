import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Terms of Service | The Green Barber",
  description: "Terms of Service for The Green Barber - Professional tree services in Southern Tasmania",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl">Terms of Service</CardTitle>
            <p className="text-sm text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using thegreenbarber.com.au ("the Website") and engaging The Green Barber ("we", "us", or "our") for tree services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Services</h2>
              <p>The Green Barber provides professional tree services including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hedge trimming</li>
                <li>Tree pruning and reductions</li>
                <li>Tree removal</li>
                <li>Stump grinding</li>
                <li>Emergency tree services</li>
              </ul>
              <p className="mt-4">
                All services are provided by qualified arborists in accordance with industry standards and local regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Quotes and Pricing</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All quotes are estimates and may be subject to change based on site conditions and actual work required.</li>
                <li>Quotes are valid for 30 days unless otherwise stated.</li>
                <li>Final pricing will be confirmed before work commences.</li>
                <li>Additional work requested during the project may incur additional charges.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Permits and Permissions</h2>
              <p>
                It is the customer's responsibility to obtain any necessary permits or permissions required for tree work, including council permits for protected or heritage trees. We can assist with permit applications, but the customer is ultimately responsible for compliance with local regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Insurance and Liability</h2>
              <p>
                The Green Barber maintains public liability insurance. We are fully insured for all tree service operations. However, customers are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ensuring access to the work site</li>
                <li>Protecting personal property and structures</li>
                <li>Notifying us of any underground utilities or hazards</li>
                <li>Obtaining necessary permissions from property owners if work is on rental or shared property</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment is due upon completion of work unless prior arrangements have been made.</li>
                <li>We accept cash, bank transfer, and other agreed payment methods.</li>
                <li>Late payment may incur additional charges.</li>
                <li>For large projects, a deposit may be required before work commences.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Cancellation and Rescheduling</h2>
              <p>
                Customers may cancel or reschedule services with at least 24 hours' notice. Cancellations with less than 24 hours' notice may incur a cancellation fee. We reserve the right to cancel or reschedule due to weather conditions, safety concerns, or other circumstances beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Property Damage</h2>
              <p>
                While we take every precaution to protect your property, tree work can sometimes cause minor damage to lawns, gardens, or other property. We will repair or compensate for any damage caused by our negligence. Pre-existing conditions will be noted before work commences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Cleanup and Disposal</h2>
              <p>
                All debris from tree work will be removed from the site unless otherwise agreed. Wood chips and logs may be left on-site if requested. Additional disposal fees may apply for large quantities of material.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Website Use</h2>
              <h3 className="text-xl font-semibold mb-2">10.1 Content</h3>
              <p>
                All content on this website, including text, images, logos, and graphics, is the property of The Green Barber and protected by copyright laws. You may not reproduce, distribute, or use any content without our written permission.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-4">10.2 User Conduct</h3>
              <p>When using our website, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Transmit any viruses or malicious code</li>
                <li>Interfere with the website's operation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, The Green Barber shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website. Our total liability shall not exceed the amount paid for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Warranty</h2>
              <p>
                We guarantee our workmanship and will return to address any issues related to our work within a reasonable timeframe. However, we are not responsible for issues arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Natural tree growth or decline</li>
                <li>Weather-related damage</li>
                <li>Pest or disease issues</li>
                <li>Damage caused by third parties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Dispute Resolution</h2>
              <p>
                Any disputes arising from our services will be resolved through good faith negotiation. If a resolution cannot be reached, disputes will be subject to the jurisdiction of the courts of Tasmania, Australia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">14. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">15. Contact Information</h2>
              <p>For questions about these Terms of Service, please contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p><strong>The Green Barber</strong></p>
                <p>70 Carlton Beach Rd, Dodges Ferry, TAS 7173, Australia</p>
                <p>Email: <a href="mailto:thegreenbarbertas@gmail.com" className="text-primary hover:underline">thegreenbarbertas@gmail.com</a></p>
                <p>Phone: <a href="tel:0433804284" className="text-primary hover:underline">0433 804 284</a></p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

