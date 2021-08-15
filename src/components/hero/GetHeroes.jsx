import { useEffect, useState } from "react";
import Content from "./Content";
import Loading from "./Loading";


export default function GetHeroes(props){

    const ACCESS_TOKEN = process.env.ACCESS_TOKEN_HERO
     
    const ENDPOINT_IMAGE = `https://superheroapi.com/api.php/${ACCESS_TOKEN}/search/${props.heroName}`;

    const  [heroConteudo, setHeroContent] = useState("");
      
    useEffect(() => {        
        setHeroContent(<Loading/>)  
        return () =>   setHeroContent(<Loading/>)  
     },[props.heroName] )

    useEffect( ()=>{
        fetch(ENDPOINT_IMAGE)       
            .then(response=>response.json())
            .then(result=>result.results)
            .then(results=>setHeroContent(<Content data={results}></Content>))         
    }, [props.heroName])         
    return( <div className="contentglobal">{heroConteudo}</div> )
}
      