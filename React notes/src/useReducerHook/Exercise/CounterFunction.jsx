const handleCounter = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.changeBy };
    case "decrement":
      return { ...state, count: state.count - action.changeBy };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};
export default handleCounter;
