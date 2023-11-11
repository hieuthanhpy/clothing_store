import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, EffectFade} from 'swiper/modules';

export default function Carousel() {
  return (
    <div className="w-full bg-zinc-200 h-screen justify-center flex">
      <Swiper 
      className="w-80"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect={'fade'}
        modules={[Pagination, Navigation, EffectFade]}
      >
        <SwiperSlide>
            <div className="overflow-hidden  bg-slate-50 w-80 h-full relative ">
              <a href="/sign_in" className=" absolute text-yellow-900 top-4 left-64  font-medium">skip</a>
              <p className="inline-block mt-4 text-zinc-200 left-6 text-3xl relative font-sans">Insightlancer</p>
              
              <img className="z-10 relative h-96 w-80 top-2" src="src\assets\images\onboarding-screen-1.png" alt="image description"></img>
              <div className="bg-white top-2 rounded-t-2xl relative w-full h-screen ">
                <div className="font-sans top-2 relative text-3xl font-bold text-center">
                  <div className="text-yellow-900 font-sans inline">
                    Seamless&nbsp;
                  </div>
                    Shopping Experience
                </div>
                <div className="top-2 text-xs relative p-2 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing edit, sed do eiusmod tempor incididunt
                </div>
                <p className=" top-32 text-zinc-200 left-32 text-3xl absolute ">Insightlancer</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="overflow-hidden  bg-slate-50 w-80 h-full relative ">
              <a href="/sign_in" className=" absolute text-yellow-900 top-4 left-64  font-medium">skip</a>
              <p className="inline-block mt-4 text-zinc-200 left-6 text-3xl relative font-sans">Insightlancer</p>
              
              <img className="z-10 relative h-96 w-80 top-2" src="src\assets\images\onboarding-screen-2.png" alt="image description"></img>
              <div className="bg-white top-2 rounded-t-2xl relative w-full h-screen ">
                <div className="font-sans top-2 relative text-2xl font-bold text-center">
                    Wishlist: Where
                  <div className="text-yellow-900 font-sans inline">
                    &nbsp;Fashion Dreams&nbsp;
                  </div>
                    Begin
                </div>
                <div className="top-2 text-xs relative p-2 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing edit, sed do eiusmod tempor incididunt
                </div>     
                <p className=" top-32 text-zinc-200 left-32 text-3xl absolute ">Insightlancer</p>                
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="overflow-hidden  bg-slate-50 w-80 h-full relative ">
              <a href="/sign_in" className=" absolute text-yellow-900 top-4 left-64  font-medium">skip</a>
              <p className="inline-block mt-4 text-zinc-200 left-6 text-3xl relative font-sans">Insightlancer</p>
              
              <img className="z-10 relative h-96 w-80 top-2" src="src\assets\images\onboarding-screen-3.png" alt="image description"></img>
              <div className="bg-white top-2 rounded-t-2xl relative w-full h-screen ">
                <div className="font-sans top-2 relative text-3xl font-bold text-center">
                  <div className="text-yellow-900 font-sans inline">
                    Swift&nbsp;
                  </div>
                    and
                  <div className="text-yellow-900 font-sans inline">
                    &nbsp;Reliable
                    <br></br>
                  </div>
                    Delivery
                </div>
                <div className="top-2 text-xs relative p-2 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing edit, sed do eiusmod tempor incididunt
                </div>
               <p className=" top-32 text-zinc-200 left-32 text-3xl absolute ">Insightlancer</p>
                
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
