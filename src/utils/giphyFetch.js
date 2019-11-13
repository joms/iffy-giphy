import { apiFetch } from './apiFetch';

const API_URL = process.env.REACT_APP_GIPHY_API_URL;
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const giphyDestination = dest => new URL(API_URL + dest);

export const search = options => {
    if (!options.q) {
        return false;
    }
    const url = giphyDestination('search');

    url.search = new URLSearchParams({
        api_key: API_KEY,
        ...options,
    }).toString();

    return apiFetch(url);
};

export const random = () => {
    const url = giphyDestination('randomid');

    return apiFetch(url);
};
