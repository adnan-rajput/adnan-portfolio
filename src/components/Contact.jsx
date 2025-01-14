import Breadcrumbs from "./Breadcrumbs";
import HomeContact from "./HomeContact";
import ScrollToTop from "./ScrollToTop";

const Contact = () => {

    ScrollToTop();
    return(
        <>
            <Breadcrumbs heading="Contact"/>
            <HomeContact/>
        </>
    )
}
export default Contact;