/* import Teste from "../components/AuthorTemplate" */

const TestePage = () => {
  return (
    <main>
      {/* authorName, authorSearch,text1, text2 */}

      {/* <Teste 
      authorName="Nicolau Maquiavel" 
      authorSearch="Maquiavel" 
      text1="Nicolau Maquiavel (em Italiano: Niccolò di Bernardo dei Machiavelli) foi um filósofo, historiador, poeta, diplomata e músico de origem florentina do Renascimento." 
      text2="É reconhecido como fundador do pensamento e da ciência política moderna, pelo fato de ter escrito sobre o Estado e o governo como realmente são, e não como deveriam ser" 
      backgroundImage="backgroundMaquiavel"
      perfilImage="./img/maquiavel_perfil.jpg"
      /> */}
      
      <p authorName="René Descartes" 
      authorSearch="René Descartes" 
      text1='René Descartes, foi um filósofo, físico e matemático francês. Por vezes chamado de "o fundador da filosofia moderna" e o "pai da matemática moderna".' 
      text2='Autor da famosa frase: "Penso, logo existo". Inspirou contemporâneos e várias gerações de filósofos posteriores; boa parte da filosofia escrita a partir de então foi uma reação às suas obras ou a autores supostamente influenciados por ele. ' 
      backgroundImage="backgroundReneDescartes"
      perfilImage="./img/reneDescartes_perfil.jpg" ></p>

      <p 
      authorName="Friedrich Nietzsche" 
      authorSearch="Friedrich Nietzsche" 
      text1='Friedrich Wilhelm Nietzsche foi um filósofo, filólogo, crítico cultural, poeta e compositor prussiano do século XIX, nascido na atual Alemanha.' 
      text2='Escreveu vários textos criticando a religião, a moral, a cultura contemporânea, filosofia e ciência, exibindo uma predileção por metáfora, ironia e aforismo.' 
      backgroundImage="backgroundNietzche"
      perfilImage="./img/nietzsche_perfil.jpg"></p>

      <p
      authorName="Nikolas Tesla" 
      authorSearch="Nikola Tesla" 
      text1='Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.' 
      text2='Que contribuiu para formar a base dos modernos sistemas de potência elétrica em corrente alternada, com os quais muito avançou a chamada Segunda Revolução Industrial.' 
      backgroundImage="backgroundTesla"
      perfilImage="./img/NikolaTesla_perfil.jpg"
      >

      </p>
      
    </main>
  )
}

export default TestePage