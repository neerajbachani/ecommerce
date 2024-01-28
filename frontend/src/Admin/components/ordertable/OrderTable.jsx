import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";

import { orderColumns, orderRows } from "../../OrderTableSource"

const OrderTable = () => {
  const [data, setData] = useState(orderRows);

  const handleStatusChange = (id, newStatus) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction flex items-center gap-4">
            <Link
              to={`/orders/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton p-5 rounded-lg text-primarycolor border-dotted border border-secondary-dark-color cursor-pointer text-3xl">
                View
              </div>
            </Link>
            <div className="statusButtonGroup">
              <button
                className={`statusButton ${
                  params.row.status === "placed" ? "active" : ""
                }`}
                onClick={() => handleStatusChange(params.row.id, "confirmed")}
              >
                Confirmed
                
              </button>
              <button
                className={`statusButton ${
                  params.row.status === "confirmed" ? "active" : ""
                }`}
                onClick={() => handleStatusChange(params.row.id, "placed")}
              >
                Placed 
                
              </button>
              <button
                className={`statusButton ${
                  params.row.status === "delivered" ? "active" : ""
                }`}
                onClick={() => handleStatusChange(params.row.id, "delivered")}
              >
                Delivered
              </button>
            </div>
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
        columns={orderColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default OrderTable;
