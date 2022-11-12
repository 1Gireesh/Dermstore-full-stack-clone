
import axios from 'axios';
import { Logout, Login } from './auth.actionTypes';

let token = localStorage.getItem("token");

if (token) {
    axios.defaults.headers.common["token"] = token;
}

const initState = {
    isAuth: token ? true : false,
    token: token
}

export const authReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case Login:
            {
                localStorage.setItem("token", payload);
                axios.defaults.headers.common["token"] = payload;
                return { ...state, isAuth: true, token: payload }
            }
        case Logout:
            {
                localStorage.removeItem("token");
                delete axios.defaults.headers.common["token"]
                return { ...state, isAuth: false, token: null }
            }
        default:
            return state;
    }
}