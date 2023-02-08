import { Outlet } from "react-router-dom";
import "./styled.scss";

const PContent = () => {
  return (
    <div className="pcontent">
      <Outlet />
    </div>
  );
};

export default PContent;
