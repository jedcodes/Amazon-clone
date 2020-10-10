import React from 'react'
import { useStateValue } from '../../Context/StateProvider'
import '../../Styles/Checkout/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

const Checkout = () => {
  const [{basket, user}, dispatch] = useStateValue()
  return (
    <div className="checkout">
    <div className="checkout__left">
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/img17/prime/other/1053033_us_prime_dex_vxd-1060_DEX_LP_Banner_DT_v1.png" alt="" className="checkout__ad"/>

      <div>
      <h3>Hello, {user?.email}</h3>
        <h2 className="checkout__title">Your shopping basket</h2>
        {basket.map(item => (
          <CheckoutProduct  id={item.id} imgSrc={item.imgSrc} title={item.title} rating={item.rating} price={item.price} />
        ))}
      </div>
    </div>
    <div className="checkout__right">
     <Subtotal />
    </div>
    </div>
  )
}

export default Checkout
