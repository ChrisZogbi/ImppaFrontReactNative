import { POPULATE_COURSES } from "../actions/course";
const initialState = {
  courses: [],
};

export default (state = initialState, action) => {
  if (action.type == POPULATE_COURSES) {
    return {
      ...state,
      courses: action.payload,
    };
  } else {
    return state;
  }
};
