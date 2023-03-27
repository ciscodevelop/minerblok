 const GetColorRarity = (rarity: any) => {
    switch (rarity) {
      case "common":
        return "#4D9D49";
      case "uncommon":
        return "#497D9D";
      case "epic":
        return "#DA2476";
      case "legendary":
        return "#CDCA04";
      default:
        return "lightblue";
    }
};
  export default GetColorRarity
 