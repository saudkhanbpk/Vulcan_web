import React from 'react'
import './Login.scss'
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../config/config";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const signIn = (e) => {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((respounse) => {
  //       console.log(respounse);
  //       alert("Login Successfully")
  //     })
  //     .catch((err) => {
  //       alert(err)
  //       console.log(err)
  //     })

  // }

  return (
    <>
      {/* <div className='sign-in-container'>

        <h3>Login</h3>
        <form onSubmit={signIn}>
          <input
            type="email"
            placeholder='Enter Your Email'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder='Enter Your Password'
            name='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type='submit'>Login</button>


        </form>
      </div> */}
      <div className="div"></div>

    </>
  )
}

export default Login;