import { createHttpClient } from 'util/http.util';
import { cacheAsyncCallback } from 'util/cache.util';
import { getToken } from 'redux/selectors/auth.selector';

const httpClient = createHttpClient();

export const createHttpGetClient = (url) => () => {
    return cacheAsyncCallback(url, () => httpClient.get(url, {
        headers: {
            // 'Authorization': `Bearer ${getToken()}`
            'x-access-token': getToken()
        }
    }));
}
