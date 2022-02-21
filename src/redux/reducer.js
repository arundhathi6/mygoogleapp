import { SEARCH_DATA,GET_DATA } from "./actionTypes";

const init = {
    engine:{
        data:[]
    }
}

export const searchreducer = (store=init,{type,payload})=>{
    switch(type){
        case SEARCH_DATA:
        return {...store, engine:{...store.engine,data:payload}}

        case GET_DATA:
            return {...store, engine:{...store.engine,data:payload}}

         default:
            return {...store}   

    }
   
      

}