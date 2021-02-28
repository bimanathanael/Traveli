const initialState = { newsletter: [] };

function newsletterReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_NEWSLETTER":
      return {
        ...state,
        newsletter: action.payload,
      };
    case "ADD_NEWSLETTER":
      return {
        ...state,
        newsletter: state.newsletter.concat(action.payload),
      };
    case "DELETE_NEWSLETTER":
      return {
        ...state,
        newsletter: state.newsletter.filter(
          (data) => data.title !== action.payload
        ),
      };
    default:
      return state;
  }
}

export default newsletterReducer;
