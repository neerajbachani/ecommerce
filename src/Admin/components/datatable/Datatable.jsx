import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const [page, setPage] = useState(0);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction flex items-center gap-4 ">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton p-5 rounded-lg text-primarycolor border-dotted border border-secondary-dark-color cursor-pointer text-3xl">View</div>
            </Link>
            <button
              className="deleteButton p-5 text-3xl cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable p-8">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        page={page}
  onPageChange={handlePageChange}
  pageSize={9}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;

