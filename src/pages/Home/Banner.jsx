import banner1 from "../../../src/assets/images/banner1.jpg";

import banner2 from "../../../src/assets/images/banner2.jpg"
import banner3 from "../../../src/assets/images/banner3.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';




const Banner = () => {



    return (
<div className='mb-6 md:mb-10 lg:mb-16'>

<Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={
        {delay:2500}

        }

        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            
        <div className="hero h-auto w-auto md:h-[550px] lg:h-[700px] my-10 md:my-16 lg:my-20 rounded-3xl " style={{backgroundImage: `url(${banner1})`, backgroundSize: 'cover',width:'full'} }>
  <div className="hero-overlay rounded-3xl"></div>
  <div className="hero-content text-center text-neutral-content">
    
  <div>
    
      <h1 className="mb-5 text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]">Explore Diverse Cultures  <br /> with TourismTrek</h1>
      <p className="mb-5 md:px-12 font-medium ">Immerse in a tapestry of traditions, cuisines, and festivities. TourismTrek invites you to discover the  world's rich heritage. <br /> From ancient rituals to modern customs, let cultural exploration be your guide.</p>
      <button className="btn animate__animated animate__flash bg-[#23BE0A] border-0 btn-primary text-white font-bold text-lg">Explore Now</button>
    </div>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide >
            
        <div  className="hero h-auto w-auto md:h-[550px] lg:h-[700px] my-10 md:my-16 lg:my-20 rounded-3xl" style={{backgroundImage: `url(${banner2})`, backgroundSize: 'cover',width:'full'} }>
  <div className="hero-overlay rounded-3xl"></div>
  <div className="hero-content text-center text-neutral-content">
  <div>
    
      <h1  className="mb-5   text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]">Discover Exotic Destinations <br /> with TourismTrek</h1>
      <p className="mb-5 font-medium">Embark on a journey to unearth the world's hidden wonders. TourismTrek leads you to breathtaking landscapes, pristine beaches, <br />  and vibrant cities. Explore exotic destinations and create unforgettable memories.</p>
      <button className="btn animate__animated animate__flash bg-[#23BE0A] border-0 btn-primary text-white font-bold text-lg">Explore Now</button>
    </div>
  </div>
</div>

        </SwiperSlide>
        <SwiperSlide>
            
        <div className="hero h-auto w-auto md:h-[550px] lg:h-[700px] my-10 md:my-16 lg:my-20 rounded-3xl" style={{backgroundImage: `url(${banner3})`, backgroundSize: 'cover',width:'full'} }>
  <div className="hero-overlay rounded-3xl"></div>
  <div className="hero-content text-center text-neutral-content">
  <div>
      <h1 className="mb-5 text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]">Your Journey Starts Here <br /> with TourismTrek</h1>
      <p className="mb-5 font-medium">Begin your adventure of a lifetime with TourismTrek. From iconic landmarks to off-the-beaten-path treasures, <br /> let us be your guide. Your journey starts here, where exploration knows no bounds.</p>
      <button className="btn bg-[#23BE0A] border-0 btn-primary text-white font-bold text-lg">Explore Now</button>
    </div>
  </div>
</div>

        </SwiperSlide>


      </Swiper>



</div>



    );
};

export default Banner;