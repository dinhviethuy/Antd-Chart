import {useEffect, useState} from "react";
import {Column} from "@ant-design/plots";

function GroupColumn() {
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
      <h2>GroupColumn</h2>
      <Column {...config} />
    </>
  )
}

export default GroupColumn