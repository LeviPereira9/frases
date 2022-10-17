import { useEffect, useState } from "react";
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
        <article className="authorPhrase backgroundTesla">
            <section className="authorPhrase__info">
                <img className="authorPhrase__info__perfil" src="./img/NikolaTesla_perfil.jpg" alt="rosto de Nicolau Maquiavel" />
                <h2 className="authorPhrase__info__title" >Nikola Tesla</h2>
                <div className="authorPhrase__info__text">
                    <p >Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.</p>
                    <p>Que contribuiu para formar a base dos modernos sistemas de potência elétrica em corrente alternada, com os quais muito avançou a chamada Segunda Revolução Industrial.</p>
                </div>
            </section>
            <section className="authorPhrase__phrase">
                <h1 className="authorPhrase__phrase__title" >Frases de Nikola Tesla</h1>
                <div className="authorPhrase__phrase__text">
                    {loading ? (
                        <p>Carregando...</p>
                    ) : (
                        <>{ phrases != null && phrases[randomNumber].autor === "Nikola Tesla" && phrases[randomNumber].texto.split("").length < 501 && <p>"{phrases[randomNumber].texto}"</p>  }
                        { phrases != null && phrases[randomNumber].autor != "Nikola Tesla" && handleRandomText() }
                        </>
                    )}
                </div>
                <p className="authorPhrase__phrase__authorName"> - Nikola Tesla</p>
                <div className="authorPhrase__phrase__button">
                    <button onClick={handleRandomText} >Outra frase</button>
                </div>
            </section>
        </article>
    </main>

  )
}

export default Maquiavel