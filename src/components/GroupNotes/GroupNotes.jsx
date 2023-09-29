import GroupList from "./GroupList";

const GroupNotes = () => {
  return (
    <section className="w-[350px]">
      <div className="h-full w-full flex flex-col fixed top-0 left-0 md:w-[350px]">
        <section className="pt-8 pb-6 mx-auto bg-white">
          <h1 className="text-3xl font-medium">Pocket Notes</h1>
        </section>

        <section className="pl-8 flex-grow overflow-y-scroll">
          <GroupList />
        </section>
        <button className="absolute bottom-4 right-6 w-16 h-16 rounded-full bg-darkBlue">
          <span className="text-white text-4xl font-medium">+</span>
        </button>
      </div>
    </section>
  );
};

export default GroupNotes;
