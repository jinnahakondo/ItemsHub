import Hero from "@/components/sections/Hero/Hero";
import HowItWorks from "@/components/sections/How it works/HowItWorks";
import WhyChooseUs from "@/components/sections/Why Choose Us/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-24">
      <div className="container mx-auto space-y-24 px-2">
        <Hero />
        <WhyChooseUs />
      </div>
      <div className="w-full space-y-24">
        <HowItWorks />
      </div>
    </div>
  );
}
