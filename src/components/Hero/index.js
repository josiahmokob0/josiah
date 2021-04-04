import HeroContent from "./HeroContent";
import Window from "../window";

const Hero = () => (
  <div className="hero mt-20">
    <div className="container">
      <div className="flex gap-x-1 justify-between">
        <HeroContent />
        <Window />
      </div>
    </div>
  </div>
);

export default Hero;