import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#F9F9F9",
    "& .MuiDataGrid-columnHeader": {
      fontSize: 12,
      fontWeight: 700,
      padding: "16px",
    },
  },
  "& .MuiDataGrid-row": {
    "&:nth-of-type(odd)": {
      backgroundColor: "#FFFFFF",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#F5F5F5",
    },
    "& .MuiDataGrid-cell": {
      whiteSpace: "pre-line",
      fontSize: 12,
      padding: "10px 16px",
    },
  },
  "& .MuiDataGrid-columnSeparator": {
    visibility: "visible",
    color: "#e0e0e0",
  },
}));

export default function EnhancedDataTable() {
  const [dataRows, setDataRows] = React.useState([
    {
      id: 1,
      name: "Frozen yoghurt",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
    },
    {
      id: 2,
      name: "Ice cream sandwich",
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
    },
    {
      id: 3,
      name: "Eclair",
      calories: 262,
      fat: 16.0,
      carbs: 24,
      protein: 6.0,
    },
    {
      id: 4,
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
    },
    {
      id: 5,
      name: "Gingerbread",
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
    },
    { id: 6, name: "Donut", calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
    {
      id: 7,
      name: "Honeycomb",
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
    },
    {
      id: 8,
      name: "Jelly Bean",
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
    },
    {
      id: 9,
      name: "KitKat",
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7.0,
    },
    {
      id: 10,
      name: "Lollipop",
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0.0,
    },
  ]);

  const [selectionModel, setSelectionModel] = React.useState([]);
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const columns = [
    {
      field: "selected",
      headerName: "",
      width: 60,
      minWidth: 60,
      maxWidth: 60,
      sortable: false,
      filterable: false,
      align: "center",
      headerAlign: "center",
      renderHeader: () => (
        <Box display="flex" justifyContent="center" width="100%">
          <Checkbox
            color="primary"
            indeterminate={
              selectionModel.length > 0 &&
              selectionModel.length < dataRows.length
            }
            checked={
              dataRows.length > 0 && selectionModel.length === dataRows.length
            }
            onChange={(e) => {
              if (e.target.checked) {
                setSelectionModel(dataRows.map((row) => row.id));
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
                : selectionModel.filter((id) => id !== params.id);
              setSelectionModel(newSelection);
            }}
          />
        </Box>
      ),
    },
    {
      field: "name",
      headerName: "Dessert (100g serving)",
      width: 200,
      minWidth: 115,
      maxWidth: 300,
      flex: 1,
    },
    {
      field: "calories",
      headerName: "Calories",
      width: 120,
      minWidth: 115,
      maxWidth: 300,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "fat",
      headerName: "Fat (g)",
      width: 120,
      minWidth: 115,
      maxWidth: 300,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "carbs",
      headerName: "Carbs (g)",
      width: 120,
      minWidth: 115,
      maxWidth: 300,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "protein",
      headerName: "Protein (g)",
      width: 120,
      minWidth: 115,
      maxWidth: 300,
      align: "right",
      headerAlign: "right",
    },
  ];

  return (
    <Paper
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        borderRadius: 4,
        border: "1px solid #E0E7ED",
      }}
    >
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
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-columnHeader:focus": {
            outline: "none",
          },
          border: 0,
          "& .MuiDataGrid-columnSeparator": {
            visibility: "visible",
            color: "#e0e0e0",
          },
        }}
      />
    </Paper>
  );
}
