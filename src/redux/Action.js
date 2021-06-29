
export const AddPost = (data) => {
  return  {
    type:'ADD_POST',
    payload:data
  }
};

export const getAllData=()=>{
  return {
    type:'GET_ALL_DATA'
  }

}
