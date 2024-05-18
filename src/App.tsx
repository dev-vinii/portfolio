import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/Sidebar/Sidebar.";
import routes from "./routes/routes";

function App() {
  return (
    <>
      <SideBar/>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              element={<route.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
