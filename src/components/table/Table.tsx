import React from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import { Device } from '../../helpers/response.types';

import './styles.css';
import { Loader } from '../ui/Loader';

interface TableProps {
  columns: any[];
  data: Device[];
  isLoading?: boolean;
  handleClick?: (cell: {}) => any;
  nonData: string;
}

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  nonData,
  handleClick,
  isLoading,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Device>({ columns, data }, useSortBy, usePagination);
  return (
    <>
      <table {...getTableProps()} className="fixed_header">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {data !== null && data.length > 0 && !isLoading ? (
            rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        onClick={() =>
                          handleClick && handleClick(cell.row.original)
                        }
                      >
                        <span>{cell.render('Cell')}</span>
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : data.length === 0 && !isLoading ? (
            <tr>
              <td colSpan={columns.length} className="text-center">
                <span>{nonData}</span>
              </td>
            </tr>
          ) : isLoading ? (
            <tr>
              <td colSpan={columns.length} className="text-center">
                <Loader />
              </td>
            </tr>
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </>
  );
};
