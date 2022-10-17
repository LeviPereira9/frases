import AuthorTemplate from "../../components/AuthorTemplate";

const Nietszche = () => {

  return (

    <main>
       <AuthorTemplate 
            authorName="Friedrich Nietzsche" 
            authorSearch="Friedrich Nietzsche" 
            text1='Friedrich Wilhelm Nietzsche foi um filósofo, filólogo, crítico cultural, poeta e compositor prussiano do século XIX, nascido na atual Alemanha.' 
            text2='Escreveu vários textos criticando a religião, a moral, a cultura contemporânea, filosofia e ciência, exibindo uma predileção por metáfora, ironia e aforismo.' 
            backgroundImage="backgroundNietzche"
            perfilImage="./img/nietzsche_perfil.jpg"
       />
    </main>

  )
}

export default Nietszche