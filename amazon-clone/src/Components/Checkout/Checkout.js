import React from 'react'
import '../../Styles/Checkout/Checkout.css'
import Subtotal from './Subtotal'

const Checkout = () => {
  return (
    <div className="checkout">
    <div className="checkout__left">
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/img17/prime/other/1053033_us_prime_dex_vxd-1060_DEX_LP_Banner_DT_v1.png" alt="" className="checkout__ad"/>

      <div>
        <h2 className="checkout__title">Your shopping basket</h2>
      </div>
    </div>
    <div className="checkout__right">
     <Subtotal />
    </div>
    </div>
  )
}

export default Checkout
