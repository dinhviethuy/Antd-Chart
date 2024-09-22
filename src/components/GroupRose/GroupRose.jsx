import {useEffect, useState} from "react";
import {Rose} from "@ant-design/plots";

function GroupRose() {
  const [dataCharts, setDataCharts] = useState([]);
  useEffect(() => {
    const fetchApi = () => {
      fetch("http://localhost:3000/rose")
        .then(res => res.json())
        .then(data => setDataCharts(data));
    }
    fetchApi();
  }, [])
  const config = {
    data: dataCharts,
    xField: "monhoc",
    yField: "diem",
    seriesField: 'hoten',
    isGroup: true,
  };
  return (
    <>
      <h2>GroupRose</h2>
      <Rose {...config} />
    </>
  )
}

export default GroupRose