import {useEffect, useState} from "react";
import {Rose} from "@ant-design/plots";

function BasicRose() {
  const [dataCharts, setDataCharts] = useState([]);
  useEffect(() => {
    const fetchApi = () => {
      fetch("http://localhost:3000/pie")
        .then(res => res.json())
        .then(data => setDataCharts(data));
    }
    fetchApi();
  }, [])
  const config = {
    data: dataCharts,
    xField: "type",
    yField: "value",
    seriesField: 'type'
  };
  return (
    <>
      <h2>BasicRose</h2>
      <Rose {...config} />
    </>
  )
}

export default BasicRose