import Link from 'next/link'
import { CheckCircle, ArrowRight, HelpCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function ItineraryConfirmation() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <CardTitle className="text-2xl font-bold text-center">Thank You for Your Submission!</CardTitle>
            <CardDescription className="text-center text-lg">
              We&apos;re creating your custom travel plan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
              <p className="text-gray-600 mb-4">
                Your personalized itinerary is being crafted by our AI. Here&apos;s what you can expect:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>You&apos;ll receive an email with your custom itinerary within the next 24 hours.</li>
                <li>Your itinerary will also be available in your account dashboard.</li>
                <li>If you opted in, your plan may be featured as a sample itinerary (anonymized for privacy).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">While You Wait</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/sample-itineraries" className="block">
                  <Button variant="outline" className="w-full justify-between">
                    Browse Sample Itineraries
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/faq" className="block">
                  <Button variant="outline" className="w-full justify-between">
                    Read FAQs
                    <HelpCircle className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </section>

            <div className="flex justify-center">
              <Link href="/">
                <Button className="bg-[#fc5071] hover:bg-[#e0365c] text-white">
                  Return to Homepage
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 AI Travel Planner. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}