import axios from "axios"

export const getTags = async (match) => {

    try {
        const res = await axios.get("/tags/all")
        return { data: res.data.map(tag => tag.name) }
    } catch (err) {
        return { error: err };
    }
}

export const postTag = async (tag) => {
    try {
        const res = await axios({
            url: "/tag/post",
            method: 'POST',
            data: {
                name: tag
            }
        })
        return { data: res.data.map(tag => tag.name) }
    } catch (err) {
        return { error: err };
    }
}