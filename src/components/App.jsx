import Groups from "./Groups";
import Notes from "./Notes";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-[100vh] font-roboto grid grid-flow-col grid-cols-customColumns">
      <Groups />
      <Notes />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
