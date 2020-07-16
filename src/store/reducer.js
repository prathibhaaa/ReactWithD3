import {ADD, REMOVE, ADDPRICE} from "./actions";
import Items from '../assets/Items.json';

function reducer(state = initialStore, action) {
    if(action.type === ADD){
        let tempItem =  state.items.map(item=>{
            if(item.id === action.id){
               item = {...item, selected: true}
            }
            return item
       })
        return  {...state, items: tempItem, total:state.total + 1}
    }
    if(action.type === REMOVE){
        let tempItem =  state.items.map(item=>{
             if(item.id === action.id){
                item = {...item, selected: false}
             }
             return item
        })
        return  {...state, items: tempItem, total:state.total - 1}
    }
    if(action.type === ADDPRICE) {
        let amount = state.items.reduce(
            (amount,item)=>{
                const {value} = item
                if(item.selected){
                    amount += value
                }
                return amount},0)
        return {...state,  amount}    
    }
    return state
}

const initialStore  = {
    amount: 0,
    total: 2,
    items: Items
}

export default reducer;