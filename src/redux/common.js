import store from 'store';
import { createHttpClient } from 'util/http.util';
import { cacheAsyncCallback } from 'util/cache.util';

const getToken = () => {
    const { microsoftReducer: { token } } = store.getState();
    return token;
}

const httpClient = createHttpClient();

export const createHttpGetClient = (url) => () => {
    return cacheAsyncCallback(url, () => httpClient.get(url, {
        headers: {
            // 'Authorization': `Bearer ${getToken()}`
            'x-access-token': getToken()
        }
    }));
}
