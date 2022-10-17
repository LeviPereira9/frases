import { useEffect, useState } from "react";
import AuthorTemplate from "../../components/AuthorTemplate";
import { useFetchPhrases } from "../../hooks/useFetchPhrases";

const Maquiavel = () => {
    const author = "nikolas+tesla"

    const { data, loading, error } = useFetchPhrases(author);
    const [phrases, setPhrases] = useState(null);
    const [randomNumber, setRandomNumber] = useState(0)

     useEffect(()=>{

        if( data === null ){
            return;
        } else {
            setPhrases(data.frases);
            if(phrases === null){
                return;
            } else {
                console.log(phrases)
            }
        };
        
    },[data])
    
    const handleRandomText = ()=>{
        setRandomNumber(Math.round(Math.random()*49))
    }
    
  return (

    <main>
        <AuthorTemplate 
            authorName="Nikolas Tesla" 
            authorSearch="Nikola Tesla" 
            text1='Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.' 
            text2='Que contribuiu para formar a base dos modernos sistemas de potência elétrica em corrente alternada, com os quais muito avançou a chamada Segunda Revolução Industrial.' 
            backgroundImage="backgroundTesla"
            perfilImage="./img/NikolaTesla_perfil.jpg"
        />
    </main>

  )
}

export default Maquiavel