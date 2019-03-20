import api from './api';

export function fetchData(id) {
  // use id to fetch in case nessesary
  // console.log(id);
  return api(true).get(`/dummy`);
}