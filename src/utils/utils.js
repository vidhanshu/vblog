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
    const noOfMinutes = (noOfWords / 200).toFixed(2) + "min";
    return noOfMinutes;
}