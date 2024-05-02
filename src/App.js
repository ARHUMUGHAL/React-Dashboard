import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/MainDashboard";
import DataTable from "./Pages/DataTables";
import NftMarketplace from "./Pages/NftMarketplace";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ProtectedRoutes from "./Services/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<ProtectedRoutes/>}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/datatables" element={<DataTable />} />
        <Route path="/nftmarketplace" element={<NftMarketplace />} />
      </Route>
    </Routes>
  );
}

export default App;
