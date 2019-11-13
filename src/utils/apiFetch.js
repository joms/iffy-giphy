export const apiFetch = url => {
    if (!url instanceof URL) {
        throw new Error('Expected url to be of instance URL');
    }

    // TODO Add handler for 401
    return fetch(url).then(res => res.json());
};
