import {useEffect, useState} from "react";
import { Line } from '@ant-design/plots';

function StepLine() {
  const [dataCharts, setDataCharts] = useState([]);
  useEffect(() => {
    const fetchApi = () => {
      fetch("https://dinhviethuy-database-chart.vercel.app/basic-line")
        .then(res => res.json())
        .then(data => setDataCharts(data));
    }
    fetchApi();
  }, [])
  const config = {
    data: dataCharts,
    xField: "date",
    yField: "quantity",
    slider: {
      start: 0,
      end: 1
    },
    stepType: "vh" //hv vhv hvh
  };
  return (
    <>
      <h2>Step Line</h2>
      <Line {...config} />
    </>
  )
}

export default StepLine

