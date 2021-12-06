import axios from "axios";

 

let userData = {};



import { store } from "../redux/createStore";
import jwt_decode from "jwt-decode";
import { baseURL } from "./env";


let api = axios.create({
  baseURL:baseURL,
  headers: {},
});

store.subscribe(listener);

function select(state) {
  return state.auth.user;
}

function listener() {
  userData = select(store.getState());
}

listener();

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

let isRefreshing = false;
let subscribers = [];
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    const {
      config,
      response: { status, data },
    } = err;
    const originalRequest = config;
    if (data.message === "JWT Token not found") {
      return Promise.reject(err);
    }

    if (originalRequest.url.includes("login")) {
      return Promise.reject(err);
    }

    if (status == 401 && data.message === "Expired JWT Token") {
      if (!isRefreshing) {
        isRefreshing = true;
        console.log("refreshing token ...");

        api
          .post("token/refresh", userData)
          .then((res) => {
            console.log("token refreshing succefuly");
            if (res.status === 200 || res.status == 204) {
              isRefreshing = false;
              var decoded = jwt_decode(res.data.token);
              decoded.token = res.data.token;
              decoded.refresh_token = res.data.refresh_token;

              store.dispatch({ type: "LOGIN", payload: decoded });

            }
            subscribers = [];
          })
          .catch((error) => {
            console.error("errr", error.response);
          });
      }

      const requestSubscribers = new Promise((resolve) => {
        subscribeTokenRefresh(() => {
          resolve(api(originalRequest));
        });
      });

      onRefreshed();

      return requestSubscribers;
    } else {
      return Promise.reject(err);
    }
  }
);

function subscribeTokenRefresh(cb) {
  subscribers.push(cb);
}

function onRefreshed() {
  subscribers.map((cb) => cb());
}

export default api;
