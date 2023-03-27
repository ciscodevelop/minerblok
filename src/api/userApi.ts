import axios from "axios";

const istanceApi = axios.create({
  baseURL: "http://localhost:8800/api/",
});
//GET CARDS FROM A USER ID
export const getCardsUser = async (id:any) => {
  const res = await istanceApi.get(
    "users/cards/640cb33a924cb6f2fa62d10b"
    );   
    return res.data
};

//UPDATE STATE OF A CARD
export const updateState = async (id: any) => {
  console.log('cardid',id);
  

  const response = await istanceApi.patch('users/cards/640cb33a924cb6f2fa62d10b/'+id )
  return response.data
 }





