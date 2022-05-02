import {SiVlcmediaplayer,SiReact,SiBattledotnet} from "react-icons/si"
import {IoBagCheckSharp } from "react-icons/io5"






function Article(props){
    return(
        <>
    <section className="bg-dark">
        <div className="container  py-5">
            <hr className="style1"/>
            <br/>

            <div className="row">

                <div className="col-md-3 col-sm-6">

                    <div className="counter">
                        <div className="counter-icon ">
                          <SiVlcmediaplayer className="mb-4 icon" size={50}/>
                        </div>
                        <div className="counter-content">
                            <h3>Web Designing</h3>
                            <span className="counter-value">508</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="counter blue">
                        <div className="counter-icon">
                        <SiReact className="mb-4 icon" size={50}/>
                        </div>
                        <div className="counter-content">
                            <h3>Web Development</h3>
                            <span className="counter-value">480</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="counter red">
                        <div className="counter-icon">
                            <IoBagCheckSharp  className="mb-4 icon" size={50}/>
                        </div>
                        <div className="counter-content">
                            <h3>BRAND BUILDING</h3>
                            <span className="counter-value">508</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="counter gray">
                        <div className="counter-icon">
                           <SiBattledotnet className="mb-4 icon" size={50}/>
                        </div>
                        <div className="counter-content">
                            <h3>RESPONSIVE DESIGN</h3>
                            <span className="counter-value">508</span>
                        </div>
                    </div>

                </div>


            </div>
            <br/>
            <hr className="style1"/>
            <br/>


        </div>
    </section>
    <div className="clearflix"></div>
 


        </>
    )
}
export default Article;