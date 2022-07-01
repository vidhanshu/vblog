import { publish } from "../api/blogRequests";
import { isAllNonEmpty, calcReadTime } from "./utils";
import { errorCustom, fillAllDetails, successCustom } from "./notifications"

export const publishHandler = async (token, { title, text, tags, readTime = calcReadTime(text) }, setIsLoading, navigate) => {
    if (!window.navigator.onLine) {
        return;
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
        navigate("/")
        return response.data;
    }
    console.log(response);
}