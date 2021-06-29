
    let data= JSON.parse(localStorage.getItem('data')) 

    let initialState={
    data:data || []
}
const  getDataReducer =  (state=initialState, action)=> {
  console.log("action.payload",action.payload)
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        data: [...state.data,action.payload]
      };
      case 'GET_ALL_DATA':
        return state
    default:
      return state;
  }
}
export default getDataReducer