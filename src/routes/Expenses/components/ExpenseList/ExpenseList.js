// MuiVirtualizedTable

import VirtualizedTable from 'components/VirtualizedTable';
import React from 'react';

export default function ReactVirtualizedTable({ rows }) {
  const column = [
    {
      width: 150,
      label: 'Transaction Date',
      dataKey: 'transactionDate',
    },
    {
      width: 120,
      label: 'Posting Date',
      dataKey: 'postingDate',
    },
    {
      width: 100,
      label: 'Amount',
      dataKey: 'amount',
      numeric: true,
    },
    {
      width: 160,
      label: 'Card Used',
      dataKey: 'cardUsed',
    },
    {
      width: 400,
      label: 'Description',
      dataKey: 'description',
    },
    {
      width: 250,
      label: 'Categories',
      dataKey: 'category',
    },
  ];
  return (
    <VirtualizedTable
      rowCount={rows.length}
      rowGetter={({ index }) => rows[index]}
      columns={column}
    />
  );
}
