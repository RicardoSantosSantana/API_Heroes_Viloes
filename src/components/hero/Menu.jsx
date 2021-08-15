export function MenuLetras(props){  
    return(
         <header id="header">                     
            <div className='logoMenu'>   
            <div>{props.textoDigitado?`Pesquisando: ${props.textoDigitado}`:'' }</div>           
                <ul>{props.listaLetras}</ul>                 
            </div>
        </header>
    )
} 
export function MenuNomesHeroes(props){
    return (
        <nav id="menu" >      
            <header className="major">
                <h2>Menu {props.letter}</h2>
            </header>
            <ul>{props.listNames}</ul>
        </nav>
    )
}