//Routes
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='author' >
        <section className='author__maquiavel'>
            <Link to="/maquiavel" className='author__maquiavel__link' >
                <button>Maquiavel</button>
            </Link>    
        </section>
        <section className='author__tesla'>
            <Link to="/tesla" >
                <button>Tesla</button>
            </Link>        
        </section>
        <section className='author__nietszche'>
            <Link to="/nietszche" >
                <button>Nietszche</button>
            </Link>
        </section>
        <section className='author__reneDescartes'>
            <Link to="/reneDescartes" >
                <button>Descartes</button>
            </Link>    
        </section>
    </main>
  )
}

export default Home