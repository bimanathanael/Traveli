const initialState = { english: [], englishUpdate: {} };

function englishReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ENGLISH":
      return {
        ...state,
        english: action.payload,
      };
    case "UPDATE_ENGLISH":
      return {
        ...state,
        english: state.english
          .filter((data) => data.pages !== action.payload.pages)
          .concat(action.payload),
      };
    case "SET_ENGLISH_UPDATE":
      return {
        ...state,
        englishUpdate: action.payload,
      };

    default:
      return state;
  }
}

export default englishReducer;
