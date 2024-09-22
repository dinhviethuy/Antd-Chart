import './App.css'
import BasicLine from "./components/BasicLine/BasicLine.jsx";
import MultiLine from "./components/MultiLine/MultiLine.jsx";
import StepLine from "./components/StepLine/StepLine.jsx";
import BasicArea from "./components/BasicArea/BasicArea.jsx";
import StackedArea from "./components/StackedArea/StackedArea.jsx";
import PercentedArea from "./components/PercentedArea/PercentedArea.jsx";
import BasicColumn from "./components/BasicColumn/BasicColumn.jsx";
import StackedColumn from "./components/StackedColumn/StackedColumn.jsx";
import GroupColumn from "./components/GroupColumn/GroupColumn.jsx";
import BasicBar from "./components/BasicBar/BasicBar.jsx";
import StackedBar from "./components/StackedBar/StackedBar.jsx";
import GroupBar from "./components/GroupBar/GroupBar.jsx";
import PieChart from "./components/Pie/Pie.jsx";
import BasicRose from "./components/BasicRose/BasicRose.jsx";
import GroupRose from "./components/GroupRose/GroupRose.jsx";
import TinyLinee from "./components/TinyLine/TinyLine.jsx";
import TinyAreaa from "./components/TinyAreaa/TinyArea.jsx";

function App() {
  return (
    <>
      <BasicLine />
      <MultiLine/>
      <StepLine />
      <BasicArea />
      <StackedArea />
      <PercentedArea/>
      <BasicColumn />
      <StackedColumn />
      <GroupColumn />
      <BasicBar />
      <StackedBar />
      <GroupBar />
      <PieChart />
      <BasicRose />
      <GroupRose />
      <TinyLinee />
      <TinyAreaa/>
    </>
  )
}

export default App
