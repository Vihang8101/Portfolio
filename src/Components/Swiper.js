import { BsGem } from 'react-icons/bs';
import { FaCogs, FaSignature, FaShieldAlt, FaClock, FaCopyright } from 'react-icons/fa'
function Swiper() {
    return (
        <>
            <article>
                <div class="section-block-grey">
                    <div class="container">
                        <div class="section-heading center-holder">
                            <h3>Doing the right thing at the right time</h3>
                            <div class="section-heading-line"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                <br />incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="row mt-60">
                            <div class="col-md-4 col-sm-12 col-12">
                                <div class="serv-section-2">
                                    <div class="serv-section-2-icon"> <BsGem size={60} /> </div>
                                    <div class="serv-section-desc">
                                        <h4>Planning</h4>
                                        <h5>Business Planning</h5>
                                    </div>
                                    <div class="section-heading-line-left"></div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12 col-12">
                                <div class="serv-section-2 serv-section-2-act">
                                    <div class="serv-section-2-icon serv-section-2-icon-act"> <FaCogs size={60} /> </div>
                                    <div class="serv-section-desc">
                                        <h4>Management</h4>
                                        <h5>Retirement Planning</h5>
                                    </div>
                                    <div class="section-heading-line-left"></div>

                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12 col-12">
                                <div class="serv-section-2">
                                    <div class="serv-section-2-icon"> <FaSignature size={60} /></div>
                                    <div class="serv-section-desc">
                                        <h4>Accumulation</h4>
                                        <h5>Support and Sell</h5>
                                    </div>
                                    <div class="section-heading-line-left"></div>

                                </div>
                            </div>
                        </div>
                        <div class="row mt-60">
                            <div class="col-md-4 col-sm-12 col-12">
                                <div class="serv-section-2">
                                    <div class="serv-section-2-icon"> <FaShieldAlt size={60} /> </div>
                                    <div class="serv-section-desc">
                                        <h4>Security </h4>
                                        <h5>Secure Business</h5>
                                    </div>
                                    <div class="section-heading-line-left"></div>

                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12 col-12">
                                <div class="serv-section-2 serv-section-2-act">
                                    <div class="serv-section-2-icon serv-section-2-icon-act"> <FaClock size={60} />
                                    </div>
                                    <div class="serv-section-desc">
                                        <h4>24/7 Available </h4>
                                        <h5>All time available </h5>
                                    </div>
                                    <div class="section-heading-line-left"></div>

                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12 col-12">
                                <div class="serv-section-2">
                                    <div class="serv-section-2-icon"> <FaCopyright size={60} /> </div>
                                    <div class="serv-section-desc">
                                        <h4> Customer Support </h4>
                                        <h5>Support and Sell</h5>
                                    </div>
                                    <div class="section-heading-line-left"></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <div class="clearflix"></div>

        </>
    );
}
export default Swiper;
