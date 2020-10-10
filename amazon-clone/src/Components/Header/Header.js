import React from 'react'
import '../../Styles/Header/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import {useStateValue} from '../../Context/StateProvider'


const Header = () => {
  const [{basket},] = useStateValue()
  return (
    <div className="header">
     <Link to="/"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png" alt="" className="header__logo"/></Link>
      <div className="header__search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">
            Hello Guest
          </span>
          <span className="header__optionLineTwo">
            Sign In
          </span>
        </div>
        <div className="header__option">
        <span className="header__optionLineOne">
            Returns 
          </span>
          <span className="header__optionLineTwo">
           & Orders
          </span>
        </div>
        <div className="header__option">
        <span className="header__optionLineOne">
            Your
          </span>
          <span className="header__optionLineTwo">
           Prime
          </span>
        </div>
        <Link to="/checkout">
        <div className="header__optionBasket">
        <ShoppingCartIcon />
        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
