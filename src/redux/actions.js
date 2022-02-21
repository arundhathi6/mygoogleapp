import { SEARCH_DATA,GET_DATA } from "./actionTypes";

export const searchData = (payload)=>{
return {
    type:SEARCH_DATA,
    payload,
}
}

export const getData = (payload)=>{
    return {
        type:GET_DATA,
        payload,
    }
    }