
import TableHero from "./TableHero";

export default function Work(props) {

    const  data = props.data
    const listWork = ( 
        <tbody>
            <tr>
                <th>Ocuppation</th>
                <td>{data.occupation}</td>        
            </tr>
            <tr>
                <th>Base</th>
                <td>{data.base}</td>        
            </tr>        
        </tbody>  
    )
 return (
     <>
        <div className='title'>Work</div>
        <TableHero fields={listWork}/>
    </>
  )  
} 