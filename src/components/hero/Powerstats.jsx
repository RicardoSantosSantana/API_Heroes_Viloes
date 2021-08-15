
import TableHero from "./TableHero";
 
export default function Powerstats(props) {

 const  data = props.data
 const listPowerstats = () =>{
   return(
        
        <tbody>
            <tr>
                <th>Intelligence</th>
                <td>{data.intelligence}</td>        
            </tr>
            <tr>
                <th>Strength</th>
                <td>{data.strength}</td>        
            </tr> 
            <tr>
                <th>Speed</th>
                <td>{data.speed}</td>        
            </tr> 
            <tr>
                <th>Durability</th>
                <td>{data.durability}</td>        
            </tr>
            <tr>
                <th>Power</th>
                <td>{data.power}</td>        
            </tr> 
            <tr>
                <th>Combat</th>
                <td>{data.combat}</td>        
            </tr> 
        </tbody>      
        
    )
 }
 
 return (   
        <>
            <div className='title'>Powerstats</div>         
            <TableHero title="Powerstats" fields={listPowerstats()}/>
        </>
    )
 
} 