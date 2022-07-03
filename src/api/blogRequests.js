import axios from "axios"
import { warningCustom } from "../utils/notifications";
import { BACKEND_URL } from "../constants/constant"

/*********************POST*************************/
export const publish = async (token, data) => {
    if (!window.navigator.onLine) {
        return warningCustom("you are offline!");
    }
    console.log(data)
    try {
        const res = await axios({
            url: `${BACKEND_URL}/blog/publish`,
            method: "POST",
            data,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return { data: res.data };
    } catch (err) {
        return { error: err.message };
    }
}

/*********************PATCH*************************/

export const uploadImage = async () => {

}

export const increaseClaps = async () => {

}

export const decreaseClaps = async () => {

}

/*********************GET*************************/
export const getAllBlogs = async () => {
    const isOnline = window.navigator.onLine;
    if (isOnline) {
        const response = await axios.get(`${BACKEND_URL}/blog/all?sortBy=createdAt:desc&limit=10`);
        console.log(response.data);
        return response.data;
    } else {
        warningCustom("you are offline!");
        return [];
    }

}

export const getAllBlogsList = async () => {
    const isOnline = window.navigator.onLine;
    if (isOnline) {
        const response = await axios.get(`${BACKEND_URL}/blog/all/list?sortBy=createdAt:desc&limit=10`);
        console.log(response.data);
        return response.data;
    } else {
        warningCustom("you are offline!");
        return [];
    }

}

export const getBlogById = async (token, id) => {
    const isOnline = window.navigator.onLine;
    if (!isOnline) {
        warningCustom("you are offline!");
        return { error: "you are offline!" };
    } else {
        console.log(token)
        try {
            const response = await axios(
                {
                    url: `${BACKEND_URL}/blog/${id}`,
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            return { data: response.data };
        } catch (err) {
            return { error: err.message };
        }
    }

}

export const getBlogByUserId = async () => {

}

export const getBlogImageById = async (id) => {
    if (!window.navigator.onLine) {
        warningCustom("you are offline!");
        return { error: "you are offline!" };
    }
    try {

        const image = await axios.get(`${BACKEND_URL}/blog/${id}/image`);
        return { data: image.data };
    } catch (err) {
        return { error: err.message };
    }
}

/*********************DELETE*************************/

export const deleteBlogById = async () => {

}