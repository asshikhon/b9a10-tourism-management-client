import { useLoaderData } from "react-router-dom";


const TouristsSpots = () => {

    const spots = useLoaderData()
   

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-10 md:mt-16">
          
{

// spots.map(spot => 

// )

}


        </div>
    );
};

export default TouristsSpots;