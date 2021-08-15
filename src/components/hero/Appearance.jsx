import TableHero from "./TableHero";

export default function Appearance(props) {

    const  data = props.data
    const listP = ( 
            <p>
                <strong>Gender: </strong> {data.gender}<br />
                <strong>Race: </strong> {data.race}<br />  
                <strong>Weight: </strong> {data.weight.join(' ~ ')}<br/>                
                <strong>Eye Color: </strong> {data["eye-color"]}<br/>        
                <strong>Hair Color: </strong> {data["hair-color"]}<br/>                    
            </p>   
        )
    
    const listTable = (
            <tbody>
                <tr>
                    <th>Gender</th>
                    <td>{data.gender}</td>        
                </tr>
                <tr>
                    <th>Race</th>
                    <td>{data.race}</td>        
                </tr> 
                <tr>
                    <th>Weight</th>
                    <td>{data.weight.join(' ~ ')}</td>        
                </tr>               
                <tr>
                    <th>Hair Color</th>
                    <td>{data["hair-color"]}</td>        
                </tr>  
            </tbody>)
     
    return (
        <>
        <div className='title'>Appearance</div>
            {props.format==="p" ? listP: <TableHero fields={listTable}/> }
        </>
     )
   
} 