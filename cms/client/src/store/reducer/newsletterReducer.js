const initialState = { newsletter: [], newsletterDetail: {} };

function newsletterReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_NEWSLETTER":
      return {
        ...state,
        newsletter: action.payload,
      };
    case "SET_ONE_NEWSLETTER":
      return {
        ...state,
        newsletterDetail: action.payload,
      };
    case "ADD_NEWSLETTER":
      return {
        ...state,
        newsletter: state.newsletter.concat(action.payload),
      };
    case "UPDATE_NEWSLETTER":
      return {
        ...state,
        newsletter: state.newsletter
          .filter((data) => data.timeInNumber !== action.payload.timeInNumber)
          .concat(action.payload),
        newsletterDetail: action.payload,
      };
    case "DELETE_NEWSLETTER":
      return {
        ...state,
        newsletter: state.newsletter.filter(
          (data) => data.timeInNumber !== action.payload
        ),
      };
    default:
      return state;
  }
}

export default newsletterReducer;
