import React ,{useContext, useEffect} from "react";
import {NameContext} from "../App"
function DisplayData(props) {
  const [name1,setName1]= useContext(NameContext)
  useEffect(()=>{
    setName1("hello")
  },[])
  return (
   <>
    {console.log(name1)}
      {/* <ul>
        {name?.map((item) => {
          console.log(item)
          return (
            <div>
              <img src={item.avatar} />
              <div className="listItems"><li>{(item?.first_name || "") + '  ' + (item?.last_name || "")}</li>
                <p>{item?.email || ''}</p>
              </div>
            </div>);
        })}
      </ul> */}
      </>
  );
}

export default DisplayData;
