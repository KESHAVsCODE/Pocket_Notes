import ListOfNotes from "./ListOfNotes";
const Notes = () => {
  return (
    <section className="hidden flex-grow md:flex flex-col bg-notesBackgroundColor">
      <header className="h-max bg-lightBlue">
        <div className="flex items-center text-white gap-5 font-medium text-lg p-4">
          <p className="w-14 h-14  text-xl flex items-center justify-center rounded-full  bg-[#6499E9]">
            <span>MN</span>
          </p>
          <p className="text-base">My Notes</p>
        </div>
      </header>
      <main>
        <ListOfNotes />
      </main>
    </section>
  );
};

export default Notes;
