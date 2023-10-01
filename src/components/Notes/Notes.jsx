import { useSearchParams } from "react-router-dom";
import CreateNotes from "./CreateNotes";
import ListOfNotes from "./ListOfNotes";
import DefaultPage from "../DefaultPage";
const Notes = () => {
  const [searchParams] = useSearchParams();

  const groupName = searchParams.get("groupName");

  const groupData = JSON.parse(localStorage.getItem("groups")).find(
    (group) => group.groupName === groupName
  );

  console.log(groupData);

  return (
    <>
      <section className="w-full min-h-full bg-notesBackgroundColor">
        {groupData ? (
          <>
            <header className="h-24 bg-lightBlue flex items-center">
              <div className="flex p-4 items-center text-white gap-5 font-medium text-lg">
                <p className="w-14 h-14  text-xl flex items-center justify-center rounded-full  bg-[#6499E9]">
                  <span>{groupData.shortGroupName}</span>
                </p>
                <p className="text-base">{groupData.groupName}</p>
              </div>
            </header>
            <main className="relative w-full max-h-[calc(100vh-6rem)] overflow-y-auto">
              <ListOfNotes groupName={groupName} />
              <CreateNotes groupName={groupName} />
            </main>
          </>
        ) : (
          <DefaultPage />
        )}
      </section>
    </>
  );
};

export default Notes;
