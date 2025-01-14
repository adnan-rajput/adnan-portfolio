import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>

            
            <nav id="navbar" className="navbar navbar-expand-lg bg-white navbar-light  shadow py-lg-0 px-4 px-lg-5">
                <a href="index.html" className="navbar-brand d-block d-lg-none">
                    <h1 className="text-primary fw-bold m-0">Adnan</h1>
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to="/resume" className="nav-item nav-link">Resume</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                    </div>
                    <Link to="/" className="navbar-brand navbar-name py-3 px-4 mx-5 d-none d-lg-block">
                        <h1 className="text-primary fw-bold m-0">Adnan</h1>
                    </Link>
                    <div className="navbar-nav me-auto py-0">
                        <Link to="/project" className="nav-item nav-link">Projects</Link>
                        <Link to="/service" className="nav-item nav-link">Services</Link>
                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
           
        </>
    )
}
export default Navbar;