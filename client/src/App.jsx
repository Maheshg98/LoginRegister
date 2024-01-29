import "./App.scss";
import ForgotPassword from "./Components/Dashboard/Components/ForgotPassword/ForgotPassword";
// import BodySection from "./Components/Dashboard/Components/Body Section/BodySection";
// import Sidebar from "./Components/Dashboard/Components/SideBar Section/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Dashboard/Login/Register/Login";
import Register from "./Components/Dashboard/Login/Register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ForgotPassword from "./Components/Dashboard/Components/ForgotPassword/ForgotPassword";
// import ForgotPassword from './components/ForgotPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
      {/* <Sidebar />
      <BodySection /> */}
    </div>
  );
}

export default App;
