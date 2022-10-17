import { useEffect, useState } from "react";
import { useFetchPhrases } from "../../hooks/useFetchPhrases";

const Maquiavel = () => {
    const author = "nicolau+maquiavel"

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
        <article className="authorPhrase backgroundMaquiavel">
            <section className="authorPhrase__info">
                <img className="authorPhrase__info__perfil" src="./img/maquiavel_perfil.jpg" alt="rosto de Nicolau Maquiavel" />
                <h2 className="authorPhrase__info__title" >Nicolau Maquiavel</h2>
                <div className="authorPhrase__info__text">
                    <p>Nicolau Maquiavel (em Italiano: Niccolò di Bernardo dei Machiavelli) foi um filósofo, historiador, poeta, diplomata e músico de origem florentina do Renascimento.</p>
                    <p> É reconhecido como fundador do pensamento e da ciência política moderna, pelo fato de ter escrito sobre o Estado e o governo como realmente são, e não como deveriam ser</p>
                </div>
            </section>
            <section className="authorPhrase__phrase">
                <h1 className="authorPhrase__phrase__title" >Frases de Nicolau Maquiavel</h1>
                <div className="authorPhrase__phrase__text">
                    {loading ? (
                        <p>Carregando...</p>
                    ) : (
                        <>{ phrases != null && phrases[randomNumber].autor === "Maquiavel" && phrases[randomNumber].texto.split("").length < 501 && <p>"{phrases[randomNumber].texto}"</p> }
                        { phrases != null && phrases[randomNumber].autor != "Maquiavel" && handleRandomText() }
                        </>
                    )}
                </div>
                <p className="authorPhrase__phrase__authorName"> - Nicolau Maquiavel</p>
                <div className="authorPhrase__phrase__button">
                    <button onClick={handleRandomText} >Outra frase</button>
                </div>
            </section>
        </article>
    </main>

  )
}

export default Maquiavel