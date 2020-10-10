import React, {useEffect} from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import {Switch, Route} from 'react-router-dom'
import Checkout from './Components/Checkout/Checkout'
import SignIn from './Components/SignIn/SignIn'
import {auth} from './Firebase/firebase'
import {useStateValue} from './Context/StateProvider'

const App = () => {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('USER IS:', authUser)
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <div className="app">
    
      <Switch>
      <Route path="/signin" component={SignIn} />
     <Route exact path="/">
     <Header />
     <Home />
     </Route>
      <Route exact path="/checkout">
      <Header />
      <Checkout />
      </Route>
      </Switch>
    </div>
  )
}

export default App
