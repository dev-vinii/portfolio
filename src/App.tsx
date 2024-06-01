import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/Sidebar/Sidebar";
import routes from "./routes/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-row h-screen w-screen">
          <SideBar />
          <div className="w-full">
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
