import { apiFetch } from './apiFetch';

describe('apiFetch()', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });
    const url = new URL('https://hello.world');

    it('calls a URL and returns data', () => {
        fetch.mockResponseOnce(JSON.stringify({ message: 'hello, world!' }));
        apiFetch(url).then(res => {
            expect(res.message).toEqual('hello, world!');
        });
    });

    it('returns a proper error object on failure', () => {
        fetch.mockReject({
            message: 'Access denied',
            ok: false,
            status: 401,
            statusText: '',
        });

        apiFetch(url).catch(err => expect(err.status).toEqual(401));
    });
});
