import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-transparent py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-black">LOGO</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-black hover:text-gray-600">Link 1</a>
            <a href="#" className="text-black hover:text-gray-600">Link 2</a>
            <a href="#" className="text-black hover:text-gray-600">Link 3</a>
          </nav>
          <Button className="bg-black text-white hover:bg-gray-800">CTA Button</Button>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
                Hero Title
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                Hero description goes here. Customize this text to match your desired content.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4">
                Primary CTA
              </Button>
            </div>
            <div className="md:w-1/2">
              <img src="/placeholder.svg" alt="Hero Image" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
