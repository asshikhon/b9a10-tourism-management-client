import Banner from "./Home/Banner";
import logoHome from "../../src/assets/images/home.png"
import { Helmet } from "react-helmet-async";
import TouristsSpots from "./Home/TouristsSpots";
import Countries from "./Home/Countries";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto px-3 md:px-0">
            <Helmet>
<link rel="icon" type="image/svg+xml" href={logoHome} />
<title>TourismTrek || Home</title>
</Helmet>
         <Banner></Banner>
         <TouristsSpots></TouristsSpots>
         <Countries></Countries>
        </div>
    );
};

export default Home;