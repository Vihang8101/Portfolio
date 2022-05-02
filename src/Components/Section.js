import css from "../Images/css.png"
import html from "../Images/html.png"
import JS from "../Images/JS (1).png"

function Section(props){

    return(
        <>
            <article className="m-0 p-0">
        <div className="conatiner py-3 article">
            <div className="row no-gutters pt-lg-5 justify-content-center ">
                <div className="col-lg-3 ">
                    <div className="card fly-in">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                         <a href="https://www.w3schools.com/html/default.asp" target="_blank">   <img src={html} className="img-fluid w-100" /></a>
                            
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">HTML</h5>
                            <p className="card-text">
                                Hypertext Markup Language, a standardized system for tagging text files to achieve font,
                                colour, graphic, and hyperlink effects on World Wide Web pages.
                            </p>
                            <a href="https://www.w3schools.com/html/default.asp" target="_blank" type="button"
                                className="btn btn-primary">Read More..</a>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 mx-lg-5">
                    <div className="card ">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <a href="https://www.w3schools.com/css/default.asp" target="_blank">   
                                 <img src={css} className="img-fluid w-100 " />
                               
                            </a>
                          
                        </div>
                        <div className="card-body pb-4">
                            <h5 className="card-title">CSS</h5>
                            <p className="card-text">
                                CSS stands for Cascading Style Sheets.
                                CSS describes how HTML elements are to be displayed on screen, paper, or in other media
                            </p>
                            <a href="https://www.w3schools.com/css/default.asp" className="btn btn-primary" target="_blank">Read More..</a>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3 pb-lg-5 ">
                    <div className="card">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <a href="https://www.w3schools.com/js/default.asp" target="_blank">    
                                 <img src={JS} className="img-fluid   w-100" />
                                 </a>
                           
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">JAVA SCRIPT</h5>
                            <p className="card-text pb-4">
                                CSS describes how HTML elements are to be displayed on screen, paper, or in other media
                            </p>
                            <a href="https://www.w3schools.com/js/DEFAULT.asp" target="_blank"
                                className="btn btn-primary">Read More..</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </article>
    <div className="clearflix"></div>
        </>
    )
}
export default Section;