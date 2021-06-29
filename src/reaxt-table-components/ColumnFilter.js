import React from 'react'

export const ColumnFilter = ({ column }) => {

    const { filterValue, setFilter } = column;
    return (
        <>
            <span>
                search: {''}
            </span>
            <input value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} />
        </>
    )
}