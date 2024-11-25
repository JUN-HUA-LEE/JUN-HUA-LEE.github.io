import { SparklesCore } from "../ui/Sparkles";

const Hero = () => {
    return (
        <div className="w-screen h-screen relative bg-black flex flex-col items-center justify-center overflow-hidden">
            <div className="w-full h-full absolute inset-0">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background={"transparent"}
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
                Exploring and Learning, Bit By Bit
            </h1>
        </div>
    );
}
export default Hero;
