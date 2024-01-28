export const orderColumns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "orderImage", headerName: "Order Image", width: 150, renderCell: (params) => <img src={params.row.orderImage} alt="Order" style={{ width: "7rem", height: "7rem" , padding: "1.4rem"}} /> },
    { field: "orderName", headerName: "Order Name", width: 200 },
    { field: "customer", headerName: "Customer", width: 200 },
    { field: "status", headerName: "Status", width: 150 },
  ];
  
  
  export const orderRows = [
    { id: 1, orderImage: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", orderName: "Order 1", customer: "John Doe", status: "placed" },
    { id: 2, orderImage: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", orderName: "Order 2", customer: "Jane Smith", status: "confirmed" },
    { id: 3, orderImage: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", orderName: "Order 3", customer: "Mike Johnson", status: "delivered" },
    // Add more dummy data here
  ];
  
  