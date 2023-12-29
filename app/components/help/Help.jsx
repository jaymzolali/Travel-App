"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import './help.css';

const Help = () => {
  return (
    <div className='help mb-6 mt-10 pb-8'>
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
                <SwiperSlide className='help1 grid place-items-center'>
                    <div className="help-img1"></div>
                    <h3 className='font-bold text-sm'>Southeast Asia Travel Expert</h3>
                    <p className='text-center text-sm'>Founded in Southeast Asia, we offer extensive <br />
                    inventory in favourite destinations like Bali, <br />
                    Singapore, Kuala Lumpur and Bangkok.</p>
                </SwiperSlide>
                
                <SwiperSlide className='help2 grid place-items-center'>
                    <div className="help-img2"></div>
                    <h3 className='font-bold text-sm'>All-in-one Travel Platform</h3>
                    <p className='text-center text-sm'>We have all your traveling needs: hotels, flight, <br />and airport transportation. Pack your bags and lets <br />begin our journey together!</p>
                </SwiperSlide>

                <SwiperSlide className='help3 grid place-items-center'>
                    <div className="help-img3"></div>
                    <h3 className='font-bold text-sm'>Convenient Member Benefits</h3>
                    <p className='text-center text-sm'>Saved List and Flight Price Alert allows you to keep <br />track of favourite items and monitor airfare <br />changes. No need to enter the same passenger <br /> details every time you book, thanks to passenger <br />Quick Pick. Discover mre Travel-App member <br />benefits by joining us now!</p>
                </SwiperSlide>

                <SwiperSlide className='help4 grid place-items-center'>
                    <div className="help-img4"></div>
                    <h3 className='font-bold text-sm'>24/7 Help Center</h3>
                    <p className='text-center text-sm'>Our Customer Service is working around the <br />clock to assist you in every step of the booking <br />process.</p>
                </SwiperSlide>

            </Swiper>
    </div>
  )
}

export default Help