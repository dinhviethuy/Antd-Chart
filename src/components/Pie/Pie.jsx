import {useEffect, useState} from "react";
import {Pie} from "@ant-design/plots";

function PieChart() {
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
    angleField: "value",
    colorField: "type",
  };
  return (
    <>
      <h2>Pie</h2>
      <Pie {...config} />
    </>
  )
}

export default PieChart