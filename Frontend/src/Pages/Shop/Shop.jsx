import React from 'react'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import Footer from '../../Components/Footer/Footer'
import ShopPoster from '../../Components/ShopPoster/ShopPoster'
import FilterProducts from '../../Components/FilterProducts/FilterProducts'

const Shop = ({handleCart}) => {
  return (
    <>
    <ShopPoster></ShopPoster>
    <FilterProducts handleCart = {handleCart}/>
    <NewsLetter></NewsLetter>
    <Footer></Footer>
    </>
  )
}

export default Shop