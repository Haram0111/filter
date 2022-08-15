import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlideBanner() {
    
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };
     
    return(
        <Slider {...settings}>
            <img src="https://atimg.sonyunara.com/files/attrangs/new_banner/1659947116_0.jpg"/>
            <img src="https://atimg.sonyunara.com/files/attrangs/new_banner/1660384704_0.jpg.webp"/>
            <img src="https://atimg.sonyunara.com/files/attrangs/new_banner/1659947116_0.jpg"/>
        </Slider>
    );
}

export default SlideBanner;
