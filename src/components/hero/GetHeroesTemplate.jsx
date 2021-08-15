import { useEffect, useState } from "react";
import Content from "./ContentTemplate";
import Loading from "./Loading";


export default function GetHeroesTemplate(props){

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
            .then(results=>setHeroContent(<Content key="content_1" data={results}></Content>))         
    }, [props.heroName])         
    return( <div className="contentglobal">{heroConteudo}</div> )
}
      