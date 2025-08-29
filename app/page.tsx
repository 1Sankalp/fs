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
      question: "Is personal branding really necessary for CXOs or executives?",
      answer: "Absolutely. In today's digital-first world, decision-makers and stakeholders check LinkedIn before they pick up the phone. Your brand is your business card."
    },
    {
      question: "Does Funnel Strike handle everything for me?",
      answer: "Yes. From content to strategy to engagement - we handle the heavy lifting so you can focus on what you do best."
    },
    {
      question: "Can you target my industry or location?",
      answer: "Definitely. We tailor your LinkedIn presence to resonate with specific geographies, industries, or networks."
    },
    {
      question: "How much does it cost?",
      answer: "We offer tiered plans based on the level of support and content needed. Book a strategy call to find the best fit for you."
    },
    {
      question: "What is the quickest way to get started today?",
      answer: "You can start as soon as this week. Click below to book your first strategy session."
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
                Your Brand. Your Visibility. Sharpened on <span className="text-[#2999ff]">LinkedIn.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10">
                We help CXOs and high-performing professionals build powerful personal brands on LinkedIn.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
              <a href="/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#2999ff] hover:bg-[#2999ff] text-white px-8 py-6 text-lg rounded-md">
                    Book a Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="#process">
                  <Button variant="outline" className="border-[#2999ff] text-[#2999ff] px-8 py-6 text-lg rounded-md">
                    See Our Process
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className={`flex flex-col items-center transition-all ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <a href="/">
                  <p className="text-white">codexplainer.vercel.app - 21 February 2025 - Watch Video</p>
                </a>
                <div style={{ position: 'relative', height: 290, width: '100%', marginTop: '0px' }}>
                  {/* <iframe 
                    src="fs_vid.mp4" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen" 
                    allowFullScreen 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: 15  }}
                  ></iframe> */}
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
                <Zap className="h-10 w-10 text-[#2999ff] mr-3" />
                <h3 className="text-xl font-semibold">Executive Authority</h3>
              </div>
              <p className="text-gray-600">Be seen as the go-to expert in your domain with strategic content and positioning.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transform transition-all hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-10 w-10 text-[#2999ff] mr-3" />
                <h3 className="text-xl font-semibold">Stronger Opportunities</h3>
              </div>
              <p className="text-gray-600">Attract relevant clients, partnerships, and speaking engagements organically.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transform transition-all hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <Target className="h-10 w-10 text-[#2999ff] mr-3" />
                <h3 className="text-xl font-semibold">Smart Visibility</h3>
              </div>
              <p className="text-gray-600">Get noticed by the right people without sounding salesy or off-brand.</p>
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
            ["Strategy", "Executive-focused personal brand strategy", "Generic templates or one-size-fits-all"],
            ["Platform Focus", "100% LinkedIn growth + visibility", "Mixed platforms, diluted efforts"],
            ["Content Creation", "Executive-toned, strategic, and tailored", "Basic graphics and quotes"],
            ["Personalization", "Deep research on you, your voice, and your network", "Minimal brand voice matching"],
            ["Results Timeline", "Growth in visibility & connections within 4-5 weeks", "Unpredictable or slow"],
            ["ROI", "Increased credibility, authority, and inbound opportunities", "Often unclear or unmeasurable"],
          ].map(([feature, funnelStrike, other], index) => (
            <tr key={index}>
              <td className="border border-gray-200 px-2 py-3">{feature}</td>
              <td className="border border-gray-200 px-2 py-3 flex items-center gap-2">
                <CheckCircle className="w-10 h-5 text-[#2999ff]" />
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
              Our 3-Step Executive Branding Framework
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative">
              <div className="absolute -top-3 -left-3 bg-[#2999ff] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Strategy Alignment</h3>
              <p className="text-gray-600 mb-4">We analyze your career, industry, values, and goals to craft a personal brand strategy aligned with your executive presence.</p>
              <div className="text-[#2999ff] font-medium">Discovery & Planning Phase</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative">
              <div className="absolute -top-3 -left-3 bg-[#2999ff] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Content Creation & Visibility</h3>
              <p className="text-gray-600 mb-4">Our team produces content that reflects your expertise, values, and voice - then optimizes it to expand your reach among decision-makers.</p>
              <div className="text-[#2999ff] font-medium">Build & Launch Phase</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative">
              <div className="absolute -top-3 -left-3 bg-[#2999ff] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Positioning & Engagement</h3>
              <p className="text-gray-600 mb-4">We help you strategically grow your network, engage with key stakeholders, and amplify your brand through targeted positioning.</p>
              <div className="text-[#2999ff] font-medium">Growth & Refinement Phase</div>
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
              Get answers to common questions about our personal branding services.
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
                    <ChevronUp className="h-5 w-5 text-[#2999ff]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#2999ff]" />
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
      <section className="w-full bg-[#2999ff] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build a Magnetic LinkedIn Presence?</h2>
              <p className="text-xl text-blue-100">
                Book your strategy call today and discover how FunnelStrike can turn your LinkedIn into your most powerful personal branding tool.
              </p>
            </div>
            <div>
            <a href="/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-[#2999ff] hover:bg-blue-50 px-8 py-6 text-lg rounded-md">
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
              <p className="text-gray-600 mt-2">A No BS Personal Branding Agency</p>
            </div>
            <div className="flex items-center justify-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-[#2999ff]">Home</Link>
              <Link href="#faq" className="text-gray-600 hover:text-[#2999ff]">FAQ</Link>
              <Link href="#process" className="text-gray-600 hover:text-[#2999ff]">Process</Link>
              <Link href="/" target="_blank" className="text-gray-600 hover:text-[#2999ff]">Contact</Link>
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