import { useEffect, useState } from "react";
import { useFetchPhrases } from "../../hooks/useFetchPhrases";

const ReneDescartes = () => {
    const author = "rene+descartes"

    const { data, loading, error } = useFetchPhrases(author);
    const [phrases, setPhrases] = useState(null);
    const [randomNumber, setRandomNumber] = useState(0);

    
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
        setRandomNumber(Math.round(Math.random()*49));
        console.log(randomNumber);
    }
    
  return (

    <main>
        <article className="authorPhrase backgroundReneDescartes">
            <section className="authorPhrase__info">
                <img className="authorPhrase__info__perfil" src="./img/reneDescartes_perfil.jpg" alt="rosto de Nicolau Maquiavel" />
                <h2 className="authorPhrase__info__title" >René Descartes</h2>
                <div className="authorPhrase__info__text">
                    <p > René Descartes, foi um filósofo, físico e matemático francês. Por vezes chamado de "o fundador da filosofia moderna" e o "pai da matemática moderna".</p>
                    <p>Autor da famosa frase: "Penso, logo existo". Inspirou contemporâneos e várias gerações de filósofos posteriores; boa parte da filosofia escrita a partir de então foi uma reação às suas obras ou a autores supostamente influenciados por ele. "</p>
                </div>
            </section>
            <section className="authorPhrase__phrase">
                <h1 className="authorPhrase__phrase__title" >Frases de René Descartes</h1>
                <div className="authorPhrase__phrase__text">
                    {loading ? (
                        <p>Carregando...</p>
                    ) : (
                        <>
                            { phrases != null && phrases[randomNumber].autor === "René Descartes" && phrases[randomNumber].texto.split("").length < 501  ? <p>"{phrases[randomNumber].texto}"</p> : <p>"Quando se é demasiado curioso de coisas praticadas nos séculos passados, é comum ficar-se ignorante das que se praticam no presente."</p> }
                        </>
                    )}
                </div>
                <p className="authorPhrase__phrase__authorName"> - René Descartes</p>
                <div className="authorPhrase__phrase__button">
                    <button onClick={handleRandomText} >Outra frase</button>
                </div>
            </section>
        </article>
    </main>

  )
}

export default ReneDescartes