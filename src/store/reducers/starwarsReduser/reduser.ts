import LoadStatus from "../../loadStatus";
import { PeopleActionTypes } from "./actions";
import { IStarwarsResponse, IStarWarsStore } from "./types";

interface IFetchPeopleAction {
  type: PeopleActionTypes.FETCH_PEOPLE;
}

interface IFetchPeopleSuccessAction {
  type: PeopleActionTypes.FETCH_PEOPLE_SUCCESS;
  payload: IStarwarsResponse;
}

interface IFetchPeopleErrorAction {
  type: PeopleActionTypes.FETCH_PEOPLE_ERROR;
  payload: string;
}

export type PeopleActions =
  | IFetchPeopleAction
  | IFetchPeopleSuccessAction
  | IFetchPeopleErrorAction;

const initialState: IStarWarsStore = {
  starwarsResponse: {} as IStarwarsResponse,
  loadStatus: LoadStatus.initial,
  error: "",
};

const starwarsReducer = (
  state = initialState,
  action: PeopleActions
): IStarWarsStore => {
  switch (action.type) {
    case PeopleActionTypes.FETCH_PEOPLE:
      return { ...state, loadStatus: LoadStatus.loading, error: "" };
    case PeopleActionTypes.FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        error: "",
        loadStatus: LoadStatus.loadSuccess,
        starwarsResponse: action.payload,
      };
    case PeopleActionTypes.FETCH_PEOPLE_ERROR:
      return {
        ...state,
        error: action.payload,
        loadStatus: LoadStatus.error,
      };
    default:
      return state;
  }
};

export default starwarsReducer;
