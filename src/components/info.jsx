import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Info = ()=>{
    const navigate = useNavigate()
    const {searchid} = useParams();
    const [search,setsearch] = useState({})

    useEffect(()=>{
viewdata()
    },[])

    const viewdata=()=>{
        axios.get(`https://fast-reef-22226.herokuapp.com/data/${searchid}`)
        .then(({data})=>{
            setsearch(data);
        })
        .catch((er)=>{
            console.log("er",er)
        })}

    return (
        <div>
            <h1>Hello world</h1>
            <input type="text" placeholder="serach here"/>
            <button onClick={()=>{
                navigate(-1)
            }}>Go back</button>
            <h3>{search.title}</h3>
            <h3>Description : -{search.description}</h3>
            <h3>author :- {search.author}</h3>
            <h3><a href="">{search.url}</a></h3>

        </div>
    )
}