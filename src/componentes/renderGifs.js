import Gif from "./Gifs"
import React from "react"

export default function myGifs (gifs) {
    return gifs.map(({id, title, url}) => 
        <Gif 
        key={id} // Se le establece un id a cada image para que se diferencie de las demas 
        title={title} 
        id={id} 
        url={url}/>)
}