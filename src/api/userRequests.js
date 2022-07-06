import axios from "axios"
import { BACKEND_URL } from "../constants/constant"

/*********************POST*************************/
export const uploadMyAvatar = async (token, file) => {
    const formData = new FormData();
    formData.append("avatar", file);
    console.log(formData);
    try {
        const res = await axios({
            url: `${BACKEND_URL}/user/me/avatar`,
            method: "POST",
            data: formData,
            headers: {
                authorization: token,
                'Content-Type': "multipart/form-data"
            }
        })
        return { data: res.data };
    } catch (err) {
        return { error: err.message };
    }
}
/*********************PATCH*************************/
export const updateMe = async (token, data) => {
    console.log(data)
    try {
        const res = await axios({
            url: `${BACKEND_URL}/user/me/update`,
            method: "PATCH",
            data,
            headers: {
                authorization: token,
            }
        })
        return { data: res.data };
    } catch (err) {
        return { error: err.message }
    }
}
/*********************GET*************************/
export const getUserById = async () => {
    try {

    } catch (err) {
        return { error: err.message }
    }
}

export const getMyProfile = async (token) => {
    try {
        const res = await axios({
            url: `${BACKEND_URL}/user/me`,
            method: "GET",
            headers: {
                authorization: token
            }
        })
        console.log(res.data);
        return { data: res.data };
    } catch (err) {
        return { error: err.message }
    }
}
/*********************DELETE*************************/
export const deleteMyProfile = async () => {
    try {

    } catch (err) {
        return { error: err.message }
    }
}