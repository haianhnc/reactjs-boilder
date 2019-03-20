/* global localStorage */
import axios from 'axios';
import { api as config } from '../config/dev';

/** this is Singleton for api instance 
 * you can add common things into api when initializing such as: header, default token, request server, etc...
*/
export default function api() {
  const initialConfig = {
    baseURL: config.root,
    timeout: 60000,
    // headers: header,
    withCredentials: false,
  };

  return axios.create(initialConfig);
}