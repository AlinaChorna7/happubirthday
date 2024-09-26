

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import img1 from '../public/img/5420172105791693716.jpg'
import img2 from '../public/img/5420172105791693711.jpg'
import img3 from '../public/img/5420172105791693713.jpg'
import img4 from '../public/img/5420172105791693712.jpg'
import img5 from '../public/img/5420172105791693714.jpg'
import img6 from '../public/img/5420172105791693715.jpg'
import img7 from '../public/img/5424750747087658475.jpg'
import img8 from '../public/img/5424750747087658476.jpg'
import img9 from '../public/img/5424750747087658477.jpg'
import img10 from '../public/img/5424750747087657689.jpg'
import img11 from '../public/img/5424750747087657686.jpg'


import './App.css'

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1}/></SwiperSlide>
        <SwiperSlide><img src={img2}/></SwiperSlide>
        <SwiperSlide><img src={img10}/></SwiperSlide>
        <SwiperSlide><img src={img3}/></SwiperSlide>
        <SwiperSlide><img src={img4}/></SwiperSlide>
        <SwiperSlide><img src={img5}/></SwiperSlide>
        <SwiperSlide><img src={img6}/></SwiperSlide>
        <SwiperSlide><img src={img7}/></SwiperSlide>
        <SwiperSlide><img src={img11}/></SwiperSlide>
        <SwiperSlide><img src={img8}/></SwiperSlide>
        <SwiperSlide><img src={img9}/></SwiperSlide>
      </Swiper>
    </>
  );
}
