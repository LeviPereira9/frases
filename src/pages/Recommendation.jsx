import { useState, useEffect } from "react";

const Recommendation = () => {

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [voted, setVoted] = useState(false);

    useEffect(()=>{

        if(localStorage.getItem("choice")){
            setVoted(true);
        }
        
    },[])
    
    const handleSubmit = (e)=>{
        e.preventDefault();

        localStorage.setItem("choice", JSON.stringify({name, author}));
        setVoted(true);
    }

    const handleChange = (e)=>{
        localStorage.clear();
        setVoted(false);
    }
    
  return (
    <article className="recommendation" >
        {!voted && 
            <>
                <form className="recommendation__form"  onSubmit={handleSubmit} >
                    <div className="recommendation__form__title">
                        <h2>Indique o próximo autor de Grandes Mentes</h2>
                    </div>
                    <label className="recommendation__form__name" >
                        <span>Nome:</span>
                        <input type="text" placeholder="João Manuel" required onChange={(e)=>{setName(e.currentTarget.value)}} />
                    </label>
                    <label className="recommendation__form__email" >
                        <span>E-mail:</span>
                        <input type="email" placeholder="joaoManuel@grandesmentes.com" disabled />
                    </label>
                    <fieldset className="recommendation__form__authors" >
                        <legend> Escolha o Pensador </legend>
                        <div className="recommendation__form__authors__choice" >
                            <label>
                                <input type="radio" name="author__option" value="Sócrates" required onClick={(e)=>{ setAuthor(e.currentTarget.value) }} />
                                <span>Sócrates</span>
                            </label>
                            <label>
                                <input type="radio" name="author__option" value="Aristóteles" onClick={(e)=>{ setAuthor(e.currentTarget.value) }}/>
                                <span>Aristóteles</span>
                            </label>
                            <label>
                                <input type="radio" name="author__option" value="William Shakespeare" onClick={(e)=>{ setAuthor(e.currentTarget.value) }}/>
                                <span>William Shakespeare</span>
                            </label>
                            <label>
                                <input type="radio" name="author__option" value="Albert Einstein" onClick={(e)=>{ setAuthor(e.currentTarget.value) }}/>
                                <span>Albert Einstein</span>
                            </label>
                            <label>
                                <input type="radio" name="author__option" value="Clarice Lispector" onClick={(e)=>{ setAuthor(e.currentTarget.value) }} />
                                <span>Clarice Lispector</span>
                            </label>
                        </div>
                    </fieldset>
                    {!voted && <button className="recommendation__form__buttonActived" >Enviar</button> }
                    {voted && <button className="recommendation__form__buttonDesactived" disabled >Enviado</button> }
                </form>
            </>
         }
         {voted && 
            
            <div className="recommendation__voted">
                <div className="recommendation__voted__message">
                    <p>Agradecemos por sua participação!</p>
                    <p>Espere os resultados e pela próxima enquete.</p>
                </div>
                <div className="recommendation__voted__change">
                    <p>Você gostaria de mudar seu voto?</p>
                    <button onClick={handleChange} >Quero mudar</button>
                </div>
            </div>
        
          }
    </article>
  )
}

export default Recommendation