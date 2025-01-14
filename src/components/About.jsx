import Breadcrumbs from "./Breadcrumbs";
import HomeAbout from "./HomeAbout";
import ScrollToTop from "./ScrollToTop";
const About = () => {
        ScrollToTop();
    return(
        <>
            <Breadcrumbs heading="About"/>
            <HomeAbout />
        </>
    )
}
export default About;