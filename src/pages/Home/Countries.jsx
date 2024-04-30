import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Countries = () => {
const {countryName} = useParams()
    const [countries, setCountries] = useState([])
useEffect( () => {
fetch("https://b9a10-tourism-management-server-mu.vercel.app/countries")
.then(res => res.json())
.then(data => setCountries(data))
}, [])

console.log(countries);

    return (


<div className="mt-12 mb-32">

<h2 className="text-[42px] font-semibold text-center mb-3">Country</h2>
<p className="text-base font-medium text-center  mb-10">Explore diverse cultures and breathtaking landscapes in our Country section. Discover hidden gems, iconic landmarks, and immersive experiences waiting to be explored.</p>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 ">
            


            {
            
            countries.map(country => 
            
                <Link to={`/countries/${countryName}`} key={country._id} className="card bg-base-100 shadow-xl dark:bg-white  dark:text-black h-[520px] ">
                <figure className="px-10 pt-10 rounded-lg">
                  <img  src={country.img} alt="coming soon..." className="rounded-xl h-[300px]" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{country.name}</h2>

              
              <p className='text-lg font-semibold'> {country.description}</p>


                </div>
            
            
            
              </Link>


            )
            
            }


        </div>


</div>


    );
};

export default Countries;