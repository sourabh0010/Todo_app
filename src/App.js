import React ,{useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux';
import axios from 'axios'

import './App.css';
import DisplayData from './components/DisplayData';

function App() {

  const dispatch = useDispatch();
 const dataList=useSelector(state=>state.data || [])
 
  useEffect(()=>{
    let promise =new Promise ((resolve)=>{
      resolve(axios.get("https://reqres.in/api/users?page=2"))
    })
    promise.then((res)=>{
      let {data}=res.data
      dispatch({ type: "Fetch_Data", payload: data});
    })
  },[dispatch])

  return (
    <div className="App">
     <DisplayData dataList={dataList}/>
     
    </div>
  );
}


export default App;
