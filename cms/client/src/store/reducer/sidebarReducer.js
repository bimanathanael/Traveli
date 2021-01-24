const initialState = { sidebarShow: "responsive" };

function sidebarReducer(state = initialState, action) {
  switch (action.type) {
    case "set":
      return { ...state, sidebarShow: action.payload };

    default:
      return state;
  }
}

export default sidebarReducer;
