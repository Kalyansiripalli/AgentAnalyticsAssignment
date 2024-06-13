import "./App.css";
// import TopHeader from "./components/TopHeader";
// import BottomFooter from "./components/BottomFooter";

import { Outlet } from "react-router-dom/dist/umd/react-router-dom.development";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
