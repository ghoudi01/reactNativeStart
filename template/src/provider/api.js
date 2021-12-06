import axios from "axios";


export const DEVURL = "https://dev-qbox.ria-box.net:8000/api/v1/";
export const prodURL = "https://pp-qbox.ria-box.net:8000/api/v1/";


import { store } from "../redux/createStore";
import jwt_decode from "jwt-decode";




store.subscribe(listener);

function select(state) {
    return state.auth.user;
}

function listener() {
    userData = select(store.getState());
}

listener();
let api = axios.create({
    baseURL: prodURL,
    headers: {},
});

//add token in evry request 
api.interceptors.request.use(
    async (config) => {
        const token = userData && userData.token ? userData.token : null;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
