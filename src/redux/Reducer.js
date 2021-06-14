
let initialState={
    data:[]
}
const  getDataReducer =  (state=initialState, action)=> {
  switch (action.type) {
    case "Fetch_Data":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
export default getDataReducer