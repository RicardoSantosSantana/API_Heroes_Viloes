import { ListaHeroes } from '../components/ListaHeroes';

export const Ordem = (n1,n2)=>n1-n2;

const LISTAHEROES = ListaHeroes().myrows;  
 
export const ArrayProcurarPorLetra =(letra)=>{
    return LISTAHEROES.filter(el=>el.name[0].toUpperCase()==letra.toUpperCase())
}
  
export const ArraySomenteLetras = () =>{
    const letter=[] ;
    LISTAHEROES.reduce((acc,el)=>{
        if(!letter.includes(el.name[0].toUpperCase())){
            letter.push(el.name[0].toUpperCase())
        }      
    },[])
    return letter.sort(Ordem);
}
 
export function MenuLetrasItens(fn1,fn2){
   return  ArraySomenteLetras().map(letra =>{
        return <li key={`Letra_${letra}`} onClick={()=>{
            fn1(letra);
            fn2(ArrayListaNomesHeroes(letra));
        }
        }>{letra}</li>
    })    
}
  
export const ArrayListaNomesHeroes = (letra) =>{    
    const letterUnique=[]  
    const listafiltrado = ArrayProcurarPorLetra(letra);  
    listafiltrado.reduce((__,el)=>{    
        if(!letterUnique.includes(el.name)){
            letterUnique.push(el.name)
        }      
    },[])   
    return letterUnique.sort(Ordem);
}

export const ArrayListaNomesHeroesPorNome = (name) =>{        
    const PATTERN = name.toUpperCase();
    const filtered = LISTAHEROES.filter( str =>str.name.toUpperCase().includes(PATTERN))
        .map(el=>el.name)
    return filtered.sort((n1,n2)=>n1-n2);
}

export const procurarHeroePorNome = evento => setArrayListaDeHeroes => letraSelecionada => {
    evento.target.value.length>=3 ?
             setArrayListaDeHeroes(ArrayListaNomesHeroesPorNome(evento.target.value))
            : setArrayListaDeHeroes(ArrayListaNomesHeroes(letraSelecionada));
} 

    
