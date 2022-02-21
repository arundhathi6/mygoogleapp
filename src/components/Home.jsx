import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {getData} from "../redux/actions"
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";


export const Home = ()=>{
    const {data} = useSelector((store)=>{
        return store.engine;
    })
    const [text,setText] = useState();
    const dispatch = useDispatch()

    const getTo= ()=>{
        axios.get("https://fast-reef-22226.herokuapp.com/data")
        .then(({data})=>{
            dispatch(getData(data))
            console.log(data)
        })
        .catch((Erroccured)=>{
            console.log("Erroccured",Erroccured)
        })
       
    }

    return (
        <div>
            <img src="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png"/>
<input className="search-box" type="text" placeholder="Search Google or type a URL" onChange={(e)=>{
    setText(e.target.value)}} 
    />
<button onClick={()=>{
   
    getTo()
}}>search</button>
<div>
    {data.map((e)=>{
     return <div key = {e.id}>
        {e.title==text?<p><Link to={`/search/${e.id}`}>{e.title}</Link></p>:""}
{/* <p><Link to={`/search/${e.id}`}>{e.title}</Link></p> */}
      </div>
         }  
        
    )}
</div>
 </div>
    )

}