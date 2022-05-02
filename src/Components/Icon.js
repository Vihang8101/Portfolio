import { SiFacebook, SiGithub, SiGmail, SiInstagram, SiLinkedin, SiTwitter, SiWhatsapp } from "react-icons/si";

function Icon(props){
return(

<div className="col-sm-auto ml-auto">
<nav className="nav justify-content-center py-3 ">
    <a className="mx-2" role="button" target="_blank"
        href="https://www.linkedin.com/in/vihang-patel-2b542620a/">
     <SiLinkedin  className="topbar" size={25}/>
    </a>
    <a className="mx-2" role="button" target="_blank" href="https://github.com/Vihang8101">
        <SiGithub className="topbar" size={25}/>
    </a>
    <a className="mx-2" role="button" target="_blank"
        href="https://mobile.twitter.com/PatelVihangDin2">
        <SiTwitter className="topbar" size={25}/>
    </a>
    <a className="mx-2" role="button" target="_blank"
        href=" https://www.facebook.com/profile.php?id=100006806297533">
        <SiFacebook className="topbar" size={25}/>
    </a>
    <a className="mx-2" role="button" target="_blank" href="mailto:vihangpatel133@gmail.com">
        <SiGmail className="topbar" size={25}/>
    </a>
    <a className="mx-2" role="button" target="_blank" href="https://wa.me/+917567174979">
    <SiWhatsapp className="topbar" size={25}/>
    </a>
    <a className="mx-2" role="button" target="_blank" href="https://www.instagram.com/vihang_patel_8101/">
    <SiInstagram className="topbar" size={25}/>
</a>


</nav>

</div>)}
export default Icon;