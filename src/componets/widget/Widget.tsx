import { SavingsOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import "./widget.scss";
import Button from "../button/Button";

const Widget = ({ imgSrc, textTitle = "1.38", buttons = [] }: any) => {
  return (
    <div className="widget">
      <div className="wrapper">
        <div className="detail">
          <img src={imgSrc} alt="" />
          <span>{textTitle}</span>
        </div>
        <div className="buttons">
          {buttons.map((button: any, index: any) => (
            <Button key={index}
              iconName={button.iconName}
              title={button.title}
              onClick={button.onClick}
              styleBtn={button.styleBtn}
              styleIcon={button.styleIcon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Widget;
