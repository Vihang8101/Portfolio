import { SiFacebook, SiGithub, SiGmail, SiInstagram, SiLinkedin, SiTwitter, SiWhatsapp } from "react-icons/si";
import '../App.css';
function Footer(props) {
    return (
        <>
      
            <footer className="bg-dark text-center text-white m-0 p-0">
            <section>
                {/* <!-- Grid container --> */}
                <div className="container p-4">
                    {/* <!-- Section: Social media --> */}

                    <section className="mb-4">
                        {/* <!-- Linkedin --> */}
                        <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.linkedin.com/in/vihang-patel-2b542620a/" role="button">  <SiLinkedin  className="topbar" size={25}/></a>

                        {/* <!-- Github --> */}
                        <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://github.com/Vihang8101" role="button"> <SiGithub className="topbar" size={25}/></a>

                        {/* <!-- Twitter --> */}
                        <a className="btn btn-outline-light btn-floating m-1" target="_blank" href=" https://mobile.twitter.com/PatelVihangDin2" role="button"><SiTwitter className="topbar" size={25}/></a>
                        {/* <!-- Facebook --> */}
                        <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="  https://www.facebook.com/profile.php?id=100006806297533" role="button"> <SiFacebook className="topbar" size={25}/></a>


                        {/* <!-- Gmail --> */}
                        <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="  mailto:vihangpatel133@gmail.com" role="button">  <SiGmail className="topbar" size={25}/></a>


                        {/* <!-- Instagram --> */}
                        <a className="btn btn-outline-light btn-floating m-1" target="_blank" href=" https://www.instagram.com/vihang_patel_8101/" role="button">  <SiInstagram className="topbar" size={25}/></a>








                    </section>
                    {/* <!-- Section: Social media -->
        

                    {/* <!-- Section: Text --> */}
                    <section className="mb-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                            eum harum corrupti dicta, aliquam sequi voluptate quas.
                        </p>


                    </section>
                    {/* <!-- Section: Text --> */}



                    {/* <!-- Copyright --> */}
                    <div className="text-center p-3 unique" >
                        © 2021 Copyright:
                        <a className="text-white" href="https://linktr.ee/Vihang8101">Vihang Patel</a>
                    </div>
                    {/* <!-- Copyright --> */}
                    </div>
                </section>
            </footer>
            {/* <!-- Footer --> */}
        </>
    )
}

export default Footer;