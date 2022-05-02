import Crousel from "./Crousel";
import Header from "./Header";
import "../App.css"
import Footer from "./Footer";
import Icon from "./Icon";
import Section from "./Section";
import Article from "./Article";
import Dummy from "./Dummy"
import Swiper from "./Swiper";


function Home(props) {
    return(
        <>
        {/* <Navbar/> */}
               <div className="rootDivision">
                <Header/>
                <Crousel/>
                <Section/>
               
                <Article/>
            <Swiper/>
                <Footer/>

               </div>
           
                
        </>
    )
}

export default Home;