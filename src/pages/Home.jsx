import Banner from "./Home/Banner";
import logoHome from "../../src/assets/images/home.png"
import { Helmet } from "react-helmet-async";
import TouristsSpots from "./Home/TouristsSpots";
import Countries from "./Home/Countries";
import Popular from "./Home/Popular";
import CoreFeatures from "./Home/CoreFeatures";

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
         <Popular></Popular>
         <CoreFeatures></CoreFeatures>
        </div>
    );
};

export default Home;