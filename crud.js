import { backendUrl } from "./config";

export const getData = async () => {
  let response = await fetch(backendUrl);
  let data = await response.json();
  console.log(data);
  return data;
};


export const createPost = async(data)=>{
    let response = await fetch(backendUrl, {
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
            'Content-Type' : 'application/json'
        }
    });
    const newData = await response.json()
    console.log(newData)
    return newData
}
