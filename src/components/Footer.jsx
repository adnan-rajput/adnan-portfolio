import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <footer className="footer-09">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                            <h2 className="footer-heading d-flex">
                                <span className="icon d-flex align-items-center justify-content-center"><i className="fa-solid fa-user"></i></span>
                                About
                            </h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><span className="icon"><i className="fa-solid fa-location-dot"></i></span><span className="text">1694 Zakir Colony Hapur Road, Meerut, India</span></li>
                                    <li><a href="#"><span className="icon"><i className="fa-solid fa-phone"></i></span><span className="text">+91 905 805 8831</span></a></li>
                                    <li><a href="#"><span className="icon"><i className="fa-solid fa-envelope"></i></span><span
                                        className="text">khanadnan3355@gmail.com</span></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                            <h2 className="footer-heading d-flex align-items-center"><span
                                className="icon d-flex align-items-center justify-content-center"><i className="fa-regular fa-newspaper"></i></span>Skills</h2>
                            <div className="block-21 mb-4 d-flex">
                                <a className="img mr-4 rounded d-flex justify-content-center align-items-center" style={{ fontSize: '60px', color: '#7b73c1' }}><i className="fa-brands fa-react"></i></a>
                                <div className="text">
                                    <h3 className="heading"><a href="#">React</a></h3>
                                    <div className="meta">
                                        <div><a href="#"><span className="icon-calendar"></span> Oct. 16, 2019</a></div>
                                        <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                        <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-21 mb-4 d-flex">
                                <a className="img mr-4 rounded d-flex justify-content-center align-items-center" style={{ fontSize: '60px', color: '#7b73c1' }}><i className="fa-brands fa-figma"></i></a>
                                <div className="text">
                                    <h3 className="heading"><a href="#">Figma</a></h3>
                                    <div className="meta">
                                        <div><a href="#"><span className="icon-calendar"></span> Oct. 16, 2019</a></div>
                                        <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                                        <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-21 mb-4 d-flex">
                                <a className="img mr-4 rounded d-flex justify-content-center align-items-center" style={{ fontSize: '60px', color: '#7b73c1' }}></a>
                                <div className="text">
                                    <h3 className="heading"><Link to="/resume">More <i className="fa-solid fa-arrow-right"></i></Link></h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                            <h2 className="footer-heading d-flex align-items-center"><span
                                className="icon d-flex align-items-center justify-content-center"><i className="fa-solid fa-circle-info"></i></span>Information</h2>
                            <ul className="list-unstyled">
                                <li><Link to="/about" className="py-1 d-block">About</Link></li>
                                <li><Link to="/contact" className="py-1 d-block">Contact</Link></li>
                                <li><Link to="/resume" className="py-1 d-block">Resume</Link></li>
                                <li><Link to="/project" className="py-1 d-block">Projects</Link></li>
                                <li><Link to="/service" className="py-1 d-block">Services</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                            <h2 className="footer-heading d-flex align-items-center"><span
                                className="icon d-flex align-items-center justify-content-center"><i className="fa-brands fa-instagram"></i></span>Gallery</h2>
                            <div className="block-24">
                                <div className="row no-gutters">
                                    <div className="col-6 col-md-6 p-1">
                                        <a href="#" className="img rounded" style={{ backgroundImage: "url(images/insta-1.jpg)" }}></a>
                                    </div>
                                    <div className="col-6 col-md-6 p-1">
                                        <a href="#" className="img rounded" style={{ backgroundImage: "url(images/insta-1.jpg)" }}></a>
                                    </div>
                                    <div className="col-6 col-md-6 p-1">
                                        <a href="#" className="img rounded" style={{ backgroundImage: "url(images/insta-1.jpg)" }}></a>
                                    </div>
                                    <div className="col-6 col-md-6 p-1">
                                        <a href="#" className="img rounded d-flex justify-content-center align-items-center"><span>More <i className="fa-solid fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 pt-4 border-top">
                        <div className="col-md-6 col-lg-8">
                            <p className="copyright">
                                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                Copyright &copy;
                                <script>document.write(new Date().getFullYear());</script> All rights reserved.
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-4 text-md-right">
                            <p className="copyright">Developed and Maintained  by
                                <a href="https://www.linkedin.com/in/Al-Adnan/" target="_blank"><span style={{ color: 'Yellow' }}> Adnan </span></a> with <i className="ion-ios-heart" aria-hidden="true"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;