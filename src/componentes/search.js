import React, {useState} from "react";
import { Route, Link, useLocation } from 'wouter';
import './search.css'

export default function Search() {
    let [keyword, setKeyword] = useState('')
    let [typeS, setTypeS] = useState('')
    let [path, pushLocation] = useLocation()
    

    const handleInput = (event) =>{
        setKeyword(event.target.value);
      }
  
      const handleForm = (event) => {
          event.preventDefault()
          pushLocation(`/gif/${keyword}`)
          console.log(path);
      }
return (<><h1 className='boton'><a><Link to='/'>Buscador de Gifs</Link></a></h1><form onSubmit={handleForm}>
    <div className="input-group">

        <input type="text"
            name="name"
            value={keyword}
            onChange={handleInput}
            placeholder="Ej. Gatos"
            className="input-group__input"
            id="myInput"
            required>
        </input>
    <button>Buscar</button>
    </div>
</form></>)
}