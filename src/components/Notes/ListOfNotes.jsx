/* eslint-disable react/prop-types */
const ListOfNotes = ({ groupName }) => {
  const notes = JSON.parse(localStorage.getItem("groups")).find(
    (group) => group.groupName === groupName
  ).notes;

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

        {/* <li>
          <article className="p-2 bg-white rounded-md shadow-notesItem">
            <p className="text-sm p-2 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores commodi nostrum possimus mollitia rem est, expedita
              maxime quos totam a consectetur, atque rerum odio hic. Veniam
              tempore ab repudiandae dicta impedit natus dolores est ipsam
              tempora itaque, suscipit praesentium recusandae, quis quibusdam
              ratione dolorem obcaecati? Blanditiis esse perferendis eveniet
              possimus, nulla, deleniti modi voluptatibus eligendi voluptatem
              reprehenderit nostrum voluptatum molestiae ratione vitae autem
              omnis doloremque veritatis facilis rem natus necessitatibus enim
              sequi expedita. Blanditiis aut eos optio necessitatibus et eum
              amet quasi nobis, voluptatem, molestiae sed aspernatur, alias nam
              quo magni nisi suscipit cumque tempore rerum quibusdam culpa!
              Aperiam, odio.
            </p>
            <p className="text-sm text-notesTextColor font-medium  text-end md:text-base">
              9 mar 2023 - 10:10AM
            </p>
          </article>
        </li>
        <li>
          <article className="p-2 bg-white rounded-md shadow-notesItem">
            <p className="text-sm p-2 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores commodi nostrum possimus mollitia rem est, expedita
              maxime quos totam a consectetur, atque rerum odio hic. Veniam
              tempore ab repudiandae dicta impedit natus dolores est ipsam
              tempora itaque, suscipit praesentium recusandae, quis quibusdam
              ratione dolorem obcaecati? Blanditiis esse perferendis eveniet
              possimus, nulla, deleniti modi voluptatibus eligendi voluptatem
              reprehenderit nostrum voluptatum molestiae ratione vitae autem
              omnis doloremque veritatis facilis rem natus necessitatibus enim
              sequi expedita. Blanditiis aut eos optio necessitatibus et eum
              amet quasi nobis, voluptatem, molestiae sed aspernatur, alias nam
              quo magni nisi suscipit cumque tempore rerum quibusdam culpa!
              Aperiam, odio.
            </p>
            <p className="text-sm text-notesTextColor font-medium  text-end md:text-base">
              9 mar 2023 - 10:10AM
            </p>
          </article>
        </li>
        <li>
          <article className="p-2 bg-white rounded-md shadow-notesItem">
            <p className="text-sm p-2 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores commodi nostrum possimus mollitia rem est, expedita
              maxime quos totam a consectetur, atque rerum odio hic. Veniam
              tempore ab repudiandae dicta impedit natus dolores est ipsam
              tempora itaque, suscipit praesentium recusandae, quis quibusdam
              ratione dolorem obcaecati? Blanditiis esse perferendis eveniet
              possimus, nulla, deleniti modi voluptatibus eligendi voluptatem
              reprehenderit nostrum voluptatum molestiae ratione vitae autem
              omnis doloremque veritatis facilis rem natus necessitatibus enim
              sequi expedita. Blanditiis aut eos optio necessitatibus et eum
              amet quasi nobis, voluptatem, molestiae sed aspernatur, alias nam
              quo magni nisi suscipit cumque tempore rerum quibusdam culpa!
              Aperiam, odio.
            </p>
            <p className="text-sm text-notesTextColor font-medium  text-end md:text-base">
              9 mar 2023 - 10:10AM
            </p>
          </article>
        </li> */}
      </ul>
    </>
  );
};

export default ListOfNotes;
