/* eslint-disable react/prop-types */
const NotesList = ({ groupName }) => {
  const notes = JSON.parse(localStorage.getItem("groups")).find(
    (group) => group.groupName === groupName
  ).notes;

  if (notes?.length === 0) {
    return (
      <p className="text-center text-xl text-zinc-600 py-2">
        Notes not created yet
      </p>
    );
  }

  return (
    <>
      <ul className="p-4 flex flex-col gap-4">
        {notes.map((note, index) => {
          return (
            <li key={index}>
              <article className="px-4 py-6 bg-white rounded-md shadow-notesItem">
                <p className="text-sm md:text-lg">{note.noteText}</p>
                <p className="pt-4 text-sm text-notesTextColor font-medium  text-end md:text-base">
                  {note.createdAt}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NotesList;
