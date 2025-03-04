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
      question: "How does FunnelStrike generate leads?",
      answer: "We use a combination of AI-powered targeting, conversion-optimized landing pages, and automated follow-up systems to attract and qualify leads for your business. Our approach focuses on quality over quantity, ensuring you receive leads that are genuinely interested in your services."
    },
    {
      question: "How long until I see results?",
      answer: "Most clients begin seeing initial leads within the first 2-4 weeks after campaign launch. However, the quality and conversion rate of leads typically improves over time as our AI systems learn and optimize based on performance data."
    },
    {
      question: "Do you work with any industry?",
      answer: "While our systems can be adapted to various industries, we specialize in B2B services, SaaS, professional services, and high-ticket B2C offerings where the lifetime value of a customer justifies the investment in quality lead generation."
    },
    {
      question: "What makes FunnelStrike different from other agencies?",
      answer: "Unlike traditional agencies that rely on outdated tactics and vanity metrics, we focus on delivering qualified leads that convert into revenue. Our AI-powered approach continuously optimizes your campaigns, and we provide complete transparency into performance metrics that matter to your bottom line."
    },
    {
      question: "How much does it cost?",
      answer: "We offer customized packages based on your specific business needs, target audience, and growth goals. Rather than charging standard packages that may not fit your requirements, we develop tailored strategies with pricing that reflects the scope and scale of your campaign. Book a strategy call to receive a personalized quote."
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
                Generate High-Quality Leads With <span className="text-blue-600">AI-Powered</span> Funnels
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10">
                We help businesses scale their customer acquisition through automated lead generation systems that deliver consistent ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/1sankalp" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md">
                    Book a Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="#process">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-md">
                    See Our Process
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className={`flex flex-col items-center transition-all ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <a href="https://www.loom.com/share/9d7c5431b0a44d45aed616f952cb4738">
                  <p className="text-white">codexplainer.vercel.app - 21 February 2025 - Watch Video</p>
                </a>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transform transition-all hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <Zap className="h-10 w-10 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Faster Conversions</h3>
              </div>
              <p className="text-gray-600">Our AI-optimized funnels convert visitors to leads 3x faster than traditional methods.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transform transition-all hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-10 w-10 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Higher Quality</h3>
              </div>
              <p className="text-gray-600">Machine learning algorithms qualify leads ensuring you only talk to prospects ready to buy.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transform transition-all hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <Target className="h-10 w-10 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Measurable ROI</h3>
              </div>
              <p className="text-gray-600">Our clients see clear attribution and measurable return on their marketing investment.</p>
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
          <div className="w-full max-w-4xl overflow-hidden">
            <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left">Feature</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">FunnelStrike</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Other Agencies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">Lead Qualification</td>
                    <td className="border border-gray-200 px-4 py-3 flex items-center">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-3" />AI-powered, high-intent leads</div>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">Manual, often unqualified leads</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">Conversion Rate</td>
                    <td className="border border-gray-200 px-4 py-3 flex items-center">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-3" />3x higher than traditional methods</div>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">Standard conversion rates</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">Audience Segmentation</td>
                    <td className="border border-gray-200 px-4 py-3 flex items-center">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-3" />Hyper-targeted, data-driven</div>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">Broad, less targeted</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">Optimization</td>
                    <td className="border border-gray-200 px-4 py-3 flex items-center">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-3" />Continuous, machine learning</div>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">Periodic, often reactive</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">Time to Results</td>
                    <td className="border border-gray-200 px-4 py-3 flex items-center">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-3" />Initial leads in 2-4 weeks</div>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">Varies, often longer</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">ROI</td>
                    <td className="border border-gray-200 px-4 py-3 flex items-center">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-3" />25% increase in 3 months</div>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">Unpredictable, often lower</td>
                  </tr>
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
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Strategy Development</h3>
              <p className="text-gray-600 mb-4">We analyze your market, competitors, and ideal customer profile to create a tailored lead generation strategy.</p>
              <div className="text-blue-600 font-medium">Discovery & Planning Phase</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative">
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Funnel Implementation</h3>
              <p className="text-gray-600 mb-4">Our team builds high-converting funnels with AI-powered automation to capture and nurture leads.</p>
              <div className="text-blue-600 font-medium">Build & Launch Phase</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative">
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Optimization & Scaling</h3>
              <p className="text-gray-600 mb-4">We continuously test, refine, and scale your campaigns to maximize ROI and lead quality.</p>
              <div className="text-blue-600 font-medium">Growth & Refinement Phase</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
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
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-600" />
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
      <section className="w-full bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Lead Generation?</h2>
              <p className="text-xl text-blue-100">
                Book a strategy call today and discover how our AI-powered approach can drive qualified leads to your business.
              </p>
            </div>
            <div>
            <a href="https://calendly.com/1sankalp" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-md">
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
              <p className="text-gray-600 mt-2">AI-Powered Lead Generation</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              <Link href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</Link>
              <Link href="#process" className="text-gray-600 hover:text-blue-600">Process</Link>
              <Link href="https://calendly.com/1sankalp" target="_blank" className="text-gray-600 hover:text-blue-600">Contact</Link>
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