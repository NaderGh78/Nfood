import "./home.css";
import {
    HomeCategory,
    HomeHeader,
    OurStory,
    SliderCategories,
    Testimonials
} from "../../allPagesPaths";
import { useTitle } from "../../components/helpers";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const Home = () => {

    useTitle(`Nfood`);

    /*===========================================*/

    return (
        <div className="home">
            <HomeHeader />
            <HomeCategory />
            <SliderCategories />
            <Testimonials />
            <OurStory />
        </div>
    )
}

export default Home;