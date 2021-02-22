import axios from 'axios';
import axiosRetry from 'axios-retry';

/**
 * Creates a http client.
 *
 * @param {object} options options object.
 * @param {string} options.url base URL.
 * @param {object} [options.headers] default headers.
 * @param {number} [options.retries] request retries.
 * @param {object} [options.rest] other configs.
 *
 * @returns {AxiosInstance} axios http client.
 */
export function createHttpClient({ url, headers, retries = 3, ...rest })
{
    // creates an axios instance pre-configured.
    const client = axios.create({
        baseURL: url,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            ...headers
        },
        responseType: 'json',
        responseEncoding: 'utf8',
        ...rest
    });

    axiosRetry(client, { retries });

    return client;
}

// axios.get('url', { adapter: cachingAdapter });

// function cachingAdapter(resolve, reject, config) {
//   cache.get(generateOptions(config, options))
//   .then(function(result) {
//     resolve(createResponse(result));
//   }, function() {
//     axios.defaults.adapter(resolve, reject, config);
//   });
// }
