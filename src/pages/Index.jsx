import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, Users, BarChart } from "lucide-react";

const Index = () => {
  return (
    <div className="bg-[#f5f5f0] min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <svg className="w-8 h-8 text-[#ff6b35]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-2 text-2xl font-bold text-[#333333]">VELOXFORCE</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-[#333333] hover:text-[#ff6b35]">Services</a>
            <a href="#about" className="text-[#333333] hover:text-[#ff6b35]">About Us</a>
            <a href="#testimonials" className="text-[#333333] hover:text-[#ff6b35]">Testimonials</a>
          </nav>
          <Button className="bg-[#ff6b35] text-white hover:bg-[#e65a2a]">Book a Demo</Button>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#333333] mb-4">
            Build Business Foundations with<br />
            <span className="text-[#ff6b35]">Next-Gen Automated Systems</span>
          </h1>
          <p className="text-[#666666] max-w-3xl mx-auto mb-8 text-lg">
            Scale your company with ease using our end-to-end administrative automation. 
            Filter leads intelligently and enhance customer service with AI-powered responses.
          </p>
          <Button className="bg-[#ff6b35] text-white hover:bg-[#e65a2a] text-lg px-8 py-4">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </section>

        <section id="services" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#333333] mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-12 h-12 text-[#ff6b35] mb-4" />,
                  title: "Automated Administration",
                  description: "Streamline your business processes from start to finish."
                },
                {
                  icon: <Users className="w-12 h-12 text-[#ff6b35] mb-4" />,
                  title: "Intelligent Lead Filtering",
                  description: "Focus on high-quality leads with our smart filtering system."
                },
                {
                  icon: <BarChart className="w-12 h-12 text-[#ff6b35] mb-4" />,
                  title: "AI-Powered Customer Service",
                  description: "Provide instant, accurate responses with our AI solution."
                }
              ].map((service, index) => (
                <div key={index} className="bg-[#f9f9f4] p-6 rounded-lg text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-[#666666]">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="/placeholder.svg" alt="About VELOXFORCE" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-4xl font-bold text-[#333333] mb-6">About VELOXFORCE</h2>
                <p className="text-[#666666] mb-6">
                  At VELOXFORCE, we're passionate about empowering businesses with cutting-edge automation solutions. 
                  Our team of experts combines deep industry knowledge with advanced technology to create systems 
                  that drive efficiency, growth, and success.
                </p>
                <ul className="space-y-2">
                  {["Innovative Solutions", "Customized Approach", "Proven Results"].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#ff6b35] mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-[#ff6b35] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "VELOXFORCE transformed our business operations. We've seen a 40% increase in efficiency since implementing their automated systems.",
                  author: "Jane Doe, CEO of TechCorp"
                },
                {
                  quote: "The lead filtering system is a game-changer. Our sales team is now focusing on high-quality leads, resulting in a significant boost in conversions.",
                  author: "John Smith, Sales Director at GrowthMax"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white text-[#333333] p-6 rounded-lg shadow-lg">
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-[#333333] mb-6">Ready to Revolutionize Your Business?</h2>
            <p className="text-[#666666] mb-8 max-w-2xl mx-auto">
              Take the first step towards a more efficient, scalable, and successful business. 
              Book a demo today and see how VELOXFORCE can transform your operations.
            </p>
            <Button className="bg-[#ff6b35] text-white hover:bg-[#e65a2a] text-lg px-8 py-4">
              Book Your Free Demo
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-[#333333] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold">VELOXFORCE</span>
              <p className="mt-2">Empowering businesses with next-gen automation</p>
            </div>
            <nav className="flex space-x-6">
              <a href="#services" className="hover:text-[#ff6b35]">Services</a>
              <a href="#about" className="hover:text-[#ff6b35]">About Us</a>
              <a href="#testimonials" className="hover:text-[#ff6b35]">Testimonials</a>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm">
            © 2024 VELOXFORCE. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
