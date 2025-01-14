import { ProjectData } from "./Data";
const HomeProject = () => {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600PX' }}>
                        <p className="d-inline-block border rounded-pill py-1 px-4">My Projects</p>
                        <h1>Portfolio Items</h1>
                    </div>
                    <div className="row gx-4">
                        {ProjectData.map((data, index) => {
                            return (
                                <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                                    <div className="product-item">
                                        <div className="position-relative">
                                            <img className="img-fluid" src={data.ProjectImg} alt="Valworx" style={{height : '300px'}} />
                                            <div className="product-overlay">
                                                <a className="btn btn-square btn-secondary rounded-circle m-1" href={data.Project_URL} target="_blank"><i className="fa-solid fa-link"></i></a>
                                                <a className="btn btn-square btn-secondary rounded-circle m-1" href=""><i className="fa-brands fa-github"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5" href={data.Project_URL} target="_blank">{data.ProjectName}</a>
                                            {/* <span className="text-primary me-1">$19.00</span>
                                            <span className="text-decoration-line-through">$29.00</span> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeProject;