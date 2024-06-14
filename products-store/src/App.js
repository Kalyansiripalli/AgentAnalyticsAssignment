import "./App.css";
import { Outlet } from "react-router-dom/dist/umd/react-router-dom.development";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
