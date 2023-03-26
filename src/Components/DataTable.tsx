import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export default function DataTable({ rows, columns }: any) {
    const column: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 60,
            align: 'center',
            headerAlign: 'center',
        },
        // { field: 'title', headerName: 'First name', flex: 1 },
        // { field: 'body', headerName: 'Last name', flex: 1 },
        // {
        //     field: 'fullName',
        //     headerName: 'Full name',
        //     description: 'This column has a value getter and is not sortable.',
        //     sortable: false,
        //     width: 160,
        //     valueGetter: (params: GridValueGetterParams) =>
        //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        // },
    ];

    Object.entries(columns).forEach((col: any) => {
        column.push({
            field: col[0],
            headerName: col[1],
            flex: 1,
        });
    });

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows ?? []} columns={column} />
        </div>
    );
}
