import React from 'react'
import '../../Styles/Home/Home.css'
import Products from '../Products/Products'
import uuid from 'uuid/dist/v4'

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="" className="home__image"/>

      <div className="home__row">
      <Products id={uuid()} title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price={29.99} imgSrc="https://images-na.ssl-images-amazon.com/images/I/51-cYrw1XpL._AC_SY400_.jpg" rating={4} />
      <Products id={uuid()} title="Everstone Adjustable Tilt TV Wall Mount Bracket for Most 32-80 Inch LED,LCD,OLED" price={15.99} imgSrc="https://images-na.ssl-images-amazon.com/images/I/71yBgKzjDRL._AC_SY450_.jpg" rating={4} />
      </div>
      <div className="home__row">
       <Products id={uuid()} title="
WT2 Language Translator - Supports 40 Languages & 88 Accents" price={139.99} imgSrc="https://images-na.ssl-images-amazon.com/images/I/51mt9IeLPKL._AC_SL1500_.jpg" rating={3} />
       <Products id={uuid()} title="Amada Pure Mole Corrector & Skin Tag Remover and Repair Lotion Set" price={25.99} imgSrc="https://images-na.ssl-images-amazon.com/images/I/71kRIOM4VtL._SL1500_.jpg" rating={5}/>
       <Products id={uuid()} title="
Space Heater, TaoTronics PTC 1500W Fast Quiet Heating Ceramic Tower Heater" price={57.99} imgSrc="https://images-na.ssl-images-amazon.com/images/I/612BW9Oh7YL._AC_SL1300_.jpg" rating={5}/>
      </div>
      <div className="home__row">
       <Products id={uuid()} title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)
" price={356.99} imgSrc="https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SL1457_.jpg" rating={5}/>
      </div>
      </div>
    </div>
  )
}

export default Home
