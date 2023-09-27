import React, {useEffect, useState} from "react"
import Gif from "./Gifs"
import useGifs from "../hooks/useGifs";
import Loading from "./loading";


export default function ListOfGifs ({params}){
    const {keyword} = params
    const typeS = 'search'
    const {loading, gifs} = useGifs({keyword},{typeS});
if(loading) return <Loading></Loading>
    return gifs.map(({id, title, url}) => 
    
        <Gif 
        key={id} // Se le establece un id a cada image para que se diferencie de las demas 
        title={title} 
        // id={id} 
        url={url}/>
    
      )
}