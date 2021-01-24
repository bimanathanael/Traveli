const initialState = { history: [] };

function historyReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_HISTORY":
      return {
        ...state,
        history: action.payload,
      };
    case "ADD_HISTORY":
      return {
        ...state,
        history: state.history.concat(action.payload),
      };

    default:
      return state;
  }
}

export default historyReducer;
