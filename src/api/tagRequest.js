import axios from "axios"
import { isOnline } from "../utils/utils"
import { BACKEND_URL } from "../constants/constant"

export const getTags = async (match) => {
    if (!isOnline()) {
        return { error: "No internet connection" }
    }
    try {
        const res = await axios.get(`${BACKEND_URL}/tags/all`)
        return { data: res.data.map(tag => tag.name) }
    } catch (err) {
        return { error: err };
    }
}

export const postTag = async (tag, setIsLoading) => {
    if (!isOnline()) {
        return { error: "No internet connection" }
    }
    try {
        const res = await axios({
            url: `${BACKEND_URL}/tag/post`,
            method: 'POST',
            data: {
                name: tag
            }
        })
        setIsLoading(false)
        return { data: res.data.map(tag => tag.name) }
    } catch (err) {
        setIsLoading(false)
        return { error: err };
    }
}