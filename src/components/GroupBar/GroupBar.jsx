import {useEffect, useState} from "react";
import {Bar} from "@ant-design/plots";

function GroupBar() {
  const [dataCharts, setDataCharts] = useState([]);
  useEffect(() => {
    const fetchApi = () => {
      fetch("http://localhost:3000/multi-line")
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
    isGroup: true,
    connectedArea: true,
    // autoFit: false,
    // width: 500,
    // height: 300,
    // smooth: true,
    // point: true,
    slider: {
      start: 0,
      end: 1
    }
  };
  return (
    <>
      <h2>GroupBar</h2>
      <Bar {...config} />
    </>
  )
}

export default GroupBar