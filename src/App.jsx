import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.jsx";
import { Separator } from "@/components/ui/separator.jsx";
import "./App.css";

function App() {
  return (
    <>
      <header className="bg-background py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Open Asteroid Impact</h1>
          <p className="text-lg mb-8">The future of astro mining is here</p>
          <Button size="lg">Get Started</Button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We use state-of-the-art asteroid mining technology to maximize efficiency and profitability.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Experienced Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our team consists of top experts in the field of astro mining and space exploration.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sustainable Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We prioritize sustainable and environmentally-friendly mining practices.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Avatar>
                  <AvatarImage src="/elon-musk.jpg" />
                  <AvatarFallback>EM</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <CardTitle>Elon Musk</CardTitle>
                  <p className="text-sm text-muted-foreground">CEO, SpaceX</p>
                </div>
              </CardHeader>
              <CardContent>
                <p>"Open Asteroid Impact is revolutionizing the astro mining industry. Their technology and expertise are unparalleled."</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Avatar>
                  <AvatarImage src="/andrew-carnegie.jpg" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <CardTitle>Andrew Carnegie</CardTitle>
                  <p className="text-sm text-muted-foreground">Industrialist, 19th Century</p>
                </div>
              </CardHeader>
              <CardContent>
                <p>"If I were alive today, I would undoubtedly invest in Open Asteroid Impact. Their vision for the future is truly remarkable."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-4">$100,000</p>
              <ul className="space-y-2">
                <li>Access to asteroid database</li>
                <li>Basic mining equipment</li>
                <li>Online support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Choose Plan
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-4">$500,000</p>
              <ul className="space-y-2">
                <li>Advanced mining equipment</li>
                <li>Priority asteroid selection</li>
                <li>Dedicated support team</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-4">Custom</p>
              <ul className="space-y-2">
                <li>Tailored mining solutions</li>
                <li>Exclusive asteroid rights</li>
                <li>On-site support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Contact Us
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <footer className="bg-background py-8">
        <div className="container mx-auto px-4">
          <p>&copy; 2023 Open Asteroid Impact. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
