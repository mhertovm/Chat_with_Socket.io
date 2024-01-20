import React, {useState} from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';
function Login(){
    const navigate = useNavigate();
    const [signin, setSignin] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        surname: '',
    });
    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        console.log(data)
        if(data.login === 'ok'){
            navigate('/home')
            localStorage.setItem('token', data.jwt);
            localStorage.setItem('user_id', data.user_id);
        }
      };
      const handleSubmitRegister = async (e) => {
        e.preventDefault();
        const response = await fetch('/register', {
            method: 'POST',
            body: JSON.stringify({
                name: formData.name,
                surname: formData.surname,
                email: formData.email,
                password: formData.password,
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        console.log(data)
        if(data.registered === 'ok'){
            navigate('/')
        }
      };
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    return(
        <div className="containerLogin">
            <div className={signin ? "wrapper active" : "wrapper"}>
                <div className="form-wrapper signin">
                    <form onSubmit={handleSubmitLogin}>
                    <h1>Sign In</h1><br/>
                    <span>or use your email and password</span>
                    <input type="email" name='email' onChange={handleChange} value={formData.email} placeholder="Email Address" />
                    <input type="password"  name='password' onChange={handleChange} value={formData.password} placeholder="Password" />
                    <p>Forgot Password?</p>
                    <button type='submit'>Sign In</button>
                    </form>
                </div>
                <div className="form-wrapper signup">
                    <form onSubmit={handleSubmitRegister}>
                    <h1>Create Account</h1><br/>
                    <span>or use your email for registeration</span>
                    <input type="name" name='name' onChange={handleChange} value={formData.name} placeholder="Name" />
                    <input type="surname" name='surname' onChange={handleChange} value={formData.surname} placeholder="Surname" />
                    <input type="email" name='email' onChange={handleChange} value={formData.email} placeholder="Email Address" />
                    <input type="password" name='password' onChange={handleChange} value={formData.password} placeholder="Password" />
                    <button type='submit'>Sign Up</button>
                    </form>
                </div>
                <div className="toggle-wrapper">
                    <div className="toggle">
                        <div className="panel right">
                            <h1>Hello, Friend!</h1>
                            <p>Create your Tivotal account to access our services</p>
                            <button className="signupBtn" onClick={()=>{setSignin(true)}}>Sign Up</button>
                        </div>
                        <div className="panel left">
                            <h1>Welcome Back!</h1>
                            <p>Login in into your Tivotal account to access our services</p>
                            <button className="loginBtn" onClick={()=>{setSignin(false)}}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login