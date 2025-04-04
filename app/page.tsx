"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, BarChart3, Target, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I know if Funnel Strike is a good fit for my business?",
      answer: "We grow when you grow. Our lead generation isn’t just about numbers—it’s about delivering real, conversion-ready prospects that drive success."
    },
    {
      question: "Does Funnel Strike handle everything for me?",
      answer: "Yes! From research and campaign setup to lead qualification and tracking, we handle the entire process. You just focus on closing deals while we bring in the leads."
    },
    {
      question: "Can Funnel Strike target specific locations?",
      answer: "Absolutely! We customize lead generation based on your desired industry, location, and audience demographics to ensure precision targeting."
    },
    {
      question: "How much does it cost?",
      answer: "We like to keep things simple and effective! With customizable pay-per-call and retainer options, our pricing ensures you only pay for what truly benefits your business."
    },
    {
      question: "What is the quickest way to get started today?",
      answer: "Simple—book a call with us! We’ll discuss your goals, tailor a plan, and launch your campaign right away."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section id="home" className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className={`text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Your Next <span className="text-blue-500">Big Client?</span> Already in the Pipeline!
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10">
                We help businesses scale their customer acquisition through automated lead generation systems that deliver consistent ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/sankalp-funnelstrike/30min" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-md">
                    Book a Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="#process">
                  <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-6 text-lg rounded-md">
                    See Our Process
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className={`flex flex-col items-center transition-all ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* <a href="https://www.loom.com/share/9d7c5431b0a44d45aed616f952cb4738">
                  <p className="text-white">codexplainer.vercel.app - 21 February 2025 - Watch Video</p>
                </a> */}
                <div style={{ position: 'relative', height: 290, width: '100%', marginTop: '0px' }}>
                  <iframe 
                    src="https://www.loom.com/embed/9d7c5431b0a44d45aed616f952cb4738?sid=83715e76-a870-4fc5-be65-e5de66f49579?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen" 
                    allowFullScreen 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: 15  }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center mb-12 font-bold text-gray-900">How We Drive Growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transform transition-all hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <Zap className="h-10 w-10 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold">Faster Conversions</h3>
              </div>
              <p className="text-gray-600"> A high-performing system that grows with you, bringing in more leads with less effort.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transform transition-all hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-10 w-10 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold">Higher Quality</h3>
              </div>
              <p className="text-gray-600">An optimized approach that maximizes efficiency, ensuring you only talk to prospects ready to buy.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transform transition-all hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <Target className="h-10 w-10 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold">Targeted Outreach</h3>
              </div>
              <p className="text-gray-600">Know exactly which campaigns drive results and scale them with confidence, maximizing your ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FunnelStrike vs Other Agencies</h2>
          </div>
          
          <div className="flex justify-center mb-8">
  <div className="w-full max-w-4xl px-2">
    <div className="overflow-hidden rounded-[15px] shadow-lg">
      <table className="w-full border-collapse text-sm sm:text-base">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-200 px-2 py-2 text-left w-1/3">Feature</th>
            <th className="border border-gray-200 px-2 py-2 text-left w-1/3">FunnelStrike</th>
            <th className="border border-gray-200 px-2 py-2 text-left w-1/3">Other Agencies</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Lead Qualification", "AI-powered, high-intent leads", "Manual, often unqualified leads"],
            ["Conversion Rate", "3x higher than traditional methods", "Standard, often inconsistent"],
            ["Audience Segmentation", "Hyper-targeted, data-driven", "Broad, less targeted"],
            ["Optimization", "Continuous AI-driven optimization", "Periodic, often reactive"],
            ["Time to Results", "Initial leads in 5-6 weeks", "Varies, often longer"],
            ["ROI", "25% increase in 3 months", "Unpredictable, often lower"],
          ].map(([feature, funnelStrike, other], index) => (
            <tr key={index}>
              <td className="border border-gray-200 px-2 py-3">{feature}</td>
              <td className="border border-gray-200 px-2 py-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                {funnelStrike}
              </td>
              <td className="border border-gray-200 px-2 py-2">{other}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;ve refined our approach to consistently deliver qualified leads that convert into customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative">
              <div className="absolute -top-3 -left-3 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Strategy Development</h3>
              <p className="text-gray-600 mb-4">We analyze your market, competitors, and ideal customer profile to create a tailored lead generation strategy.</p>
              <div className="text-blue-500 font-medium">Discovery & Planning Phase</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative">
              <div className="absolute -top-3 -left-3 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Funnel Setup</h3>
              <p className="text-gray-600 mb-4">Our team builds high-converting funnels with AI-powered automation to capture and nurture leads.</p>
              <div className="text-blue-500 font-medium">Build & Launch Phase</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative">
              <div className="absolute -top-3 -left-3 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Optimization & Scaling</h3>
              <p className="text-gray-600 mb-4">We continuously test, refine, and scale your campaigns to maximize ROI and lead quality.</p>
              <div className="text-blue-500 font-medium">Growth & Refinement Phase</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FAQs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our lead generation services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="mb-4 border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
              >
                <button 
                  className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-500" />
                  )}
                </button>
                <div 
                  className={`px-5 transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-blue-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Lead Generation?</h2>
              <p className="text-xl text-blue-100">
                Book a strategy call today and discover how our automated approach can drive qualified leads to your business.
              </p>
            </div>
            <div>
            <a href="https://calendly.com/sankalp-funnelstrike/30min" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-blue-500 hover:bg-blue-50 px-8 py-6 text-lg rounded-md">
                  Book Your Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
            <a href="/"><div className="flex items-center">
                <Image 
                  src="/favicon2.png" 
                  alt="FunnelStrike Logo" 
                  className="h-8 w-8 mr-2" 
                  width={24} 
                  height={24} 
                />
                <span className="text-2xl font-bold text-gray-900">FunnelStrike</span>
              </div>
              </a>
              <p className="text-gray-600 mt-2">A No BS Lead Gen Agency</p>
            </div>
            <div className="flex items-center justify-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link>
              <Link href="#faq" className="text-gray-600 hover:text-blue-500">FAQ</Link>
              <Link href="#process" className="text-gray-600 hover:text-blue-500">Process</Link>
              <Link href="https://calendly.com/sankalp-funnelstrike/30min" target="_blank" className="text-gray-600 hover:text-blue-500">Contact</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-500">
            <p>© {new Date().getFullYear()} FunnelStrike. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}