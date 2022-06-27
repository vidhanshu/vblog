import "./authform.scss"
import { FcGoogle } from "react-icons/fc"
import { BsFacebook, BsGithub } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import { useState } from "react"

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className='auth-form-container'>
            <div className="image-container">
            </div>
            <div className="form-container">
                <div className="firm-title">
                    <p className="txtB-1">
                        {isLogin ? 'Login' : 'Registration'}
                    </p>
                    <p className="txtL-2">
                        {isLogin ? 'Please login to continue' : 'Please register to continue'}
                    </p>
                </div>
                <div className="form">
                    {!isLogin && <input type="text" placeholder="Username" className="login-input" />}
                    <input type="email" placeholder='Email' className="login-input" />
                    <input type="password" placeholder='Password' className="login-input" />
                </div>
                {isLogin && <p className="txtL-3 link">Forgot password?</p>}
                <div className="btn-group">
                    {isLogin ? <button className="login-btn" onClick={() => { }}>Login</button>
                        : <button className="login-btn" onClick={() => { }}>Register</button>}
                    {isLogin ? <p className="txtL-3 txt-center" >Not registered yet?<span className="link" onClick={() => setIsLogin(false)}> Register</span></p>
                        : <p className="txtL-3 txt-center" >Already have an account?<span className="link" onClick={() => setIsLogin(true)}> Login</span></p>}
                </div>
                <div className="txt">
                    <p className="txtL-3 txt-center">Or</p>
                    <p className="txtL-3 txt-center">Login With</p>
                </div>
                <div className="social-logins">
                    <FcGoogle style={{
                        fontSize: "30px",
                        backgroundColor: "white",
                        borderRadius: "50%"
                    }} />
                    <BsFacebook style={{
                        fontSize: "30px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        color: 'rgb(42, 77, 217)',
                    }} />
                    <BsGithub style={{
                        fontSize: "30px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                    }} />
                    <AiFillTwitterCircle style={{
                        fontSize: "30px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        color: "rgb(0, 106, 255)",
                    }} />
                </div>
            </div>
        </div>
    )
}

export default AuthForm