import { useEffect, useState } from "react";
import CurrentBlock from "../currentBlock/CurrentBlock";
import DataGrid from "../dataGridCards/DataGridCards";
import "./ownedCards.scss";
import {  useQuery, useQueryClient } from "@tanstack/react-query";
import { getCardsUser } from "../../api/userApi";
 

const OwnedCards = () => {
  const [cards, setCards] = useState<any>([]);
  const queryCliente=useQueryClient({})
  const query: any = useQuery({
    queryKey: ["queryGetCardsUser"],
    queryFn: getCardsUser,
  });
 
  setInterval(() => {
    queryCliente.invalidateQueries(['queryGetCardsUser'])
  },60000)

  useEffect(() => {
    const newCardsArray =
      query.data &&
      query.data.cards.map((c: any) => {
        return { ...c.cardid, id: c._id, ...c };
      });
    query.data && newCardsArray.forEach((c: any) => delete c.cardid);
    query.data && setCards(newCardsArray);
  }, [query.data]);

  return (
    <div className="owned-cards">
      <div className="left">
        <CurrentBlock data={cards} />
      </div>
      <div className="right">
        <DataGrid data={cards} />
      </div>
    </div>
  );
};
export default OwnedCards;
