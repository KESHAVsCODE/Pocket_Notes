import GroupNotes from "./GroupNotes";
import Notes from "./Notes";
const App = () => {
  return (
    <div className="min-h-[100vh] font-roboto flex ">
      <GroupNotes />
      <Notes />
    </div>
  );
};

export default App;
