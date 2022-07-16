import { getMyProfile, updateMe, uploadMyAvatar } from "../api/userRequests";
import { failureCustom, warningCustom } from "./notifications";

/**********************|GET|******************************/
export const getMeHandler = async (token, setIsLoading) => {
    if (!window.navigator.onLine) {
        return warningCustom('You are offline. Please connect to the internet.');
    }
    try {
        const res = await getMyProfile(token);
        setIsLoading(false);
        return { data: res.data };
    } catch (err) {
        setIsLoading(false);
        return { error: err.message };
    }
}


/**********************|POST|******************************/
export const uploadAvatarHandler = async (token, file) => {
    if (!window.navigator.onLine) {
        return warningCustom("you are offline!");
    }

    const result = await uploadMyAvatar(token, file);

    if (result.error) {
        return failureCustom(`Something went wrong! ${result.error}`);
    }
    return { data: result.data }
}


/**********************|POST|******************************/
export const updateMeHandler = async (token, data) => {
    if (!window.navigator.onLine) {
        return warningCustom("you are offline!");
    }

    const result = await updateMe(token, data);

    if (result.error) {
        return failureCustom(`Something went wrong! ${result.error}`);
    }
    window.location.href = "/profile";
    return { data: result.data }
}
