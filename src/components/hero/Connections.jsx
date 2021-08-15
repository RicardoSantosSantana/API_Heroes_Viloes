
export default function Connections(props) {

 const  data = props.data
 const listConnections = () =>{
   return(
        <>   
        <div className='title'>Connections</div>
        <p className="justificar">          
          <strong>Group Affiliation: </strong>{data["group-affiliation"]}<br/> 
          <strong>Relatives: </strong> {data.relatives}
        </p>       
        </>
    )
 }
 
    return listConnections()
 
} 