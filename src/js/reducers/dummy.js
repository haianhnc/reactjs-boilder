import { DUMMY_SET_DATA } from '../constants/dummy';

export default function dummy(state = {}, action) {
  switch(action.type) {
    case DUMMY_SET_DATA: {
      let result = { ...state };
      result = { ...result, ...action.data };
      return result;
    }
    default: return state;
  }
}