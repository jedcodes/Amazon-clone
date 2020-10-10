import React from 'react'
import '../../Styles/Checkout/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../../Context/StateProvider'

const Subtotal = () => {
  const [{basket},] = useStateValue();
  
  let totalPrice = 0;
  for(let item of basket) {
    totalPrice += item.price
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
      renderText={(value) => (
        <React.Fragment>
        <p>Subtotal {`(${basket.length})`}: <strong>{value}</strong></p>
        <small className="subtotal__gift">
        <input type="checkbox"/>This order contains a gift
        </small>
        </React.Fragment>
      )}
      decimalScale={2}
      value={totalPrice}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
