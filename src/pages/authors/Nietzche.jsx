import { useEffect, useState } from "react";
import { useFetchPhrases } from "../../hooks/useFetchPhrases";

const Nietszche = () => {
    const author = "friedrich+nietzsche"

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
        <article className="authorPhrase backgroundNietzche">
            <section className="authorPhrase__info">
                <img className="authorPhrase__info__perfil" src="./img/nietzsche_perfil.jpg" alt="rosto de Nicolau Maquiavel" />
                <h2 className="authorPhrase__info__title" >Friedrich Nietzsche</h2>
                <div className="authorPhrase__info__text">
                    <p>Friedrich Wilhelm Nietzsche foi um filósofo, filólogo, crítico cultural, poeta e compositor prussiano do século XIX, nascido na atual Alemanha. </p>
                    <p>Escreveu vários textos criticando a religião, a moral, a cultura contemporânea, filosofia e ciência, exibindo uma predileção por metáfora, ironia e aforismo.</p>
                </div>
            </section>
            <section className="authorPhrase__phrase">
                <h1 className="authorPhrase__phrase__title" >Frases de Nietzsche</h1>
                <div className="authorPhrase__phrase__text">
                    {loading ? (
                        <p>Carregando...</p>
                    ) : (
                        <>{ phrases != null && phrases[randomNumber].autor === "Friedrich Nietzsche" && phrases[randomNumber].texto.split("").length < 501 && <p>"{phrases[randomNumber].texto}"</p> }
                        { phrases != null && phrases[randomNumber].autor != "Friedrich Nietzsche" && handleRandomText() }
                        </>
                    )}
                </div>
                <p className="authorPhrase__phrase__authorName"> - Friedrich Nietzsche</p>
                <div className="authorPhrase__phrase__button">
                    <button onClick={handleRandomText} >Outra frase</button>
                </div>
            </section>
        </article>
    </main>

  )
}

export default Nietszche