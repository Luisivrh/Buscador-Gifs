import React from "react";
import './Gif.css'

export default function Gif ({title, url}){
    return (<div className="Gif">
                <img src={url}></img> 
                <h1>{title}</h1>
                <a id="link" href={url} target={"_blank"}>Origen</a>
            </div>)
}
