import axios from "axios"
import { isOnline } from "../utils/utils"
import { warningCustom } from "../utils/notifications"

/*****************POST*******************/
export const register = async (data) => {
    if (!isOnline()) {
        warningCustom("You are offline. Please connect to the internet to register.")
        return { error: "No internet connection" }
    }
    try {
        const res = await axios({
            url: "/user/register",
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
            url: "/user/login",
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
            url: "/user/logout",
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