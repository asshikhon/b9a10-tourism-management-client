import { useLoaderData } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import SpotCard from "../Shared/SpotCard/SpotCard";

const AllTourist = () => {

    const spots = useLoaderData();
    // console.log(spots);

    return (
        <div className="container mx-auto min-h-full text-center mt-10 md:mt-16 lg:mt-20 ">
            <details className="dropdown text-center ">
  <summary className="m-1 btn flex items-center bg-green-400 border-0 text-lg text-white ">Sort By <IoIosArrowDown /></summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100  w-40 rounded-xl">
    <li className="text-base font-semibold rounded-xl text-black bg-white"><a>Average Cost</a></li>

  </ul>
</details>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-10 md:mt-16">

{

spots.map(spot => <SpotCard key={spot._id} spot={spot}>

</SpotCard>)

}


</div>



        </div>
    );
};

export default AllTourist;