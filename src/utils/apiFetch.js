export const apiFetch = url => {
    if (!url instanceof URL) {
        throw new Error('Expected url to be of instance URL');
    }

    return fetch(url).then(res => {
        if (!res.ok) {
            return res
                .json()
                .then(json => Promise.reject({ status: res.status, ok: false, statusText: res.statusText, ...json }));
        }

        return res.json();
    });
};
