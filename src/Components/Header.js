import { Link } from 'react-router-dom';
import { SiLinkedin } from "react-icons/si"
import '../App.css';
import Icon from './Icon';
function Header(props) {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light m-0 p-0 m-lg-0 m-5">

                <div className="container-fluid no-gutters pd-0 bg-dark slash fixed-top mb-lg-0 mb-5" id="navbarTogglerDemo03">
                    <div className="row no-gutters m-sm-0 m-auto ">
                        <div className="col-sm-auto px-4 menu ">
                            <nav className="nav justify-content-center py-3 ">
                                <Link className="mr-2 topbar" to="/">Home</Link>|
                                {/* <Link className="ml-2 mr-2 topbar" target="_blank" to="/https://www.google.com/">Blog</Link>| */}
                                <Link className="ml-2 mr-2 topbar" target="_blank" to="/contact">Contact us </Link>|
                                <Link className="ml-2 mr-2 topbar" target="_blank" to="/about">About us</Link>
                            </nav>

                        </div>



                    </div>
                    <div className="clearflix"></div>

    <Icon/>           

        </div>
        </nav>
        </>

    )

}


export default Header;