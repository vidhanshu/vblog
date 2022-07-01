import { useState } from "react"
import "./authform.scss"
import { FcGoogle } from "react-icons/fc"
import { BsFacebook, BsGithub } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import { useGlobalContext } from "../../contexts/globalcontext"
import { setInputField, onKeyPressed } from "../../utils/utils"
import isEmail from "validator/lib/isEmail"
import isStrongPassword from "validator/lib/isStrongPassword"
import { registrationHandler, loginHandler } from "../../utils/authHandlers"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";

function AuthForm() {
    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(true);
    const { setLoggedInAs, setIsOnline } = useGlobalContext();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const callLoginHandler = () => {
        if (!window.navigator.onLine) {
            return setIsOnline(false);
        }
        loginHandler({ email, password }, setLoggedInAs, navigate);
    }
    const callRegistrationHandler = () => {
        if (!window.navigator.onLine) {
            return setIsOnline(false);
        }
        registrationHandler({ username, password, email }, setLoggedInAs, navigate);
    }

    const handleSubmit = () => {
        if (isLogin) {
            callLoginHandler();
        } else {
            callRegistrationHandler();
        }
    }
    return (
        <motion.div className='auth-form-container'
            initial={{
                scale: 0,
            }}

            animate={{
                scale: 1,
            }}
        >
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
                    {!isLogin &&
                        <input onKeyDown={(e) => onKeyPressed(e.key, handleSubmit, 'Enter')} onChange={(evt) => setInputField(evt.target.value, setUsername)} value={username} type="text" placeholder="Username" className="login-input" />
                    }
                    <input onKeyDown={(e) => onKeyPressed(e.key, handleSubmit, 'Enter')} onChange={(evt) => setInputField(evt.target.value, setEmail)} value={email} type="email" placeholder='Email' className="login-input" />
                    {email &&
                        (
                            isEmail(email)
                                ? <p className="txt-success">correct email</p>
                                : <p className="txt-error">email must include @ and no space</p>
                        )
                    }
                    <input onKeyDown={(e) => onKeyPressed(e.key, handleSubmit, 'Enter')} onChange={(evt) => setInputField(evt.target.value, setPassword)} value={password} type="password" placeholder='Password' className="login-input" />
                    {password &&
                        (
                            isStrongPassword(password)
                                ? <p className="txt-success">strong password</p>
                                : <p className="txt-error">weak strength [min 8 char required] <br />must have 1 (lower, upper, number and special char)</p>
                        )
                    }
                </div>
                {isLogin && <p className="txtL-3 link">Forgot password?</p>}
                <div className="btn-group">
                    {isLogin ?
                        <button className="login-btn" onClick={callLoginHandler}>Login</button>
                        : <button className="login-btn" onClick={callRegistrationHandler}>Register</button>}
                    {isLogin ?
                        <p className="txtL-3 txt-center" >Not registered yet?<span className="link" onClick={() => setIsLogin(false)}> Register</span></p>
                        : <p className="txtL-3 txt-center" >Already have an account?<span className="link" onClick={() => setIsLogin(true)}> Login</span></p>}
                </div>
                <div className="txt">
                    <p className="txtL-3 txt-center">Or</p>
                    <p className="txtL-3 txt-center">Login With</p>
                </div>
                <div className="social-logins">
                    <FcGoogle className="border" style={{
                        fontSize: "30px",
                        backgroundColor: "white",
                        borderRadius: "50%"
                    }} />
                    <BsFacebook className="border" style={{
                        fontSize: "30px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        color: 'rgb(42, 77, 217)',
                    }} />
                    <BsGithub className="border" style={{
                        fontSize: "30px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                    }} />
                    <AiFillTwitterCircle className="border" style={{
                        fontSize: "30px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        color: "rgb(0, 106, 255)",
                    }} />
                </div>
            </div>
        </motion.div>
    )
}

export default AuthForm