import { Link } from "react-router-dom";
const HomeHireme = () => {
    return (
        <section className="section-sm  my-5">
            <div className="container text-center text-sm-left">
                <div className="row align-items-center">
                    <div className="col-sm offset-md-1 mb-4 mb-md-0">
                        <h6 className="title text-light"><strong>Want to work with me?</strong></h6>
                        <p className="m-0 text-light">Always feel Free to Contact & Hire me</p>
                    </div>
                    <div className="col-sm offset-sm-2 offset-md-3">
                        {/* <button className="btn btn-lg my-font btn-light rounded">Contact Me</button> */}
                        <Link to="/contact" className="btn btn-lg my-font btn-light rounded">Contact Me</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HomeHireme;