
export type KEY_CACHE = "order";

export const cache = <T>(key: KEY_CACHE, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const removeCache = (key: KEY_CACHE) => {
    localStorage.removeItem(key);
}

export const getCache = <T>(key: KEY_CACHE): T | undefined => {
    const data = localStorage.getItem(key);
    if(!data) {
        return undefined;
    }
    return JSON.parse(data);
}