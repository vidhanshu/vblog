import axios from "axios"

/*****************POST*******************/
export const register = async (data) => {
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
    try {
        const res = await axios({
            url: "/user/logout",
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        if (res.data) {
            return res.data;
        }
    } catch (error) {
        return { error: error.message };
    }
}