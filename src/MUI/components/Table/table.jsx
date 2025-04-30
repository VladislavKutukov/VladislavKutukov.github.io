import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: '#F9F9F9',
    '& .MuiDataGrid-columnHeader': {
      fontSize: 12,
      fontWeight: 700,
      padding: '16px',
    },
  },
  '& .MuiDataGrid-row': {
    '&:nth-of-type(odd)': {
      backgroundColor: '#FFFFFF',
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#F5F5F5',
    },
    '& .MuiDataGrid-cell': {
      whiteSpace: 'pre-line',
      fontSize: 12,
      padding: '10px 16px',
    },
  },
  '& .MuiDataGrid-columnSeparator': {
    visibility: 'visible',
    color: '#e0e0e0',
  },
}));

export default function EnhancedDataTable() {
  const [dataRows, setDataRows] = React.useState([
    { id: 1, name: 'Сапсан', number: '001А', departure: 'Москва', arrival: 'Санкт-Петербург', travelTime: '4 ч 30 мин', seats: 450 },
    { id: 2, name: 'Ласточка', number: '702Ч', departure: 'Москва', arrival: 'Нижний Новгород', travelTime: '3 ч 55 мин', seats: 320 },
    { id: 3, name: 'Аллегро', number: '003А', departure: 'Санкт-Петербург', arrival: 'Хельсинки', travelTime: '3 ч 30 мин', seats: 340 },
    { id: 4, name: 'Стриж', number: '005А', departure: 'Москва', arrival: 'Берлин', travelTime: '20 ч 15 мин', seats: 280 },
    { id: 5, name: 'Невский экспресс', number: '007А', departure: 'Москва', arrival: 'Санкт-Петербург', travelTime: '8 ч 10 мин', seats: 380 },
    { id: 6, name: 'Красная стрела', number: '001А', departure: 'Москва', arrival: 'Санкт-Петербург', travelTime: '8 ч', seats: 412 },
    { id: 7, name: 'Россия', number: '002Э', departure: 'Москва', arrival: 'Владивосток', travelTime: '6 д 2 ч', seats: 560 },
    { id: 8, name: 'Байкал', number: '008Э', departure: 'Иркутск', arrival: 'Улан-Удэ', travelTime: '8 ч 30 мин', seats: 290 },
    { id: 9, name: 'Томич', number: '105Н', departure: 'Томск', arrival: 'Новосибирск', travelTime: '4 ч 40 мин', seats: 310 },
    { id: 10, name: 'Южный Урал', number: '013У', departure: 'Москва', arrival: 'Челябинск', travelTime: '1 д 8 ч', seats: 420 },
  ]);

  const [selectionModel, setSelectionModel] = React.useState([]);
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const columns = [
    {
      field: 'selected',
      headerName: '',
      width: 60,
      minWidth: 60,
      maxWidth: 60,
      sortable: false,
      filterable: false,
      align: 'center',
      headerAlign: 'center',
      renderHeader: () => (
        <Box display="flex" justifyContent="center" width="100%">
          <Checkbox
            color="primary"
            indeterminate={
              selectionModel.length > 0 && selectionModel.length < dataRows.length
            }
            checked={
              dataRows.length > 0 && selectionModel.length === dataRows.length
            }
            onChange={(e) => {
              if (e.target.checked) {
                setSelectionModel(dataRows.map(row => row.id));
              } else {
                setSelectionModel([]);
              }
            }}
          />
        </Box>
      ),
      renderCell: (params) => (
        <Box display="flex" justifyContent="center" width="100%">
          <Checkbox
            color="primary"
            checked={selectionModel.includes(params.id)}
            onChange={(e) => {
              e.stopPropagation();
              const newSelection = e.target.checked
                ? [...selectionModel, params.id]
                : selectionModel.filter(id => id !== params.id);
              setSelectionModel(newSelection);
            }}
          />
        </Box>
      ),
    },
    {
      field: 'name',
      headerName: 'Название поезда',
      width: 200,
      minWidth: 150,
      maxWidth: 300,
      flex: 1,
    },
    {
      field: 'number',
      headerName: 'Номер',
      width: 120,
      minWidth: 100,
      maxWidth: 150,
    },
    {
      field: 'departure',
      headerName: 'Отправление',
      width: 150,
      minWidth: 120,
      maxWidth: 200,
    },
    {
      field: 'arrival',
      headerName: 'Прибытие',
      width: 150,
      minWidth: 120,
      maxWidth: 200,
    },
    {
      field: 'travelTime',
      headerName: 'Время в пути',
      width: 150,
      minWidth: 120,
      maxWidth: 180,
      align: 'right',
      headerAlign: 'right',
    },
    {
      field: 'seats',
      headerName: 'Мест',
      width: 120,
      minWidth: 80,
      maxWidth: 150,
      align: 'right',
      headerAlign: 'right',
    },
  ];

  return (
    <Paper sx={{
      position: "relative",
      width: "100%",
      overflow: "hidden",
      borderRadius: 4,
      border: "1px solid #E0E7ED",
    }}>
      <StyledDataGrid
        rows={dataRows}
        columns={columns}
        disableColumnMenu
        disableRowSelectionOnClick
        checkboxSelection={false}
        selectionModel={selectionModel}
        onSelectionModelChange={(newSelection) => {
          setSelectionModel(newSelection);
        }}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[5, 10, 25]}
        sx={{
          '& .MuiDataGrid-cell:focus': {
            outline: 'none',
          },
          '& .MuiDataGrid-columnHeader:focus': {
            outline: 'none',
          },
          border: 0,
          '& .MuiDataGrid-columnSeparator': {
            visibility: 'visible',
            color: '#e0e0e0',
          },
        }}
      />
    </Paper>
  );
}