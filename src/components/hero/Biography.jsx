import TableHero from "./TableHero";

export default function Biography(props) {

 const  data = props.data
 const listBiography = (
        <tbody>
            <tr>
                <th>Full Name</th>
                <td>{data["full-name"]}</td>
            </tr>
            <tr>
                <th>Alter Egos</th>
                <td>{data["alter-egos"]}</td>        
            </tr>
            <tr>
                <th>Aliases</th>
                <td>{data.aliases.map(el=>`${el}, `)}</td>        
            </tr> 
            <tr>
                <th>Place of Birth</th>
                <td>{data["place-of-birth"]}</td>        
            </tr>
            <tr>
                <th>First Appearance</th>
                <td>{data["first-appearance"]}</td>        
            </tr> 
            <tr>
                <th>Publisher</th>
                <td>{data.publisher}</td>        
            </tr> 
            <tr>
                <th>Alignment</th>
                <td>{data.alignment}</td>        
            </tr>      
        </tbody>      
        
    )

 
    return <TableHero title="Biography" fields={listBiography}/>
 
 
} 