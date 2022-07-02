import { MONTHS } from "../constants/constant"

export const isAllNonEmpty = (fields = []) => {
    return fields.every(e => !(e === '' || e === undefined))
}

export const setInputField = (value, setState) => {
    setState(value);
}

export const getAuthUser = () => {
    if (window.localStorage.getItem("auth")) {
        return JSON.parse(window.localStorage.getItem("auth"));
    }
    return {}
}

export const onKeyPressed = (key, func, wKey) => {
    if (key === wKey) {
        func();
    }
}

export const isOnline = () => window.navigator.onLine;

export const getThemeFromLocalStorage = () => JSON.parse(window.localStorage.getItem("theme"));
export const setThemeToLocalStorage = (val) => window.localStorage.setItem("theme", JSON.stringify(val))

export const calcReadTime = (txt) => {
    const noOfWords = txt.split(" ").length;
    console.log(noOfWords);
    const noOfMinutes = Math.round(noOfWords / 200) + " min";
    return noOfMinutes;
}

export const simpleTimeNDate = (dateString) => {
    let dateNTime = new Date(dateString)
    let day = dateNTime.getDate() + 1;
    let month = MONTHS[dateNTime.getMonth() + 1];
    let hour = dateNTime.getHours();
    let min = dateNTime.getMinutes();
    let year = dateNTime.getFullYear();
    if (day < 10) {
        day = "0" + day;
    }
    if (min < 10) {
        min = "0" + min;
    }
    year = year.toString().slice(2);
    if (hour > 12) {
        hour = hour - 12;
        hour = "0" + hour;
        return `${day} ${month} ${year} at ${hour}:${min} PM`
    } else {
        if (hour < 10) {
            hour = "0" + hour;
        }

        return `${day} ${month} ${year} at ${hour}:${min} AM`
    }
}

export const generateRandomNo = (min = 0, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
