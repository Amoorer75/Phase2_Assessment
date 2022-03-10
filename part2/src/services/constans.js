import axios from "axios"

export async function ConstantsDogs(random){
    const Result = await axios.get(`https://api.thedogapi.com/v1/breeds/?limit=10&page=${random}`)
    
    .then(({ data }) => {
        return data;
      });
      return Result;
    
}
export async function ConstantsCats(random){
    const Result = await axios.get(`https://api.thecatapi.com/v1/breeds/?limit=10&page=${random}`)
   
    .then(({ data }) => {
        return data;
      });
      return Result;
    
}