 import GetColorRarity from "../../features/getColorRarity/GetColorRarity";
import "./cardsActive.scss";

const CardsActive = ({ data }: any) => {  
  return (
    <div className="cardsActive">
      {data
        .filter((card:any) => card.isActive === true)
        .map((card:any) => (
          <div key={card.id} className="cards-active">
            <div className="container-card">
              <div
                className="img-container-card"
                style={{ backgroundColor: GetColorRarity(card.rarity) }}
              >
                <img src={card.img} alt="" />
              </div>
              <h6>active</h6>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CardsActive;
