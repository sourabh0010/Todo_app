import axios from "axios";

export const fetchData = (dispatch) => {

  axios.get("https://reqres.in/api/users?page=2").then((res) => {

    let { data } = res.data;
    console.log(data)
    dispatch({ type: "Fetch_Data", payload: data });
    
  }).catch((err)=>{
     console.log(err)
  });
};
