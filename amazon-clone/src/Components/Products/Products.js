import React from 'react'
import { useStateValue } from '../../Context/StateProvider'
import '../../Styles/Products/Products.css'

const Products = ({id,title, price, imgSrc, rating}) => {
  const [, dispatch] = useStateValue()

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        imgSrc: imgSrc,
        price: price,
        rating: rating
      }
    })

  }

  return (
    <div className="products">
      <div className="products__info">
        <p>{title}</p>
        <p className="products__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="products__rating">
          {Array(rating).fill().map((_, i) => (
            <p><span role="img" aria-label="Star">🌟</span></p>
          ))}
        </div>
      </div>
      <img src={imgSrc} alt={title}/>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Products
