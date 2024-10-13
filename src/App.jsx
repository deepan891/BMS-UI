import Sidebar from "./Component/Sidebar";
import Navbar from "./Component/Navbar";
import ItemAction from "./Component/ItemAction";
import Search from "./Component/Search";
import Report from "./Component/Report";
import Weather from "./Component/Weather";
import WorkOrder from "./Component/WorkOrder";
import Count from "./Component/Count";
import ActivityFeeds from "./Component/ActivityFeeds";

const App = () => {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <div className="w-full p-6">
        <Navbar />
        <Count />
        <div className="grid grid-cols-3 gap-5">
          <ItemAction />
          <Search />
          <Weather />
          <Report />
          <WorkOrder />
          <ActivityFeeds />
        </div>
      </div>
    </div>
  );
};

export default App;
