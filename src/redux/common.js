import store from 'store';
import { createHttpClient } from 'util/http.util';
import { cacheAsyncCallback } from 'util/cache.util';

const getToken = () => {
    const { microsoftReducer: { token } } = store.getState();
    return token;
}

export const createHttpGetClient = (url) => {
    const httpClient = createHttpClient({ url });

    return () => cacheAsyncCallback(url, httpClient.get);
}
