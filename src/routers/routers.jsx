import OverviewPage from "../components/Overview/OverviewPage";
import DeviceManagementPage from "../components/Device_Management/Device_Management";
import MonitoringPage from "../components/Real-time Monitoring/MonitoringPage";
import Grouping from "../components/Grouping/Grouping";

const routes = [
  {
    path: "Overview",
    exact: true,
    component: OverviewPage,
  },
  {
    path: "Real-time Monitoring",
    exact: true,
    component: MonitoringPage,
  },
  {
    path: "Device Management",
    exact: true,
    component: DeviceManagementPage,
  },
  {
    path: "My Account",
    exact: true,
    component: OverviewPage,
  },
  {
    path: "Grouping",
    exact: true,
    component: Grouping,
  },
];

export default routes;
