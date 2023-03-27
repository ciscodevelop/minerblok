import "./currentBlock.scss";
import CardsActive from "../cardsActive/CardsActive";

const CurrentBlock = ({ data }: any) => {  
  return (
    <div>
      <h3>Current Block #23443</h3>
      <div className="advancement-block">
        <h5>Current Block Size</h5>
        <div className="block-details">
          <span>1.06k</span>
          <span>MBLOK</span>
          <div className="advancement-progress">
            <div className="progress">
              <img
                src="https://user-images.githubusercontent.com/8554143/139522723-82f05dfc-a38e-42fa-824c-0319f3087a16.gif"
                alt=""
              />
            </div>
            <div className="estimated-mblock">
              <h5>Estimated Profit From This Block</h5>
              <span className="quantity-mblock">1.38</span>
              <span>MBLOCK</span>
            </div>
          </div>
          <div className="autominer-isactive">
            <h5>        
              (Auto-Miner is <span className="green">ON</span> {"<"}
              <span className="red">-65%</span> on Block Reward)
            </h5>
            <h5> (Boost is OF {">"} 0% on Block Reward)</h5>
          </div>
        </div>
        <div className="current-hashpower">
          <h5>
            My Current Hash Power:<span> 392.58 </span> Mh/s
          </h5>
        </div>
        <CardsActive data={data} />
      </div>
    </div>
  );
};

export default CurrentBlock;
