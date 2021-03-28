const initialState = { promo: [], promoDetail: {} };

function promoReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PROMO":
      return {
        ...state,
        promo: action.payload,
      };

    case "SET_ONE_PROMO":
      return {
        ...state,
        promoDetail: action.payload,
      };
    case "ADD_PROMO":
      return {
        ...state,
        promo: state.promo.concat(action.payload),
      };

    case "UPDATE_PROMO":
      return {
        ...state,
        promo: state.promo
          .filter((data) => data.timeInNumber !== action.payload.timeInNumber)
          .concat(action.payload),
        promoDetail: action.payload,
      };
    case "DELETE_PROMO":
      return {
        ...state,
        promo: state.promo.filter(
          (data) => data.timeInNumber !== action.payload
        ),
      };
    default:
      return state;
  }
}

export default promoReducer;
