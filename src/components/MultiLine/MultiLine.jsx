import {useEffect, useState} from "react";
import {Line} from "@ant-design/plots";

function MultiLine() {
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
    seriesField: 'category'
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
      <h2>Multi Line</h2>
      <Line {...config} />
    </>
  )
}

export default MultiLine