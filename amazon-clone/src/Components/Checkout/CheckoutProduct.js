import React from 'react'
import { useStateValue } from '../../Context/StateProvider'
import '../../Styles/Checkout/CheckoutProduct.css'

const CheckoutProduct = ({id, imgSrc, title, rating, price}) => {
  const [{basket}, dispatch] = useStateValue()

  const removeHandler = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }
  return (
    <div className="checkoutProduct">
      <img src={imgSrc} alt="" className="checkoutProduct__image"/>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
        {Array(rating).fill().map((_, i) => (
            <p key={i}><span role="img" aria-label="Star">🌟</span></p>
          ))}
        </div>
        <button onClick={removeHandler}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
