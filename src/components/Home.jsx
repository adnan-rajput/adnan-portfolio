
import HomeHeader from "./HomeHeader";
import HomeHireme from "./HomeHireme";
import HomeAbout from "./HomeAbout";
import HomeService from "./HomService";
import HomeProject from "./HomeProject";
import HomeContact from "./HomeContact"
import ScrollToTop from "./ScrollToTop";

const Home = () => {
    ScrollToTop();

    return (
        <>
            <HomeHeader />
            <HomeHireme />
            <HomeAbout />
            <HomeService />
            <HomeProject />
            <HomeContact />
            
        </>
    )
}
export default Home;