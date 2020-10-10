import React from 'react'
import '../../Styles/Checkout/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../../Context/StateProvider'
import {getBasketTotal} from '../../Context/reducer'

const Subtotal = () => {
  const [{basket},] = useStateValue();
 
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
      value={getBasketTotal(basket)}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
