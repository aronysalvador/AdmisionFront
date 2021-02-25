import { createHttpClient } from 'util/http.util';
import { cacheAsyncCallback } from 'util/cache.util';
import { getToken } from 'redux/selectors/auth.selector';

const httpClient = createHttpClient();

export const createHttpGetClient = (url) => (tkn) => {
    return cacheAsyncCallback(url, () => httpClient.get(url, {
        headers: {
            'x-access-token': tkn ?? getToken()
        }
    }));
}
