import { Button } from "antd";
import { DownCircleOutlined } from "@ant-design/icons";

const ViewMore = () => (
  <div className="mouse flex justify-center">
    <Button
      type="primary"
      icon={<DownCircleOutlined />}
      className="flex items-center"
    >
      Work Experience
    </Button>
  </div>
);

export default ViewMore;
