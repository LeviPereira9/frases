import {BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs"
 
const Footer = () => {
  return (
    <footer className='footer' >
        <h2 className='footer__title' >Grandes Mentes &#169; 2022 </h2>
        <ul className="footer__midias">
          <li>  <a href="https://github.com/LeviPereira9" target="_blank" ><BsGithub className="github"/></a></li>
          <li>  <a href="https://www.linkedin.com/in/levi-pereira-da-silva-61303a193/"><BsLinkedin className="linkedin"/></a> </li>
          <li>  <a href="https://twitter.com/LeviPereira09" target="_blank" ><BsTwitter className="twitter"/></a></li>
        </ul>
    </footer>
  )
}

export default Footer