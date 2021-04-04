import { Progress } from "antd";
import ReactIcon from "../common/icons/react";
import JavascriptIcon from "../common/icons/javascript";
import DockerIcon from "../common/icons/docker";
import VueIcon from "../common/icons/vue";
import HtmlIcon from "../common/icons/html";
import PythonIcon from "../common/icons/python";
import CssIcon from "../common/icons/css";

const Skills = () => (
  <div className="experience mt-20">
    <div className="container">
      <div className="flex gap-x-10 justify-center">
        {[
          { name: "Javascript", icon: <JavascriptIcon /> },
          { name: "Reactjs", icon: <ReactIcon /> },
          { name: "Html", icon: <HtmlIcon /> },
          { name: "Docker", icon: <DockerIcon /> },
          { name: "Vuejs", icon: <VueIcon /> },
          { name: "Python", icon: <PythonIcon /> },
          { name: "CSS", icon: <CssIcon /> },
        ].map((skill) => (
          <Progress
            percent={100}
            status="active"
            type="circle"
            format={() => skill.icon}
            width={120}
            showInfo
          />
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
