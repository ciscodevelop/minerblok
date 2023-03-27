import OwnedCards from "../../componets/ownedCards/OwnedCards";
import Widget from "../../componets/widget/Widget";
import "./home.scss";

const Home = () => {
  function handleClick() {
    console.log("in home");
  }
  return (
    <div className="home">
      <div className="widget-container">
        <Widget
          imgSrc="/assets/icons/m.png"
          textTitle={"32.00 " + " Mblock"}
          buttons={[
            {
              styleIcon: { color: "white", width: "40px",  },
              iconName: "PresentToAllOutlined",
              title: "WithDraw",
              onClick: handleClick,
              styleBtn: {padding:10, background: "green",borderRadius: 10 },
            },
            {
              styleIcon: { color: "white", width: "40px", },
              iconName: "SavingsOutlined",
              title: "Buy",
              onClick: handleClick,
              styleBtn: {padding:10, background: "purple",borderRadius: 10 },
            },
          ]}
        />
        <Widget
          imgSrc="/assets/icons/time.png"
          textTitle="18.00"
          buttons={[
            {
              
              styleIcon: { color: "white", width: "40px",  },
              iconName: "HdrAutoOutlined",
              title: "Auto Miner",
              onClick: handleClick,
              styleBtn: {padding:10, background: "purple",borderRadius: 10 },
            }
          ]}
        />
        <Widget
          imgSrc="/assets/icons/nft.png"
          textTitle="2.00"
          buttons={[
            {
              iconName: "StorefrontOutlined",
              title: "Buy Cards",
              onClick: handleClick,
              styleBtn: {
               padding:10, background: "green",
                color: "black",
                borderRadius: 10,
              },
              styleIcon: { color: "white" },
            }             
          ]}
        />
      </div>
      <OwnedCards />
    </div>
  );
};

export default Home;
