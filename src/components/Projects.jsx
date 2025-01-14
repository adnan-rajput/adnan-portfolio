import Breadcrumbs from "./Breadcrumbs"
import HomeProject from "./HomeProject"
import ScrollToTop from "./ScrollToTop"

const Projects = () =>{
    ScrollToTop();
    return(
        <>
            <Breadcrumbs heading="Projects"/>
            <HomeProject />
        </>
    )
}
export default Projects