import axios from "axios";

const baseUrl='https://thefridge-api.karapincha.io/fridge'

export const getFridgeItems=()=>axios.get(baseUrl)
export const addFridgeItems=(newItem)=>axios.post(baseUrl,newItem)
export const updateItem=(id,updateItem)=>axios.put(`${baseUrl}/${id}`,updateItem)
export const deleteItem=(id)=>axios.delete(`${baseUrl}/${id}`)