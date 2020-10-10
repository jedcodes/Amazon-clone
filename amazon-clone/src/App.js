import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import {Switch, Route} from 'react-router-dom'
import Checkout from './Components/Checkout/Checkout'

const App = () => {
  return (
    <div className="app">
    <Header />
      <Switch>
     <Route exact path="/" component={Home} />
      <Route exact path="/checkout" component={Checkout}/>
      </Switch>
    </div>
  )
}

export default App
