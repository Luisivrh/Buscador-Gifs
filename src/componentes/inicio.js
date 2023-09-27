import React, {useEffect, useState} from "react"
import Gif from "./Gifs"
import useGifs from "../hooks/useGifs";
import Loading from "./loading";


export default function Inicio (){
    const keyword= '';
    const typeS = 'trending'
    const {loading, gifs} = useGifs({keyword},{typeS});
if(loading) return <Loading/>
    return gifs.map(({id, title, url}) => 
        
        <Gif 
        key={id} // Se le establece un id a cada image para que se diferencie de las demas 
        title={title} 
        url={url}/>
    
      )
}