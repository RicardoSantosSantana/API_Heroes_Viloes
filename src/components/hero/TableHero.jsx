import { Table } from "react-bootstrap"

export default function TableHero(props){

    return (
        <div className="fullContainer">        
                <Table responsive hover size="sm">
                    {props.fields}
                </Table>
        </div> 
    )

}
