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