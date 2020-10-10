import React, {useState} from 'react'
import '../../Styles/SignIn/SignIn.css'
import {Link, useHistory} from 'react-router-dom'
import {auth} from '../../Firebase/firebase'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

const signinHandler = event => {
  event.preventDefault()
  auth.signInWithEmailAndPassword(email, password)
  .then((auth) => {
    if(auth) {
      history.push('/')
    }
  })
  .catch(error => console.error(error))

}

const registerHandler = event => {
  event.preventDefault()
  auth.createUserWithEmailAndPassword(email, password)
  .then((auth) => {
    console.log(auth)
    if(auth) {
      history.push('/')
    }
  })
  .catch(error => console.error(error))
}

  return (
    <div className="signin">
     <Link to="/">
     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png" alt="" className="signin__logo"/>
     </Link>

     <div className="signin__container">
      <h1>Sign In</h1>
      <form action="">
        <h5>E-mail</h5>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        <h5>Password</h5>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={signinHandler} className="signin__button" type="submit">Sign In</button>
      </form>
      <p>By signing-in you agree to the AMAZON CLONE Conditions</p>
      <button onClick={registerHandler} className="signin__registerButton">Create your Amazon Account</button>
     </div>
    </div>
  )
}

export default SignIn
