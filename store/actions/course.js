export const GET_COURSES_LOCATION = "GET_COURSES_LOCATION";
export const POPULATE_COURSES = "POPULATE_COURSES";

const populateCourses = (courses) => {
  return {
    type: POPULATE_COURSES,
    payload: courses,
  };
};
export const getCourses = (location) => {
  return async (dispatch) => {
    var url = `http://imppa-api.azurewebsites.net/claseubicacion?Latitud=${location.lat}&Longitud=${location.lng}`;
    const response = await fetch(url);
    console.log(response.status);
    const { Data } = await response.json();
    dispatch({
      type: POPULATE_COURSES,
      payload: Data,
    });
  };
};

export const getCourseById = (courseId) => {};

export const subscribeCourse = () => {};
