import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '../consts/localstorage';
import { PLACHOLDER_URL } from '../consts/api';

export const $api = axios.create({
    baseURL: PLACHOLDER_URL,
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization =
            localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    }
    return config;
});
