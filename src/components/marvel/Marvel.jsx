import md5 from "md5";
import { useEffect, useState } from "react";


export default function Marvel(){
 
    const PUBLIC_KEY = process.env.PUBLIC_KEY_MARVEL
    const PRIVATE_KEY = process.env.PRIVATE_KEY_MARVEL
    const TIMESTAMP = new Date(2013, 11, 17).getTime();
    const HASH = md5(TIMESTAMP+PRIVATE_KEY+PUBLIC_KEY);
    const AUTHORIZE = `?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`
    const URL = `http://gateway.marvel.com/v1/public/comics`
    
    const [numero,setNumero] = useState(0)
    const [aguarde,setAguarde] = useState(false)
    const [dados,setDados] = useState({})

    useEffect(()=>{
        getDados()
    },[numero])
    async function getDados(){
        setAguarde(true)
        const retorno = await fetch(`${URL}${AUTHORIZE}`)
           .then(response => response.json())
           .then(json=>json.data.results)           
           setDados(retorno)
           console.log(retorno)
              setAguarde(false)
    }
    function mudarEstado(e){
        let num = numero;
        num++;
        setNumero( num  )
    }

    return (
        <div>
            
            <button onClick={mudarEstado}>Número:{numero} </button>
            { aguarde?<h3>Processando</h3>:'' }
            <div>
                <hr></hr>
              
            </div>
    </div>
    
    )
} 