const initialState = {
  indonesia: [],
  indonesiaUpdate: {},
};

function indonesiaReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_INDONESIA":
      return {
        ...state,
        indonesia: action.payload,
      };
    case "UPDATE_INDONESIA":
      return {
        ...state,
        indonesia: state.indonesia
          .filter((data) => data.content !== action.payload.content)
          .concat(action.payload),
      };
    case "SET_INDONESIA_UPDATE":
      return {
        ...state,
        indonesiaUpdate: action.payload,
      };
    default:
      return state;
  }
}

export default indonesiaReducer;
