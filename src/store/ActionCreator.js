import axios from "axios";
export const getUsers = () => {
  return (dispatch, getState) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log(response.data);
        dispatch({ type: "FETCH_USERS", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
