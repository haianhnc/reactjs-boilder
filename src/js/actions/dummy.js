import { DUMMY_FETCH_DATA, DUMMY_SET_DATA} from '../constants/dummy';

export function fetchData(id, onLoading, onError) {
  return {
    type: DUMMY_FETCH_DATA,
    id,
    onLoading,
    onError,
  };
}

export function setData(data) {
  return {
    type: DUMMY_SET_DATA,
    data,
  }
}

