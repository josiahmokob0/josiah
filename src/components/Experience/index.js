import { Timeline } from 'antd';
import { UserOutlined } from "@ant-design/icons";

const Experience = () => (
  <div className="experience mt-20">
    <div className="container">
      <div className="flex gap-x-1 justify-center">
        <Timeline mode="left" className="text-white w-full" reverse>
          <Timeline.Item label="July 2018 – Feb 2020">
            <p className="text-3xl m-0">Stem Disintermedia</p>
            <p className="text-xs">FullStack Software Developer</p>
          </Timeline.Item>
          <Timeline.Item label="July 2017 – April 2020">
            <p className="text-3xl m-0">Andela Kenya</p>
            <p className="text-xs">Software Developer</p>
          </Timeline.Item>
          <Timeline.Item label="June 2020–April 2020" dot={<UserOutlined />}>
            <p className="text-3xl m-0">Plecco</p>
            <p className="text-xs">
              Frontend Software Developer -- Client Project
            </p>
          </Timeline.Item>
          <Timeline.Item label="November 2020" dot={<UserOutlined />}>
            <p className="text-3xl m-0">Ourgivingboard</p>
            <p className="text-xs">
              Frontend Software Developer -- Client Project
            </p>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  </div>
);

export default Experience;
