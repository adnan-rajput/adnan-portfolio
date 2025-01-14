import { useState } from "react";
import { Link } from "react-router-dom";

const HomeAbout = () => {

    let [count, setCount] = useState(1);

    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600PX' }}>
                        <p className="d-inline-block border rounded-pill py-1 px-4">About Me</p>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img">
                                <img className="img-fluid" src="images/about-1.jpg" alt="" />
                                <img className="img-fluid" src="images/about-2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h4 className="section-title">Al Adnan</h4>
                            <h1 className="display-5 mb-4">A Creative Hardworking Individual with strong dedication </h1>
                            <p>Detail-oriented software developer with Masters in computer science. Good knowledge of front end, backend as well as database technologies, With one year industry experience. Now want explore more and boost the growth of myself and organization.</p>
                            <p className="mb-4"></p>
                            <p>Passionate Software Engineer with 1+ year experience in developing web applications, Skilled at writting clear, concise code that is easy to maintain and debug</p>
                            <div className="d-flex align-items-center mb-5">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary" style={{ width: "120px", height: "120px" }}>
                                    <h1 className="display-1 mb-n2" data-toggle="counter-up">{count}</h1>
                                </div>
                                <div className="ps-4">
                                    <h3>Years</h3>
                                    <h3>Working</h3>
                                    <h3 className="mb-0">Experience</h3>
                                </div>
                            </div>
                            <Link to="/about"  className="btn btn-lg my-font btn-light rounded custom-btn">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeAbout;