import { useLoaderData, useParams } from "react-router-dom";


const SpotCardDetails = () => {

    const cards = useLoaderData();
    const { _id } = useParams();
 
    const card = cards.find((card) => card.id == _id);


    console.log( cards, card);
  

    return (
        <div>
            <h2 className="text-3xl">details:</h2>
        </div>
    );
};

export default SpotCardDetails;