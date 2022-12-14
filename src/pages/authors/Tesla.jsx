import AuthorTemplate from "../../components/AuthorTemplate";

const Maquiavel = () => {
    
  return (

    <main>
        <AuthorTemplate 
            authorName="Nikola Tesla" 
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