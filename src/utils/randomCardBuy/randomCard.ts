// Definisci gli elementi e i loro gradi di rarità
const elements = [
    { name: 'common', rarity: 50 },
    { name: 'uncommon', rarity: 30 },
    { name: 'epic', rarity: 5 },
    { name: 'legendary', rarity: 1 }
  ];
  
  // Calcola la somma dei gradi di rarità di tutti gli elementi
  const totRarity = elements.reduce((acc, cur) => acc + cur.rarity, 0);
  
  // Genera un numero casuale compreso tra 1 e la somma dei gradi di rarità
  function getRarityRandom() {
    return Math.floor(Math.random() * totRarity) + 1;
  }
  
  // Seleziona l'elemento corrispondente al numero casuale generato
  let choiseCard = elements[0].name; // inizializza con il tipo di elemento più comune
  function getRandomCard() {
    const raritaCasuale = getRarityRandom();
    let raritaAccumulata = 0;
    for (const element of elements) {
      raritaAccumulata += element.rarity;
      if (raritaCasuale <= raritaAccumulata) {
        choiseCard = element.name;
        break;
      }
    }
    return choiseCard;
  }
  
  // Prova la selezione casuale di elementi
  const countElements:any = {
    'common': 0,
    'uncommon': 0,
    'epic': 0,
    'legendary': 0
  };
  for (let i = 0; i < 1; i++) {
    const element = getRandomCard();
    countElements[element]++;
  }
console.log(countElements);
  
export default getRandomCard