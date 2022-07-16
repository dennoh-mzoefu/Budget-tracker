const contentReducer = (state, action) => {
  let transactions;
  switch (action.type) {
    case "DELETE__TRANSACTION":
      transactions = state.filter((t) => t.id != action.payload);
      break;
    case "ADD__TRANSACTION":
      transactions = [action.payload, ...state];
      return transactions;

    default:
      break;
  }
};
export default contentReducer;
