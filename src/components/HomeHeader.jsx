import { useTypewriter, Cursor } from "react-simple-typewriter";
const HomeHeader = () => {

    const [text] = useTypewriter({
        words: ['REACT DEVELOPER', 'WORDPRESS DEVELOPER', 'FRONTEND DEVELOPER'],
        loop: {},
    });

    const downloadResume = () =>{
        const aTag = document.createElement('a');
        aTag.href="http://localhost:5173/images/Adnan.pdf";
        aTag.setAttribute("download" , "Adnan.pdf");
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    return (

        <header id="home" className="header">
            <div className="overlay"></div>
            <div className="header-content container">
                <h1 className="header-title">
                    <span className="up">Hi!</span>
                    <span className="down">I am <span style={{ color: "#2a1a5e" }}>Adnan</span></span>
                </h1>
                <p className="header-subtitle auto-type"><span>{text}<Cursor /></span></p>
                <button onClick={downloadResume}  className="btn btn-lg my-font btn-light rounded custom-btn">Resume <span className="pl-1" style={{fontSize : '16px'}}><i className="fa-solid fa-arrow-down"></i></span></button>
                <br />
                <a href="https://www.instagram.com/_.a_d_i_____/?igsh=ZzhzOXQydm44azc%3D" target="_blank" className="btn btn-social mx-2"><i className="fa-brands fa-square-instagram"></i></a>
                <a href="https://www.linkedin.com/in/Al-Adnan/" className="btn btn-social mx-2" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#" className="btn btn-social mx-2"><i className="fa-brands fa-github"></i></a>
                <a href="#" className="btn btn-social mx-2"><i className="fa-brands fa-twitter"></i></a>
            </div>
        </header>

    )
}

export default HomeHeader;