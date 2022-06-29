import { isAllNonEmpty } from "./utils"
import { login, logout, register } from "../api/authRequests"
import isEmail from "validator/lib/isEmail"
import isStrongPassword from "validator/lib/isStrongPassword"
import { successLogin, failedLogin, successRegister, failedRegister, fillAllDetails, successCustom, failureCustom, successLogout, failedLogout } from "./notifications"

export const registrationHandler = async (data, setLoggedInAs, navigate) => {

    const { email, password, username } = data;

    if (isAllNonEmpty([email, password, username]) && isEmail(email) && isStrongPassword(password)) {

        const response = await register(data);

        if (response.result) {
            successCustom(response.result);
        }
        else if (response.error) {
            failedRegister();
        }
        else {
            window.localStorage.setItem("auth", JSON.stringify(response));
            setLoggedInAs(response);
            successRegister();
            navigate("/")
        }
    }
    else {
        fillAllDetails();
    }
}

export const loginHandler = async (data, setLoggedInAs, navigate) => {
    const { email, password, username } = data;

    if (!isAllNonEmpty([email, password, username]) && isEmail(email) && isStrongPassword(password)) {

        const response = await login(data);

        if (response.user) {
            window.localStorage.setItem("auth", JSON.stringify(response));
            successLogin()
            setLoggedInAs(response);
            navigate("/");
        }
        else {
            failureCustom(response.error.message)
            console.log(response)
        }
    }
    else {
        fillAllDetails();
    }
}


export const logoutHandler = async (token,setLoggedInAs, navigate) => {

    const response = await logout(token);

    if (response.user) {
        window.localStorage.removeItem("auth");
        successLogout()
        setLoggedInAs({});
        navigate("/auth")
    }
    else {
        failedLogout()
        console.log(response)
    }
}