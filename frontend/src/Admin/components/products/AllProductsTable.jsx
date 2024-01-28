import { DataGrid } from "@mui/x-data-grid"
import { useState } from "react"
import allProductRows from "../../AllProductsSource"

const AllProductsTable = () => {
  const [data, setData] = useState(allProductRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.productId !== id));
  };

  const columns = [
    { field: "productId", headerName: "Product ID", width: 150 },
    {
      field: "productImg",
      headerName: "Product Image",
      width: 200,
      renderCell: (params) => (
        <img
          src={params.row.productImg}
          alt="product"
          style={{ width: "100%", height: "auto" }}
        />
      ),
    },
    { field: "productName", headerName: "Product Name", width: 200 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "subcategory", headerName: "Subcategory", width: 150 },
    { field: "price", headerName: "Price", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => (
        <button
          className="deleteButton p-5 text-3xl cursor-pointer"
          onClick={() => handleDelete(params.row.productId)}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <div className="datatable p-8 max-w-screen-lg mx-auto ">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default AllProductsTable;


