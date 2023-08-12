/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import "./hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";


import Pic from '../../assets/ModernBankC1.jpg'
import Pic1 from '../../assets/ModernBankC2.jpg'
import Pic2 from '../../assets/ModernBankC3.jpg'
import Pic3 from '../../assets/ModernBankC4.jpg'


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Hero = () => {
  

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <section id="hero">
      <div className="container">
        <div className="greetings mt-5">
          <h3>{`Welcome ${userInfo?.findUser.firstName},`}</h3>
        </div>
        <div className="hero-slider mt-4">
          <Swiper
          slidesPerView={1}
           navigation={true} 
           loop={true}
           autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
           modules={[Navigation,Autoplay]} 
           className="mySwiper"
           >
            <SwiperSlide><img src={Pic}></img></SwiperSlide>
            <SwiperSlide><img src={Pic1}></img></SwiperSlide>
            <SwiperSlide><img src={Pic2}></img></SwiperSlide>
            <SwiperSlide><img src={Pic3}></img></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
