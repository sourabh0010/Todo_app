import React from "react";

function DisplayData(props) {
  return (
    <div>
      <ul>
        {props.dataList?.map((item) => {
          return <li>{item?.first_name || "" + item?.last_name || ""}</li>;
        })}
      </ul>
    </div>
  );
}

export default DisplayData;
