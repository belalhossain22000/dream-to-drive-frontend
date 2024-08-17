"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    date: "Jan/24",
    "Payment Completed": 4000,
    "Payment Rejected": 2400,
    "Payment Awaiting": 1200,
  },
  {
    date: "Feb/24",
    "Payment Completed": 3000,
    "Payment Rejected": 1398,
    "Payment Awaiting": 2210,
  },
  {
    date: "Mar/24",
    "Payment Completed": 2000,
    "Payment Rejected": 9800,
    "Payment Awaiting": 2290,
  },
  {
    date: "Apr/24",
    "Payment Completed": 2780,
    "Payment Rejected": 3908,
    "Payment Awaiting": 2000,
  },
  {
    date: "May/24",
    "Payment Completed": 1890,
    "Payment Rejected": 4800,
    "Payment Awaiting": 2181,
  },
  {
    date: "Jun/24",
    "Payment Completed": 2390,
    "Payment Rejected": 3800,
    "Payment Awaiting": 2500,
  },
  {
    date: "Jul/24",
    "Payment Completed": 3490,
    "Payment Rejected": 4300,
    "Payment Awaiting": 2100,
  },
];

const PaymentHistoryChart = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={450}>
        <BarChart
          width={1800}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="date" />
          <XAxis interval={0} height={50} scale="band" xAxisId="quarter" />
          <YAxis />
          <Tooltip
            contentStyle={{
              color: "white",
              background: "#021f3e",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "2px 2px 20px #000",
            }}
            cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
          />
          <Legend align="center" />
          <Bar
            dataKey="Payment Completed"
            fill="#556fd4"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="Payment Rejected"
            fill="#dee3e5"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="Payment Awaiting"
            fill="#288a88"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PaymentHistoryChart;
