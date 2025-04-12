import { useState } from "react";
import { Input } from "./input";
import { Search } from "lucide-react";
import { Button } from "./button";
import Pizza from '@/assets/pizza.jpg'
const Hero = () => {
  const [searchtext, setSearchtext] = useState<string>("");

  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-10 gap-10">
      {/* Left Text Section */}
      <div className="flex flex-col gap-8 md:w-1/2">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 leading-tight">
            Order Food Anytime <br /> & Anywhere
          </h1>
          <p className="text-gray-600 text-lg">
            Hey! Our <span className="font-semibold">delicious food</span> is waiting for you — we’re always near you!
          </p>
        </div>

        {/* Search Input + Button */}
        <div className="flex items-center gap-2 relative">
          <Search className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <Input
            type="text"
            value={searchtext}
            onChange={(e) => setSearchtext(e.target.value)}
            className="pl-10 pr-4 py-2 w-full shadow-md"
            placeholder="Search for food..."
          />
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2">
            Search
          </Button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={Pizza}
          alt="Delicious Pizza"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
