
import { Link, useLoaderData } from "react-router-dom";



const TouristsSpots = () => {

    const spots = useLoaderData()

 

    return (
        <div className="my-10 md:my-16 lg:my-20 ">
          
<div className="text-center mb-12">

<h2 className="text-3xl md:text-[42px] font-bold">Tourists Spots</h2>
<p className="text-base font-medium mt-5">
Discover captivating tourist spots worldwide. Immerse in culture, explore nature, and create unforgettable memories. Your adventure starts here. Explore now!</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 ">

{

spots.slice(0, 6).map(spot => 
    <div key={spot._id} className="card bg-base-100 shadow-xl dark:bg-white  dark:text-black h-[520px] ">
    <figure className="px-10 pt-10">
      <img src={spot.photoURL} alt="coming soon..." className="rounded-xl h-[300px]" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{spot.name}</h2>
      <div className='flex justify-between gap-10 items-center text-lg font-semibold'>
  <i>Average Cost : {spot.average}$</i>
  <i>Total Visitors : {spot.total}</i>
      </div>
  
  <p className='text-lg font-semibold'>Travel Time : {spot.travel}</p>
  <p className='text-lg font-semibold'>Seasonality : {spot.seasonality}</p>
  
      <Link to={`/details/${spot._id}`} className="w-full mt-4">
        <button className="btn w-full border-0 bg-green-400 text-lg text-white font-semibold">View Details</button>
      </Link>
    </div>



  </div>
)

}

</div>

<div className="flex justify-center items-center">
  <Link to="/allTourists" className="btn w-[20%] mt-8 md:mt-12 bg-green-400 border-0 text-center text-white text-lg flex justify-center items-center">See All Spots</Link>
</div>


        </div>
    );
};

export default TouristsSpots;