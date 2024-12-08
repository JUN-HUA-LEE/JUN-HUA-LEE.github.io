import { cn } from "@/lib/utils";
import Particles from "./ui/Particles";
import { AnimatedGradientText } from "./ui/AnimatedGradient";

const Hero = () => {
  return (
    <div className="w-screen h-screen relative bg-black flex flex-col items-center justify-start overflow-hidden">
      <Particles className="absolute inset-0 z-10" /> 
      <div className="relative z-20 flex flex-col items-center mt-32">
        <AnimatedGradientText>
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Open to New Opportunities
          </span>
        </AnimatedGradientText>
        <h1 className="md:text-4xl text-2xl lg:text-5xl font-bold text-center text-white mt-4">
          Exploring and Learning, Bit By Bit
        </h1>
      </div>
    </div>
  );
}

export default Hero;
