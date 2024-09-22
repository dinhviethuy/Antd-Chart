import {useEffect, useState} from "react";
import {Column} from "@ant-design/plots";

function StackedColumn() {
  const [dataCharts, setDataCharts] = useState([]);
  useEffect(() => {
    const fetchApi = () => {
      fetch("https://dinhviethuy-database-chart.vercel.app/multi-line")
        .then(res => res.json())
        .then(data => setDataCharts(data));
    }
    fetchApi();
  }, [])
  const config = {
    data: dataCharts,
    xField: "year",
    yField: "value",
    seriesField: 'category',
    isStack: true,
    connectedArea: true
    // autoFit: false,
    // width: 500,
    // height: 300,
    // smooth: true,
    // point: true,
    // slider: {
    //   start: 0,
    //   end: 1
    // }
  };
  return (
    <>
      <h2>StackedColumn</h2>
      <Column {...config} />
    </>
  )
}

export default StackedColumn