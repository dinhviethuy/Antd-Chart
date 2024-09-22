import {useEffect, useState} from "react";
import {Pie} from "@ant-design/plots";

function PieChart() {
  const [dataCharts, setDataCharts] = useState([]);
  useEffect(() => {
    const fetchApi = () => {
      fetch("https://dinhviethuy-database-chart.vercel.app/pie")
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