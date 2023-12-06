import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import Image1 from "./assets/slider1.jpg";
import Image2 from "./assets/slider2.jpg";
import "../components/About.css";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const Main = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false
        // }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide style={{ position: "relative" }}>
          <div className='about-children'>
            <p style={{fontSize: "35px"}}>𝒞𝑒𝓁𝒾𝓃𝑒 ℛ𝒾𝒸𝒽𝒶𝓇𝒹𝓈𝑜𝓃,14 𝓎𝑒𝒶𝓇𝓈 𝑜𝓁𝒹</p>
            <h2 style={{fontSize: "40px", marginBottom: "10px"}}><b>NEEDS A CARING PARENTS</b></h2>
            <p style={{fontSize: "24px", maxWidth: "700px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deserunt quam dicta omnis praesentium.</p>
            <button style={{marginTop:20}}>ADOPT HER NOW!</button>
          </div>

          <div style={{width: "100%", height: "100%"}}>
          <img src={Image1} alt="salam" style={{ width: "100%",height: "800px", objectFit:"cover"}} />
          </div>
        </SwiperSlide>
        
        <SwiperSlide style={{position: "relative"}}>
        <div className='about-children'>
            <p style={{fontSize: "35px", color: "#fff"}}>ℳ𝒶𝓇𝓀 ℛ𝑜𝒹𝓇𝒾𝑔𝓊𝓏𝑒𝓇𝒹, 12 𝓎𝑒𝒶𝓇𝓈 𝑜𝓁𝒹</p>
            <h2 style={{fontSize: "40px", marginBottom: "10px", color: "#fff"}}><b>NEEDS A CARING PARENTS</b></h2>
            <p style={{fontSize: "24px", maxWidth: "700px", color: "#fff"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deserunt quam dicta omnis praesentium.</p>
            <button style={{marginTop:20}}>ADOPT HIM NOW!</button>
          </div>
          <div style={{width: "100%", height: "100%"}}>
          <img src={Image2} alt="salam" style={{ width: "100%",height: "800px", objectFit:"cover"}} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}


export default Main