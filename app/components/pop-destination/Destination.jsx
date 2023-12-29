"use client";
import './destination.css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Destination = () => {
  return (
    <div className='destination'>
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='grid place-items-center'
        >
        <SwiperSlide className='dest-swipe1'>
            <h1 className='dest-head grid place-items-center font-bold text-sm mt-11'>Popular Destination Hotel</h1>
            <div className="blue"></div>
            <div className="deed1">
                <div className="line1">
                    <h3>London Hotels</h3>
                    <h3>Edinburgh Hotels</h3> 
                </div>
                    <hr />
                <div className="line1">
                    <h3>Paris Hotels</h3>
                    <h3>Manchester Hotels</h3> 
                </div>
                    <hr />
                <div className="line1">
                    <h3>Hamburger Hotels</h3>
                    <h3>Barcelona Hotels</h3> 
                </div>
                    <hr />
                <div className="line1">
                    <h3>Rome Hotels</h3>
                    <h3>Berlin Hotels</h3> 
                </div>
                    <hr />
                <div className="line1">
                    <h3>Bernidom Hotels</h3>
                    <h3>Milan Hotels</h3> 
                </div>
                    <hr />
                <div className="line1">
                    <h3>Madrid Hotels</h3>
                    <h3>Venice Hotels</h3> 
                </div>
                    <hr />
                <div className="line1">
                    <h3>Dresden Hotels</h3>
                    <h3>Nice Hotels</h3> 
                </div>
                    <hr />
                <div className="line1">
                    <h3>Bordeaux Hotels</h3>
                    <h3></h3> 
                </div>
                    <hr />
            </div>
        </SwiperSlide>


        <SwiperSlide className='dest-swipe2'>
            <h1 className='dest-head grid place-items-center font-bold text-sm mt-11'>Popular Landmarks</h1>
            <div className="blue"></div>
            <div className="deed1">
            <div className="line1">
                    <h3>The Shard</h3>
                    <h3>Thorpe Park</h3> 
                </div>
                    <hr />
                <div className="line1">
                    <h3>Paddington station</h3>
                    <h3>Eiffle Tower</h3> 
                </div>
                    <hr />
                <div className="line1">
                    <h3>Pantheon</h3>
                    <h3>Neuschwanstein</h3> 
                </div>
                    <hr />
                <div className="line1">
                    <h3>Las Ramblas</h3>
                    <h3>Drayton Park</h3> 
                </div>
                    <hr />
                <div className="line1">
                    <h3>Colosseum</h3>
                    <h3>Trevi Fountain</h3> 
                </div>
                    <hr />
                <div className="line1">
                    <h3>Elysees Park</h3>
                    <h3>Warner Bro. Tour</h3> 
                </div>
                    <hr />
                <div className="line1">
                    <h3>Santiago Stadium</h3>
                    <h3>Prado Museum</h3> 
                </div>
                    <hr />
            </div>
        </SwiperSlide>

        
        


    </Swiper>
    </div>
  )
}

export default Destination