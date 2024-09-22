import {useEffect, useState} from "react";
import { Area } from '@ant-design/plots';

function BasicArea() {
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
    // autoFit: false,
    // width: 500,
    // height: 300,
    smooth: true,
    point: true,
    slider: {
      start: 0,
      end: 1
    }
  };
  return (
    <>
      <h2>Basic Area</h2>
      <Area {...config} />
    </>
  )
}

export default BasicArea

