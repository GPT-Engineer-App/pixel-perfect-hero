import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import WavyBackground from "@/components/WavyBackground";
import GlobalUsersSection from "@/components/GlobalUsersSection";

const Index = () => {
  return (
    <div className="bg-[#e6e6e0] min-h-screen relative">
      <WavyBackground />
      <header className="bg-transparent py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <svg className="w-8 h-8 text-[#ff4d00]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="text-2xl font-bold text-black ml-2">VELOXFORCE</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-black hover:text-gray-600">Services</a>
            <a href="#" className="text-black hover:text-gray-600">About Us</a>
            <a href="#" className="text-black hover:text-gray-600">Blog</a>
          </nav>
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full">Book a call</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Build Business Foundations with next-gen
            <span className="text-[#ff4d00]"> Automated systems</span>
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Build a system in which your administration will be processed from start to finish so your company can scale with ease.
            Automatically filter your leads to ensure you are only spending time other most qualified leads.
            Improve customer service with an AI trained on all your previous customer requests, providing instant and accurate responses.
          </p>
        </div>
        <div className="mt-16 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-12">
            <div className="w-16 h-16 bg-[#ff4d00] rounded-full flex items-center justify-center">
              <ArrowDown className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="bg-black rounded-3xl overflow-hidden">
            <img src="/placeholder.svg" alt="Automated Systems" className="mx-auto object-cover w-full h-[400px]" />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white p-4">
              <span className="text-xs uppercase tracking-wider">Web Development</span>
              <button className="ml-4 text-sm underline">View Details</button>
            </div>
          </div>
        </div>
      </main>
      <GlobalUsersSection />
      <footer className="bg-black text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 VELOXFORCE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
