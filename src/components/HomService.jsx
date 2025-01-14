import { ServiceData } from "./Data";
const HomeService = () => {

    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600PX' }}>
                        <p className="d-inline-block border rounded-pill py-1 px-4">My Services</p>
                        <h1>IT Solutions</h1>
                    </div>
                    <div className="row g-4">
                        {ServiceData.map((data ,index) => {
                            return (
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                                    <div className="service-item  rounded h-100 p-5">
                                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65PX', height: '65PX' }}>
                                            <i className="fa fa-heartbeat text-primary fs-4"></i>
                                        </div>
                                        <h4 className="mb-3">{data.ServiceName}</h4>
                                        <p className="mb-4">{data.ServiceDesc}</p>
                                        <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
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
export default HomeService;