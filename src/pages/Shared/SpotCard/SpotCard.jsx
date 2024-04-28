import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SpotCard = ({spot}) => {

    const { photoURL, name, average, travel, total, seasonality} = spot;



    return (
        <div>
            
            <div className="card bg-base-100 shadow-xl dark:bg-white dark:text-black h-[520px]">
  <figure className="px-10 pt-10">
    <img src={photoURL} alt="coming soon..." className="rounded-xl h-[300px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <div className='flex justify-between gap-10 items-center text-lg font-semibold'>
<i>Average Cost : {average}$</i>
<i>Total Visitors : {total}</i>
    </div>

<p className='text-lg font-semibold'>Travel Time : {travel}</p>
<p className='text-lg font-semibold'>Seasonality : {seasonality}</p>

    <Link to={`/details/${spot._id}`} className="w-full mt-4">
      <button className="btn w-full border-0 bg-green-400 text-lg text-white font-semibold">View Details</button>
    </Link>
  </div>
</div>

        </div>
    );
};

SpotCard.propTypes = {
spot: PropTypes.object

}

export default SpotCard;