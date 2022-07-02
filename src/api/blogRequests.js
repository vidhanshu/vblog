import axios from "axios"
import { infoCustom } from "../utils/notifications";

/*********************POST*************************/
export const publish = async (token, data) => {
    if (!window.navigator.onLine) {
        return infoCustom("you are offline!");
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
        const response = await axios.get("https://vblog-backend.herokuapp.com/blog/all");
        console.log(response.data);
        return response.data;
    } else {
        infoCustom("you are offline!");
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