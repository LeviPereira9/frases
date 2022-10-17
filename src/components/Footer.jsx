import {BsGithub, BsTwitter} from "react-icons/bs"
 
const Footer = () => {
  return (
    <footer className='footer' >
        <h2 className='footer__title' >Grandes Mentes &#169; 2022 </h2>
        <ul className="footer__midias">
          <li> <BsGithub/> <a href="https://github.com/LeviPereira9" target="_blank" >LeviPereira9</a></li>
          <li><BsTwitter/> <a href="https://twitter.com/LeviPereira09" target="_blank" >@LeviPereira09</a></li>
        </ul>
    </footer>
  )
}

export default Footer