import { TinyArea } from '@ant-design/plots';

function TinyAreaa() {
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192,
  ];
  const config = {
    height: 60,
    autoFit: false,
    data,
    smooth: true,
  };
  return (
    <>
      <h2>TinyArea</h2>
      <TinyArea {...config} />
    </>
  )
}

export default TinyAreaa

