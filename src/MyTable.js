import React from 'react';
import { useTable } from 'react-table';

// use data from json from GetData component  
const data = [
    { name: 'Sonu', salary: 10.5 },
    { name: 'Monu', salary: 20.6 },
    { name: 'Tonu', salary: 12.4 },
    { name: 'Ponu', salary: 22.8 }
];

const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Salary', accessor: 'salary' }
];


const Table = ({ columns, data }) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data });

    return (
        <table {...getTableProps()} >
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => {
                            <th {...column.getHeaderProps()} >
                                {column.render("Header")} </th>
                        })}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()} >
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>
                                    {cell.render("Cell")}
                                </td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

const MyTable = () => {
    return (
        <div className="container">
            <p className="display-4">My Table</p>
            <p className="table table-light">
                <Table data={data} columns={columns} />
            </p>
        </div>
    );
}
export default MyTable;