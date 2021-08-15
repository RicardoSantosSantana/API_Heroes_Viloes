import Appearance from './Appearance';
import Work from './Work';
import Powerstats from './Powerstats';
import Connections from './Connections';
import Biography from './Biography';

export default function Content(props) {
    const data = props.data ?? []
    return (
        data.map((el,index)=>{            
        return(
        <section id="banner" key={`contentTemplate_${el.name}_${index}`}>
            <div className="content">
                <header><h1>{el.name}</h1></header>
                <Connections data={el.connections}></Connections> 
                <Biography data={el.biography}></Biography>  
                <Powerstats data={el.powerstats}></Powerstats>                        
                <Work data={el.work}></Work>                         
                <Appearance data={el.appearance} ></Appearance>
               
            </div>
            <span className="image">
                <img src={`${el.image.url}`} onError={(e)=>{e.target.onerror = null; e.target.src="./noimage.jpg"}}/>
            </span>
        </section>)
        })
    )
} 