import { Button } from "antd";
import { MailOutlined, DownloadOutlined } from "@ant-design/icons";

const HeroContent = () => (
  <div className="prose-lg self-center">
    <h1 className="text-green-400 text-3xl">Hi,</h1>
    <h1 className="text-yellow-300 text-4xl">My name is Josiah.</h1>
    <p className="text-gray-100 text-xl max-w-2xl leading-8">
      I am a Frontend Developer from Kenya, I help companies deliver beautiful,
      intuitive online experiences through solid research thoughtful design and
      accessible code.
    </p>
    <div className="flex gap-x-3">
      <Button
        type="primary"
        icon={<MailOutlined />}
        className="flex items-center"
      >
        Contact Me
      </Button>
      <Button ghost icon={<DownloadOutlined />} className="flex items-center">
        Download Resume
      </Button>
    </div>
  </div>
);

export default HeroContent;
