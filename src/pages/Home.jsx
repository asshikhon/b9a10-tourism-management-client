import Banner from "./Home/Banner";
import logoHome from "../../src/assets/images/home.png"
import { Helmet } from "react-helmet-async";
import TouristsSpots from "./Home/TouristsSpots";
import Countries from "./Home/Countries";
import CoreFeatures from "./Home/CoreFeatures";
import Weekend from "./Home/Weekend";
import { AuthContext } from "../providers/AuthProviders";
import { useContext } from "react";

const Home = () => {
    const {loading} = useContext(AuthContext)

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 text-center min-h-full mx-auto"></div>;
      }
    return (
        <div className="container mx-auto px-3 md:px-0">
            <Helmet>
<link rel="icon" type="image/svg+xml" href={logoHome} />
<title>TourismTrek || Home</title>
</Helmet>
         <Banner></Banner>
         <TouristsSpots></TouristsSpots>
         <Countries></Countries>
         <Weekend></Weekend>
         <CoreFeatures></CoreFeatures>
        </div>
    );
};

export default Home;