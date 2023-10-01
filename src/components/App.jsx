import GroupNotes from "./GroupNotes";
import Notes from "./Notes";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const DesktopLayout = () => {
  return (
    <div className="min-h-[100vh] font-roboto flex">
      <GroupNotes />
      <Notes />
    </div>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DesktopLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
