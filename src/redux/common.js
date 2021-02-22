import { createHttpClient } from 'util/http.util';
// import { cacheAsyncCallback } from 'util/cache.util';

export const createHttpGetClient = (url, options) => {
    const httpClient = createHttpClient({ url, ...options });

    return httpClient.get;
}
