import { ExitToAppOutlined, FavoriteBorderOutlined, MoodBadOutlined, StarHalfOutlined } from "@mui/icons-material";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="wrapper-left">
          <div className="left">
            <h1>Minerblock</h1>
          </div>
        </div>
        <div className="wrapper-right">
          <div className="right">
            <FavoriteBorderOutlined className="icon"/>
            <MoodBadOutlined className="icon" />
            <StarHalfOutlined className="icon"/>
            <ExitToAppOutlined className="icon"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
