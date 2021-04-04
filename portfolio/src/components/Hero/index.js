import { CodeOutlined } from "@ant-design/icons";
import HeroContent from "./HeroContent";
import Window from "../window";
import ViewMore from "../Hero/ViewMore";

const Hero = () => (
  <div className="hero mt-20">
    <div className="container">
      <div className="flex gap-x-1 justify-between">
        <HeroContent />
        <Window />
      </div>
      <ViewMore
        icon={<CodeOutlined />}
        text="Work Experience"
        to="/experience"
      />
    </div>
  </div>
);

export default Hero;
