import { Button } from "antd";

const ViewMore = ({ icon, styleClass, text, to }) => (
  <div className={`flex justify-center ${styleClass}`}>
    <Button type="primary" icon={icon} className="flex items-center" href={to}>
      {text}
    </Button>
  </div>
);

export default ViewMore;
