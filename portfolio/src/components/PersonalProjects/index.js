import { Card, Button } from "antd";
import { Html5Outlined, EyeOutlined } from "@ant-design/icons";
import ViewMore from "../Hero/ViewMore";

const PersonalProjects = () => (
  <div className="experience mt-20">
    <div className="container">
      <div className="flex gap-x-10 justify-center ">
        <Card
          hoverable
          style={{ width: 300 }}
          actions={[
            <Button
              type="primary"
              icon={<EyeOutlined />}
              className="mx-auto flex items-center"
            >
              View Project
            </Button>,
          ]}
          cover={
            <img
              alt="example"
              src="https://josiahmokob0.github.io/me/images/project3.png"
            />
          }
        >
          <Card.Meta
            title="Radio"
            description={
              <p className="mb-11">
                A platform that enables users to stream radio stations across
                the world.
              </p>
            }
          />
        </Card>
        <Card
          hoverable
          style={{ width: 300 }}
          actions={[
            <Button
              type="primary"
              icon={<EyeOutlined />}
              className="mx-auto flex items-center"
            >
              View Project
            </Button>,
          ]}
          cover={
            <img
              alt="example"
              src="https://josiahmokob0.github.io/me/images/project4.png"
            />
          }
        >
          <Card.Meta
            title="Questionista"
            description={
              <p className="mb-0">
                This application enables users to test their knowledge on
                various topics by answering questions with different formats.
              </p>
            }
          />
        </Card>
      </div>
      <ViewMore
        styleClass="mt-14"
        icon={<Html5Outlined />}
        text="Skills"
        to="/skills"
      />
    </div>
  </div>
);

export default PersonalProjects;
