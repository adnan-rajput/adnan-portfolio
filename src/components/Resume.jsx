
import Breadcrumbs from "./Breadcrumbs";
import { ExperienceData } from "./Data";
import { EducationData } from "./Data";
import { SkillData } from "./Data";
import { AdnanDetails } from "./Data";
import ScrollToTop from "./ScrollToTop";

const Resume = () => {

    ScrollToTop();
    
    return (
        <>
            <Breadcrumbs heading="Resume" />
            <div className="container-fluid resume py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        {/* <h4 className="section-title">Resume</h4> */}
                        <p className="d-inline-block border rounded-pill py-1 px-4">Resume</p>
                        <h1 className="display-5 mb-4">WHY HIRE ME ?</h1>
                    </div>
                    <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="col-lg-4">
                            <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4 btn-container">
                                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                                    <h3 className="m-0">01. Experience</h3>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                                    <h3 className="m-0">02. Education</h3>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                                    <h3 className="m-0">03. Skills</h3>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                                    <h3 className="m-0">04. About Me</h3>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content w-100">
                                <div className="tab-pane fade show active" id="tab-pane-1">
                                    <div className="row g-4">
                                        <div className="col-md-12">
                                            <h2>My Experience</h2>
                                            <p>Passionate Software Engineer with 1+ year experience in developing web applications, Skilled at writting clear, concise code that is easy to maintain and debug</p>
                                        </div>
                                        <div className="row" style={{ overflowY: 'scroll', maxHeight: '290px' }}>
                                            {
                                                ExperienceData.map((data, index) => {
                                                    return (
                                                        <div className="col-md-6 py-2" key={index}>
                                                            <div className="card card-resume">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{data.ExperienceName}</h5>
                                                                    <a href={data.Company_URL} target="_blank" style={{color : 'white'}}><i className="fa-solid fa-minus pr-2"></i>{data.CompanyName}</a>
                                                                    <p style={{color : 'lightgray', fontSize : '12px'}}><i className="fa-regular fa-clock pr-1"></i> {data.Duration}</p>
                                                                    <p style={{color : 'lightgray', fontSize : '12px'}}><i className="fa-solid fa-location-dot pr-1"></i> {data.Location}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-2">
                                    <div className="row g-4">
                                        <div className="col-md-12">
                                            <h2>My Education</h2>
                                            <p>"Education is the foundation of all we do in life. It shapes who we are and what we aspire to be."</p>
                                        </div>
                                        <div className="row" style={{ overflowY: 'scroll', maxHeight: '290px' }}>
                                            {
                                                EducationData.map((data, index) => {
                                                    return (
                                                        <div className="col-md-6 py-2" key={index}>
                                                            <div className="card card-resume">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{data.EducationName}</h5>
                                                                    <a href={data.Education_URL} target="_blank" style={{color : 'white'}}><i className="fa-solid fa-minus pr-2"></i>{data.EducationInstitute}</a>
                                                                    <p style={{color : 'lightgray', fontSize : '12px'}}><i className="fa-regular fa-clock pr-1"></i> {data.EducationDuration}</p>
                                                                    <p style={{color : 'lightgray', fontSize : '12px'}}><i className="fa-solid fa-location-dot pr-1"></i> {data.InstituteAddress}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-3">
                                    <div className="row g-4">
                                        <div className="col-md-12">
                                            <h2>My Skills</h2>
                                        </div>
                                        <div className="row skill-cards" style={{ overflowY: 'auto', maxHeight: '410px' }}>
                                            {
                                                SkillData.map((data, index) => {
                                                    return (
                                                        <div className="col-6 col-md-3 p-4" key={index}>
                                                            <div className="card" style={{ height: '150px', border: 'ipx solid black' }}>
                                                                <i className={data.skillIcon}></i>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-4">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <h1 className="mb-3">AL ADNAN</h1>
                                            <p className="mb-4">Detail-oriented software developer with Masters in computer science. Good knowledge of front end, backend as well as database technologies, With one year industry experience. Now want explore more and boost the growth of myself and organization.</p>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3" style={{ borderTop: '5px solid red' }}></div>
                                            {
                                                AdnanDetails.map((data, index) => {
                                                    return (
                                                        <p key={index}><i className="fa fa-check text-primary me-3"></i>{data.info}</p>
                                                    )
                                                })
                                            }
                                            <a className="btn btn-lg my-font btn-light rounded custom-btn" href="">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Resume;

