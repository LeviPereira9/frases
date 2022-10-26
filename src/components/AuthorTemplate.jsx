import { useEffect, useState } from "react";
import { useFetchPhrases } from "../hooks/useFetchPhrases";

const AuthorTemplate = ({authorName, authorSearch,text1, text2, backgroundImage, perfilImage}) => {
    const author = authorName.replace(" ", "+");
    
    const { data, loading, error } = useFetchPhrases(author);
    const [phrases, setPhrases] = useState(null);
    const [randomNumber, setRandomNumber] = useState(0)

     useEffect(()=>{
       if(data){
            setPhrases(data.frases.filter((infos)=>
            infos.autor.includes(authorSearch) && infos.texto.length < 501
            ))
            console.log(phrases)
       }
    },[data]);

    
    
    const handleRandomText = ()=>{
        setRandomNumber(Math.ceil(Math.random()*phrases.length - 1));
    }
    
    console.log(randomNumber)
  return (

    <>
        <article className={`authorPhrase ${backgroundImage}`}>
            <section className="authorPhrase__info">
                <img className="authorPhrase__info__perfil" src={perfilImage} alt="rosto de Nicolau Maquiavel" />
                <h2 className="authorPhrase__info__title" >{authorName}</h2>
                <div className="authorPhrase__info__text">
                    <p>{text1}</p>
                    <p> {text2} </p>
                </div>
            </section>
            <section className="authorPhrase__phrase">
                <h1 className="authorPhrase__phrase__title" >Frases de {authorName}</h1>
                <div className="authorPhrase__phrase__text">
                    {loading ? (
                        <p>Carregando...</p>
                    ) : (
                        <>
                            {phrases && <p>"{phrases[randomNumber].texto}"</p> }
                        </>
                    )}
                </div>
                <p className="authorPhrase__phrase__authorName"> - {authorName}</p>
                <div className="authorPhrase__phrase__button">
                    <button onClick={handleRandomText} >Outra frase</button>
                </div>
            </section>
        </article>
    </>

  )
}

export default AuthorTemplate