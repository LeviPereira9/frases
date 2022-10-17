
//Routes
import { Link } from 'react-router-dom';
//Icons
import { FaBrain, FaBars } from "react-icons/fa";
import { useRef, useLayoutEffect, useState, startTransition } from 'react';

const Navbar = () => {

    const miniMenu = useRef();
    const [menuActive, setMenuActive] = useState(false);

    useLayoutEffect(()=>{

        if(menuActive){
            miniMenu.current.classList.remove("hide");
            miniMenu.current.classList.add("show");
        } else {
            miniMenu.current.classList.remove("show");
            miniMenu.current.classList.add("hide");
        }

        
    })    
    
  return (
    <header  >
        <nav className='header' >
            <div className="header__container">
                <ul className='header__nav' >
                    <li> <Link to="/" >Autores</Link> </li>
                    <li> <Link to="/recommendation"> Indicação </Link> </li>
                </ul>
            </div>
                <div className='header__brand'>
                    <p>Grandes</p>
                    <Link to="/" >
                        <FaBrain
                            className='header__brand__icon'/>
                    </Link>
                    <p>Mentes</p>
                </div>
            <div className="header__container">
                <ul className='header__nav' >
                    <li> <Link to="/aboutus">Sobre nós</Link></li>
                    <li> <Link to="/contactus">Contatos</Link> </li>
                </ul>
            </div>
            <div className="header__menu">
                <span>
                <FaBars className="header__menu__icon" onClick={()=>{
                    setMenuActive(e=>!e)
                }} />
                </span>
                
            </div>
        </nav>
        <nav>
        <div className="header_miniMenu" ref={miniMenu}>
            <ul className="header__miniMenu__container"  >
                        <li> <Link to="/" >Autores</Link> </li>
                        <li> <Link to="/recommendation"> Indicação </Link> </li>
                        <li> <Link to="/aboutus">Sobre nós</Link></li>
                        <li> <Link to="/contactus">Contatos</Link> </li>
                    </ul>
        </div>
        </nav>
    </header>
  )
}

export default Navbar