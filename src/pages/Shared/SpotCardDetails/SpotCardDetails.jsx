import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";


const SpotCardDetails = () => {

    const cards = useLoaderData();
    const { _id } = useParams();
    const { loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }
    const card = cards.find(card => String(card.id) === String(_id));


    console.log( card);
  

    return (
<div className="flex flex-col container mx-auto p-6 space-y-6 overflow-hidden rounded-lg lg:mt-6">


<img src={card.photoURL} alt="" className="rounded-3xl hover:scale-105 hover:delay-130 w-[110vh] mb-4 max-h-[600px]" />




	<div >

	<i className="card-title lg:text-3xl text-[#23BE0A] items-center pb-4">Location : {card.location}</i>

    <div className="flex items-center justify-between text-lg lg:text-2xl font-semibold gap-4 my-6">
<i>Country : {card.country}</i>

    </div>

    <div className="mt-3leading-10 ">
<span className="text-xl font-semibold">Seasonality : {card.seasonality}</span>


    <div className="flex items-center justify-between text-xl font-semibold gap-8 mb-3 mt-4">
<i> Travel time : {card.travel}</i>
    </div>
    <div className="flex items-center justify-between text-xl font-semibold gap-8 mb-3 mt-4">
<i> Total Visitors Per Year : {card.total}</i>
    </div>

<h2 className="text-xl animate__animated animate__bounceIn my-5 font-semibold">Average Cost : <span className="bg-orange-600 ml-5 text-white px-6 py-2 rounded-xl">{card.average}$</span></h2>

</div>





		<p className="text-base animate__animated animate__backInDown text-gray-600 font-medium">{card.description}</p>
	


	</div>
</div>
    );
};

export default SpotCardDetails;