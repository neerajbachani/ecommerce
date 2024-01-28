// import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Resin Watch",
      img: "https://res.cloudinary.com/dkhsnhjrh/image/upload/v1704526775/ynykelhxg0uain0cjqg9.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
    
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Resin Watch",
      img: "https://res.cloudinary.com/dkhsnhjrh/image/upload/v1704526775/ynykelhxg0uain0cjqg9.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
   
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Resin Watch",
      img: "https://res.cloudinary.com/dkhsnhjrh/image/upload/v1704526775/ynykelhxg0uain0cjqg9.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
     
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Resin Watch",
      img: "https://res.cloudinary.com/dkhsnhjrh/image/upload/v1704526775/ynykelhxg0uain0cjqg9.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Resin Watch",
      img: "https://res.cloudinary.com/dkhsnhjrh/image/upload/v1704526775/ynykelhxg0uain0cjqg9.jpg",
      img: "https://res.cloudinary.com/dkhsnhjrh/image/upload/v1704526775/ynykelhxg0uain0cjqg9.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table mt-10 ">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper w-20 h-20 my-10 ">
                  
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
