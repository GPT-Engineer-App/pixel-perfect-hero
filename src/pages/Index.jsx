// Update this page (the content is just a fallback if you fail to update the page)

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="bg-[#e6e6e1] min-h-screen">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <svg className="w-8 h-8 text-[#ff6b35]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-2 text-2xl font-bold text-[#333333]">VELOXFORCE</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-[#333333] hover:text-[#ff6b35]">Services</a>
          <a href="#about" className="text-[#333333] hover:text-[#ff6b35]">About Us</a>
          <a href="#blog" className="text-[#333333] hover:text-[#ff6b35]">Blog</a>
        </nav>
        <Button className="bg-black text-white hover:bg-[#333333]">Book a call</Button>
      </header>
      <main className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#333333] mb-4">
          Build Business Foundations with next-gen<br />
          <span className="text-[#ff6b35]">Automated systems</span>
        </h1>
        <p className="text-[#666666] max-w-3xl mx-auto mb-8 text-lg">
          Build a system in which your administration will be processed from start to finish so your company can scale with ease.
          Automatically filter your leads to ensure you are only spending time after most qualified leads.
          Improve customer service with an AI trained on all your previous customer requests, providing instant and accurate responses.
        </p>
      </main>
    </div>
  );
};

export default Index;
