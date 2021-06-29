// import { Link } from "react-router-dom"
import { ColumnFilter } from "./ColumnFilter"
export const Columns = [
  {
    Header: 'Id',
    accessor: 'id',
    // Filter:ColumnFilter,
    canFilter:false
  },
  {
    Header: 'Title',
    accessor: 'title',
    // Filter:ColumnFilter

    // Cell: ({ row}) => {return(<Link to="/sss" >abc </Link>)}
  }, {
    Header: 'Completed',
    accessor: 'completed',
    // Filter:ColumnFilter,
    Cell: ({ row }) => {
      if (row.original.completed) return 'Yes'
      return 'No'
    }
  },
]