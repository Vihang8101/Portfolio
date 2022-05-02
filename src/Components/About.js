import Header from "./Header"
import '../App.css';
import './About.css'
import vihang from "../Images/Vihang.jpg"




function About(props) {

    return (
        <div id="body">
            <Header />
            <div className="clearflix"></div>
            <div className="container mt-5" id="about1">
                <div className="circles"></div>
                <div className="details-container">
                    <div className="avatar">
                        <img src={vihang} className="img-fluid mt-5 photo" alt="" />
                    </div>
                    <div className="about">
                        <div className="name">
                            <p>
                                Hello There!
                            </p>
                            <h1>
                                I'm mr Vihang Patel
                            </h1>
                        </div>
                        <div className="about-content">
                            <p>
                                I have been completed diploma form gp Ahemdabad and BE pursuing in Git Gandhinagar.
                                Currently i am working as a React js Trannie at Aims infosoft.
                            </p>
                            <a type="button" className="btn button" target="_blank" href="https://drive.google.com/file/d/1NR1G1X8VowBkfzpBAySuRpAg4lDv1-O5/view?usp=sharing">Download Resume</a>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="skills-container mt-3 mr-2">
                    <button>
                        Reader
                    </button>
                    <button>
                        Coder
                    </button>
                    <button>
                        Designer
                    </button>
                </div>
            </div>
        </div>

    )



}
export default About