import axios from "axios"
import { warningCustom } from "../utils/notifications";

/*********************POST*************************/
export const publish = async (token, data) => {
    if (!window.navigator.onLine) {
        return warningCustom("you are offline!");
    }
    console.log(data)
    try {
        const res = await axios({
            url: "https://vblog-backend.herokuapp.com/blog/publish",
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
        const response = await axios.get("https://vblog-backend.herokuapp.com/blog/all?sortBy=createdAt:desc&limit=10");
        console.log(response.data);
        return response.data;
    } else {
        warningCustom("you are offline!");
        return [];
    }

}

export const getBlogById = async () => {

}

export const getBlogByUserId = async () => {

}
/*********************DELETE*************************/

export const deleteBlogById = async () => {

}