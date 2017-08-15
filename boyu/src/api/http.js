import axios from 'axios'
import qs from 'qs'
import store from '../vuex/'
import api from './api'
let base = 'http://api.cdn.dev/v1';
export const requestLogin = params => { return axios.post(`${base}/`+api.oLogin,qs.stringify(params)).then(res => res.data).catch(error=>error)};

export const requestRegister = params => { return axios.post(`${base}/`+api.oRegister,qs.stringify(params)).then(res => res.data).catch(error=>error)};
