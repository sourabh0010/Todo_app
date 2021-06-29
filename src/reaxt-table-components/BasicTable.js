import React, { useMemo } from "react"
import {
    useTable, useFilters, useGlobalFilter, useRowSelect
} from 'react-table'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from "react-router-dom"

import "./table.css"
import { IndeterminateCheckbox } from "./Checkbox"
import GlobalFilter from "./GlobleFilter"
import { ColumnFilter } from "./ColumnFilter";

export const BasicTable = (props) => {

    const { column, tableData } = props
    const columns = useMemo(() => column, [column])
    const data = useMemo(() => tableData, [tableData])
    let tableInstance = useTable({
        columns,
        data
    },
        useFilters,
        useGlobalFilter,
        useRowSelect,
        hooks => {
            hooks.visibleColumns.push(columns => [
                {
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                        <div>
                            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                        </div>
                    ),
                    Cell: ({ row }) => (
                        <div>
                            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                        </div>
                    ),
                },
                ...columns,
            ])
        })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        selectedFlatRows,
        prepareRow,
        state,
        preGlobalFilteredRows,
        setGlobalFilter,
        state: { selectedRowIds, globalFilter },

    } = tableInstance

    return (
        <div className="table_class" >
            <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter} />
            <table   {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                    {/* <div>
                                        {console.log(column)}
                                        
                                        {column.canFilter ? column.render('Filter'):null}
                                    </div> */}
                                </th>
                            ))}
                        </tr>
                    ))}

                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr  {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}

                </tbody>
            </table>

        </div >
    )
}
