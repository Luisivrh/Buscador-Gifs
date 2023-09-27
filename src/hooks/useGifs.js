import { useState, useEffect } from "react";
import getGifts from "../componentes/ExtractorGifs";

export default function useGifs({keyword},{typeS}) { // Esta funcion recibira un valor, keyword
const [loading, setLoading] = useState(false);
const [gifs, setGifs] = useState([])
  useEffect(function(){
    setLoading(true)
    getGifts({keyword},{typeS}) // la keyword es una dependecia del efecto
    .then(gifs=> {
        setGifs(gifs)
        setLoading(false)  
    })
  },  [keyword]) //Aqui se condiciona que cada vez que se cambie la keyword se volvera a ejecutar el efecto
  return {loading, gifs}
}