
import Header from '../Header';
import './Contact.css';
import { SiFacebook, SiGithub, SiGmail, SiInstagram, SiLinkedin, SiTwitter, SiWhatsapp } from "react-icons/si";

function Contact(props) {

  return (
    <>
      <Header />
      <section id="contact">
        <div class="contact-box">
          <div class="contact-links">
            <h2 className='h3-lg h2'>CONTACT - US</h2>
            <div class="links">
              {/* <div class="link">
                <a  href="https://www.linkedin.com/in/vihang-patel-2b542620a/"><img className="img" src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
                
              </div>
              <div class="link">
                <a href="https://github.com/Vihang8101"><img className="img" src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
              </div>
              <div class="link">
                <a><img className="img" src="https://i.postimg.cc/W4Znvrry/whatsapp.png" alt="codepen" /></a>
              </div>
              <div class="link">
                <a><img className="img" src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
              </div> */}
              <a className="mx-2" role="button" target="_blank"
        href="https://www.linkedin.com/in/vihang-patel-2b542620a/">
     <SiLinkedin  className="topbar" size={35}/>
    </a>
    <a className="mx-2" role="button" target="_blank" href="https://github.com/Vihang8101">
        <SiGithub className="topbar" size={35}/>
    </a>
    <a className="mx-2" role="button" target="_blank"
        href="https://mobile.twitter.com/PatelVihangDin2">
        <SiTwitter className="topbar" size={35}/>
    </a>
    <a className="mx-2" role="button" target="_blank"
        href=" https://www.facebook.com/profile.php?id=100006806297533">
        <SiFacebook className="topbar" size={35}/>
    </a>
    <a className="mx-2" role="button" target="_blank" href="mailto:vihangpatel133@gmail.com">
        <SiGmail className="topbar" size={35}/>
    </a>
    <a className="mx-2 " role="button" target="_blank" href="https://wa.me/+917567174979">
    <SiWhatsapp className="topbar" size={35}/>
    </a>
    <a className="mx-2 mt-sm-0 " role="button" target="_blank" href="https://www.instagram.com/vihang_patel_8101/">
    <SiInstagram className="topbar" size={35}/>
</a>
            </div>
            <div>
             <h3 className='text-center  mt-4  text-info h3-lg h4-sm h6'> Name : Patel Vihang D</h3>
            </div>
            <div>
             <h3 className='text-center  mt-4  text-info  h3-lg h4-sm h6'> E-mail : Vihangpatel133@gmail.com</h3>
            </div>
            <div>
             <h3 className='  text-center mt-4   text-info h3-lg h4-sm h6'> Contact : 75467174979/6352973480</h3>
            </div>
          </div>
          <div class="contact-form-wrapper">
            <form action="https://getform.io/f/d4a52133-4ca4-4c48-b416-2f71e8c1d2ee" method="POST">
              <div class="form-item">
                <input type="text" name="sender" required />
                <label>Name:</label>
              </div>
              <div class="form-item">
                <input type="text" name="email" required />
                <label>Email:</label>
              </div>
              <div class="form-item">
                <textarea class="" name="message" required></textarea>
                <label>Message:</label>
              </div>
              <button class="submit-btn">Send</button>
            </form>
          </div>
        </div>
      </section>
    </>

  )



}
export default Contact