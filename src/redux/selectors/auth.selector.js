import store from 'store';

export const getToken = () => {
    const { microsoftReducer: { token } } = store.getState();
    return token;
}
