const initialState = { admin: [] };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ADMIN":
      return {
        ...state,
        admin: action.payload,
      };
    case "ADD_ADMIN":
      return {
        ...state,
        admin: state.admin.concat(action.payload),
      };
    case "DELETE_ADMIN":
      return {
        ...state,
        admin: state.admin.filter((data) => data.username !== action.payload),
      };
    default:
      return state;
  }
}

export default userReducer;
