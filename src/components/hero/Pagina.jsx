import { useEffect, useState } from "react";
import GetHeroesTemplate from "./GetHeroesTemplate";

import { ArrayListaNomesHeroes, procurarHeroePorNome, MenuLetrasItens    } from '../../functions/main';
import { MenuNomesHeroes, MenuLetras } from './Menu';
  
export default function Pagina(){
        
    const [letraSelecionada, setLetraSelecionada] = useState("A");
    const [nomeHeroeSelecionado, setNomeHeroeSelecionado] = useState("A-Bomb");
    const [arrayListaDeHeroes, setArrayListaDeHeroes] = useState(ArrayListaNomesHeroes(letraSelecionada));
    
    const [letraDigitada, setLetraDigitada] = useState("");
 
     
   
    useEffect(() => { },[letraSelecionada])
 
    const Letras =  MenuLetrasItens(setLetraSelecionada,setArrayListaDeHeroes)
 
    const listHeroes = arrayListaDeHeroes.map((name,index) =>{
            return <li key={`li_${name}_${index}`}><span onClick={()=>setNomeHeroeSelecionado(name)}>{name}</span></li>
    })
    
    const styleBanner = { width:'100%', maxWidth: '100%',height: 'auto' }
    return(
          <div id="wrapper">                 
                <div id="main">
                    <div className="inner">        
                        <div>
                            <img style={styleBanner} src={'./banner2.jpg'}></img>                                   
                        </div>                        
                        <MenuLetras   textoDigitado={letraDigitada}  letter={letraSelecionada} listaLetras = {Letras}/>
                        <GetHeroesTemplate heroName={nomeHeroeSelecionado}></GetHeroesTemplate>
                    </div>
                </div>
                <div id="sidebar">
                    <div className="inner">
                            <section id="search" className="alt">
                                <form method="post" action="#">
                                    <input type="text" onChange={(evento)=>{
                                        setLetraDigitada(evento.target.value);
                                        procurarHeroePorNome(evento)(setArrayListaDeHeroes)(letraSelecionada);
                                        
                                        }} name="query" id="query" placeholder="Search" />
                                </form>
                            </section>
                            <MenuNomesHeroes listNames={listHeroes} letter={letraSelecionada}></MenuNomesHeroes>
                            <footer id="footer">
                                <p className="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
                            </footer>        
                    </div>
                </div>        
        </div> 
          
    )
}