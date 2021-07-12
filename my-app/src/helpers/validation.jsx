export const isEmpty = (value) => {
    return (value.length === 0 || !value.trim());
}

export const isInvalidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (!re.test(String(email).toLowerCase()));
}

export const isInvalidString = (value) => {
    const re = /^[а-яА-Яa-zA-z]+$/;
    return (!re.test(String(value).toLowerCase()))
}

export const isInvalidPassword = (password) => {
    return (password.length < 3 || password.length > 8);
}

export const isInvalidPasswordConf = (password, passwordConf) => {
    return (password!==passwordConf);
}