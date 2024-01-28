// import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1200 },
  { name: "July", Total: 1700 },
  { name: "august", Total: 1400 },
  { name: "september", Total: 2700 },
  { name: "october", Total: 1100 },
  { name: "november", Total: 1700 },

];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8  max-w-[80rem] w-[70rem]  ">
      <div className="title mb-7 font-poppins font-medium text-3xl text-secondary-dark-color ">{title}</div>
      <ResponsiveContainer className="py-20" width="100%" aspect={aspect}>
        <AreaChart
          width={930}
          height={150}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
