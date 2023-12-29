"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './airline.css'


const Airline = () => {
  return (
    <div className='airline'>
        <h1 className='grid place-items-center text-2xl font-bold'>Airline Partners</h1>

        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='grid place-items-center'
        >
        <SwiperSlide className='swiper-slide1'>
            <div className="image-container1"></div>
            <div className="image-container2"></div>
            <div className="image-container3"></div>
            <div className="image-container4"></div>
        </SwiperSlide>

        <SwiperSlide className='swiper-slide2'>
        <div className="image-container11"></div>
            <div className="image-container21"></div>
            <div className="image-container31"></div>
            <div className="image-container41"></div>
        </SwiperSlide>

        <SwiperSlide className='swiper-slide3'>
        <div className="image-container12"></div>
            <div className="image-container22"></div>
            <div className="image-container32"></div>
            <div className="image-container42"></div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide4'>
        <div className="image-container13"></div>
            <div className="image-container23"></div>
            <div className="image-container33"></div>
            <div className="image-container43"></div>
        </SwiperSlide>
        


    </Swiper>
    </div>
  )
}

export default Airline