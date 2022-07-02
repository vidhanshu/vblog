import axios from "axios"
import { isOnline } from "../utils/utils"
import { warningCustom } from "../utils/notifications"
import { BACKEND_URL } from "../constants/constant"
/*****************POST*******************/
export const register = async (data) => {
    if (!isOnline()) {
        warningCustom("You are offline. Please connect to the internet to register.")
        return { error: "No internet connection" }
    }
    try {
        const res = await axios({
            url: `${BACKEND_URL}/user/register`,
            method: "POST",
            data
        })
        if (res.data) {
            return res.data;
        }
    } catch (error) {
        return { error: error.message };
    }
}

export const login = async (data) => {
    if (!isOnline()) {
        warningCustom("You are offline. Please connect to the internet to login.")
        return { error: "No internet connection" }
    }
    try {
        const res = await axios({
            url: `${BACKEND_URL}/user/login`,
            method: "POST",
            data
        })
        if (res.data) {
            return res.data;
        }
    } catch (error) {
        return { error: error.message };
    }
}

export const logout = async (token) => {
    if (!isOnline()) {
        warningCustom("You are offline. Please connect to the internet to logout.")
        return { error: "No internet connection" }
    }
    try {
        await axios({
            url: `${BACKEND_URL}/user/logout`,
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return { user: "done" };
    } catch (error) {
        return { error: error.message };
    }
}