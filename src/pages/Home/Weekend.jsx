
import bangkok from "../../../src/assets/images/bangkok.png";
import { FaLocationDot } from "react-icons/fa6";

const Weekend = () => {
    return (
        <div className="mt-10 md:mt-16 lg:mt-20">
            <section className="flex justify-between flex-col md:flex-row gap-4">

                <div> 
                    <h2 className="text-[44px] leading-[50px] font-semibold pb-4">Weekend in Southeast Asia,<br /> Thailand</h2>

                    <p className="flex items-center gap-3 pb-4"> <FaLocationDot /> Museum in Thai Ban Mai, Thailand </p>

                    <p className="w-4/5">Experience a vibrant weekend in Southeast Asia as you explore the rich cultural heritage of Thailand. Discover the fascinating Museum in Thai Ban Mai, where history comes to life through captivating exhibits and artifacts. Immerse yourself in the enchanting atmosphere of this ancient land, where every corner tells a story of tradition and innovation.</p>

<button className="btn bg-blue-700 border-0 text-white text-base font-semibold mt-10 rounded-full px-7 "> <i>VIEW DETAILS</i> </button>

                </div>

                <div className="mt-12 md:mt-0">
            
                    <img style={{ width: '1900px', height: '500px', borderRadius: '10px' }} src={bangkok} alt="Bangkok" />
                </div>

            </section>
        </div>
    );
};

export default Weekend;
