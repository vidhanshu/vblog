import { publish, getBlogById, getBlogImageById } from "../api/blogRequests";
import { isAllNonEmpty, calcReadTime } from "./utils";
import { errorCustom, fillAllDetails, successCustom } from "./notifications"

export const publishHandler = async (token, { title, text, tags, readTime = calcReadTime(text) }, setIsLoading) => {
    if (!window.navigator.onLine) {
        return errorCustom("You are offline. Please connect to the internet to publish your blog.");
    }
    if (!isAllNonEmpty([title, text])) {
        return fillAllDetails();
    }
    let data;
    if (tags) {
        data = { title, text, tags, readTime }
    } else {
        data = { title, text, readTime }
    }
    setIsLoading(true);

    const response = await publish(token, data);

    if (response.error) {
        console.log(response.error);
        errorCustom(response.error);
    } else {
        successCustom("Blog published successfully");
        setIsLoading(false);
        window.location.href = "/";
        return response.data;
    }
    console.log(response);
}

export const getBlogByIdHandler = async (token, id, setFetching) => {
    if (!window.navigator.onLine) {
        return errorCustom("You are offline. we cannot fetch the blog");
    }
    else if (!id) {
        return errorCustom("No blog id provided");
    }
    else {
        console.log("fetching blog");
        setFetching(true);
        const result = await getBlogById(token, id);
        const image = await getBlogImageById(id);
        if (result.error && image.error) {
            setFetching(false);
            return errorCustom(result.error);
        } else {
            setFetching(false);
            return { data: result.data, image: image.data };
        }
    }
}