import { useLoaderData } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import SpotCard from "../Shared/SpotCard/SpotCard";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import allLogo from "../../../src/assets/images/all.png"
import { Helmet } from "react-helmet-async";

const AllTourist = () => {
    const spots = useLoaderData();
    const { loading } = useContext(AuthContext);
    const [appliedSpots, setAppliedSpots] = useState(spots);

    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-gray-900"></div>
            </div>
//   <div className="flex justify-center items-center h-screen">
//   <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-gray-800"></div>
// </div>

        );
    }

    const handleSortByCost = () => {
        const sortedSpots = [...spots].sort((a, b) => a.average - b.average);
        setAppliedSpots(sortedSpots);
    };

    return (
        <div className="container mx-auto min-h-full text-center mt-10 md:mt-16 lg:mt-20 ">
            <Helmet>
                <link rel="shortcut icon" href={allLogo} type="image/x-icon" />
                <title>TourismTrek || All Tourist Spot</title>
            </Helmet>

            <details className="dropdown text-center ">
                <summary className="m-1 btn flex items-center bg-green-400 border-0 text-lg text-white ">Sort By <IoIosArrowDown /></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100  w-40 rounded-xl">
                    <li onClick={handleSortByCost} className="text-base font-semibold rounded-xl text-black bg-white"><a>Average Cost</a></li>
                </ul>
            </details>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-10 md:mt-16">
                {appliedSpots.map(spot => (
                    <SpotCard key={spot._id} spot={spot} />
                ))}
            </div>
        </div>
    );
};

export default AllTourist;
