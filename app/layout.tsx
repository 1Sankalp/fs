import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Head from 'next/head'; // Ensure you import Head


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FunnelStrike | AI-Powered Lead Generation Agency',
  description: 'Generate high-quality leads with AI-powered funnels that deliver consistent ROI for your business.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      </Head>
        <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
             <a href="/"><div className="flex items-center">
                <Image 
                  src="/favicon2.png" 
                  alt="FunnelStrike Logo" 
                  className="h-8 w-8 mr-2" 
                  width={50} 
                  height={24} 
                />
                <span className="text-2xl font-bold text-gray-900">FunnelStrike</span>
              </div>
              </a>
              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
                <a href="/#process" className="text-gray-600 hover:text-blue-600 font-medium">Process</a>
                <a href="/#faq" className="text-gray-600 hover:text-blue-600 font-medium">FAQ</a>
                <a href="https://calendly.com/1sankalp" target="_blank"  className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
              </nav>
              <div>
              <a href="https://calendly.com/1sankalp" target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md font-medium">
                    Book a Call
                </button>
                </a>
              </div>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}