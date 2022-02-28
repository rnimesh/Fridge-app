import * as api from '../api'

export const getItems =()=>async (dispatch)=>{
    try {
        const {data}= await api.getFridgeItems();         
        dispatch({type:'FETCH_ALL',payload:data});
    } catch (error) {
        console.log(error)
    }
}

export const addItems =(Item)=>async (dispatch)=>{
    try {
        const {data}= await api.addFridgeItems(Item);   
        dispatch({type:'CREATE',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const updateItems =(id,Item)=>async (dispatch)=>{
    try {
        const {data}= await api.updateItem(id,Item);   
        dispatch({type:'UPDATE',payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteItems =(id)=>async (dispatch)=>{
    try {
        await api.deleteItem(id);   
        dispatch({type:'DELETE',payload:id})
    } catch (error) {
        console.log(error)
    }
}