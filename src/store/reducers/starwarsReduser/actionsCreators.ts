import axios from "axios";
import { Dispatch } from "redux";
import { PeopleActionTypes } from "./actions";
import { PeopleActions } from "./reduser";

export const fetchPeople = () => {
  return async (dispatch: Dispatch<PeopleActions>) => {
    try {
      dispatch({ type: PeopleActionTypes.FETCH_PEOPLE });

      const response = await axios.get("https://swapi.dev/api/people");
      dispatch({
        type: PeopleActionTypes.FETCH_PEOPLE_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: PeopleActionTypes.FETCH_PEOPLE_ERROR,
        payload:
          "Star Wars server is not available in that moment. Please try again later",
      });
    }
  };
};
