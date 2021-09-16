import { setUser } from "../actions/userList";

const initialState = {
  loading: true,
  users: [],
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload.newUser],
      };
    case "UPADETE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.updatedUser.id
            ? action.payload.updatedUser
            : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.userId),
      };
    case "SET_USERS":
      return { loading: false, users: [...action.payload.users] };
    default:
      return state;
  }
};

export const getUsers = () => async (dispatch, getState) => {
  await fetch(process.env.REACT_APP_API_URL)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setUser(data));
    });
};

export default userListReducer;
