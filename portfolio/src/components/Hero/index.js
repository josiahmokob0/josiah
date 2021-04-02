import HeroContent from "./HeroContent";
import Window from "../window";
import ViewMore from "../Hero/ViewMore";
import "./index.css";

const Hero = () => (
  <div className="hero">
    <div className="container">
      <div className="flex gap-x-1 justify-between">
        <HeroContent />
        <Window />
      </div>
      <ViewMore />
    </div>
  </div>
);

export default Hero;
