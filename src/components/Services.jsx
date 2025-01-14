import Breadcrumbs from "./Breadcrumbs";
import HomeService from "./HomService";
import ScrollToTop from "./ScrollToTop";

const Services = () => {
    ScrollToTop();
    return(
        <>
            <Breadcrumbs heading="Services"/>
            <HomeService />
        </>
    )
}
export default Services;