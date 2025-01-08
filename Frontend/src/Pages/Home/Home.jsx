import React from 'react'
import SimpleSwiper from '../../Components/Swiper/Swiper';
import Slider from "../../Components/ProductSlider/Slider"
import FeatureBadge from '../../Components/Badge/FeatureBadge';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import Footer from '../../Components/Footer/Footer'

const Home = ({handleCart}) => {
  return (
    <>
    <SimpleSwiper></SimpleSwiper>
    <Slider handleCart={handleCart}></Slider>
    <FeatureBadge></FeatureBadge>
    <NewsLetter></NewsLetter>
    <Footer></Footer>
    </>
  )
}

export default Home