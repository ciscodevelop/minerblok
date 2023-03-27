import { useEffect, useState } from "react";
import { getCards } from "../../api/cardApi";
import "./buyCard.scss";
import getRandomCard from "../../utils/randomCardBuy/randomCard";
import Button from "../../componets/button/Button";

const BuyCard = () => {
  const [cards, setCards] = useState<any[]>([]); // Stato che tiene traccia di tutte le carte
  const [filteredCards, setFilteredCards] = useState<any[]>([]); // Stato che tiene traccia delle carte filtrate
  const [selectedCard, setSelectedCard] = useState<any>(null); // Stato che tiene traccia della carta selezionata
  const [isLoading, setIsLoading] = useState<boolean>(false); // Stato che tiene traccia se l'app sta caricando
  const [countdown, setCountdown] = useState<number>(10); // Stato che tiene traccia del countdown del timer

  useEffect(() => {
    // Effetto che viene eseguito all'avvio dell'applicazione
    getCards().then((res) => {
      // Ottiene tutte le carte
      setCards(res); // Imposta lo stato delle carte
    });
  }, []);

  async function randomCard() {
    setIsLoading(true); // Imposta lo stato di isLoading a true
    setFilteredCards([]); // Imposta lo stato di filteredCards a un array vuoto
    setSelectedCard(null); // Imposta lo stato di selectedCard a null
    setCountdown(10); // Imposta lo stato di countdown a 10 secondi

    setTimeout(() => {
      // Imposta un timeout di 10 secondi
      const randomRarity = getRandomCard(); // Ottiene la rarità casuale della carta
      setFilteredCards(cards.filter((card) => card.rarity === randomRarity)); // Filtra le carte per rarità

      if (filteredCards.length > 0) {
        // Se ci sono carte filtrate
        const randomIndex = Math.floor(Math.random() * filteredCards.length); // Ottiene un indice casuale
        setSelectedCard(filteredCards[randomIndex]); // Imposta la carta selezionata
      } else {
        // Altrimenti
        setSelectedCard(null); // Imposta la carta selezionata a null
      }
      setIsLoading(false); // Imposta lo stato di isLoading a false
      console.log("timer"); // Stampa un messaggio di log
    }, 10000);
  }

  useEffect(() => {
    let timer: any = null; // Inizializza il timer a null
    if (isLoading) {
      // Se isLoading è true
      timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1); // Decrementa il countdown
      }, 1000);
    } else {
      // Altrimenti
      clearInterval(timer); // Resetta il timer
    }
    return () => clearInterval(timer); // Resetta il timer quando il componente viene smontato
  }, [isLoading]);
  return (
    <div className="buycard">
      <Button title="BUY" onClick={randomCard} disabled={isLoading} />
      {isLoading ? (
        <h2>Loading... {countdown}</h2>
      ) : selectedCard ? (
        <div>
          {selectedCard.name} {selectedCard.rarity} {selectedCard.mh} <img src={selectedCard.img} alt="" />
          {filteredCards
            .sort((a, b) => a.mh - b.mh)
            .map(({ _id, name, mh, status, img, rarity }) => (
              <div className="cards-filtered" key={_id}>
                <h1>ID: {_id}</h1>
                <h1>Rarity: {rarity}</h1>
                <h1>Name: {name}</h1>
                <h1>Mh: {mh}</h1>
                <h1>Status: {status}</h1>
                <img src={img} alt="" />
              </div>
            ))}
        </div>
      ) : (
        <h1>Buy a Card</h1>
      )}
    </div>
  );
};

export default BuyCard;
