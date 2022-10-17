import AuthorTemplate from "../../components/AuthorTemplate";

const ReneDescartes = () => {
  return (
    <main>
        <AuthorTemplate 
            authorName="René Descartes" 
            authorSearch="René Descartes" 
            text1='René Descartes, foi um filósofo, físico e matemático francês. Por vezes chamado de "o fundador da filosofia moderna" e o "pai da matemática moderna".' 
            text2='Autor da famosa frase: "Penso, logo existo". Inspirou contemporâneos e várias gerações de filósofos posteriores; boa parte da filosofia escrita a partir de então foi uma reação às suas obras ou a autores supostamente influenciados por ele. ' 
            backgroundImage="backgroundReneDescartes"
            perfilImage="./img/reneDescartes_perfil.jpg"/>
    </main>

  )
}

export default ReneDescartes