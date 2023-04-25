import { createStore } from "redux";

interface PostData {
  id: number;
  username: string;
  title: string;
  content: string;
  created_datetime: Date;
}

export interface State {
  username: string | null;
  posts: PostData[];
}

export interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  username: null,
  posts: [],
};

function rootReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
