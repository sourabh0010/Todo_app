import React from "react"
import {useAsyncDebounce} from "react-table"

function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) {
    const count = preGlobalFilteredRows.length
    // const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      console.log("value",value.target.value)
      setGlobalFilter(value.target.value || undefined)
    }, 200)
  
    return (
      <span>
        Search:{' '}
        <input
          // value={value || ""}
          onChange= {onChange}
        
          placeholder={`${count} records...`}
          style={{
            fontSize: '1.1rem',
            border: '0',
          }}
        />
      </span>
    )
  }
  export default GlobalFilter