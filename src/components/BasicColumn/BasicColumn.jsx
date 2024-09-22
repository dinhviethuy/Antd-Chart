import {useEffect, useState} from "react";
import { Column } from '@ant-design/plots';

function BasicColumn() {
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
    },

    label: {
      position: "top",
    }
  };
  return (
    <>
      <h2>Basic Column</h2>
      <Column {...config} />
    </>
  )
}

export default BasicColumn

