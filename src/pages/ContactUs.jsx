import { BsTwitter, BsLinkedin} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <article className="contactUs" >
        <div className="contactUs__container">
            <p className="contactUs__text" >Se tiver alguma duvida ou reclamação, entre em contato em nossas redes sociais ou e-mail:</p>
            <ul className="contactUs__links" >
                <li><BsLinkedin/><a href="https://www.linkedin.com/in/levi-pereira-da-silva-61303a193/">Levi Pereira da Silva</a></li>
                <li><BsTwitter/>@<a href="https://twitter.com/LeviPereira09">LeviPereira09</a></li>
                <li> <MdEmail/> ProjetoGrandesMentes@gmail.com</li>
            </ul>
        <div className="contactUs__randomImg">
            <img src="/img/nietzsche_background1.jpg" alt="random img" />            
        </div>
        </div>

    </article>
  )
}

export default ContactUs