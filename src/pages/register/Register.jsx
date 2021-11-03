import {useState, useRef} from 'react';
import './register.scss';

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value)
  }
  const handleFinish = () => {
    setPassword(passwordRef.current.value)
  }

  return (
    <div className='register'>
      <div className='top'>
       <div className='wrapper'>
          <img
          className='logo'
          src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
          alt=''
          />
          <button className='loginButton'> Sign In </button>
        </div>
      </div>
      <div className='container'>
        <h1>Watch movies and TV shows here</h1>
        <h2>U watch nao! Please enjoy.</h2>
        <p>
          cnbheub cxiubcu recjb dj chf
          ejckefi hcaj ebcfehc fgcygfe dglkahcvy
        </p>
        {!email ?
          (
          <div className='input'>
            <input type='email' placeholder='email address' ref={emailRef}/>
            <button className='registerButton' onClick={handleStart}>Get started</button>
          </div>
          )
        :
          (
          <form className='input'>
            <input type='password' placeholder='password' ref={passwordRef}/>
            <button className='registerButton' onClick={handleFinish}>Register</button>
          </form>
          )
        }
      </div>
    </div>
)
}

export default Register
