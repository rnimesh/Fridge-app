import {FETCH_ALL,CREATE,UPDATE,DELETE} from '../actionTypes/actionTypes'

export default (listItems=[],action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...listItems,action.payload];
        case UPDATE:
            return listItems.map((item)=>item._id===action.payload._id?action.payload:item);
        case DELETE:
            return listItems.filter((item)=>item._id!==action.payload)
        default:
            return listItems;
    }
}