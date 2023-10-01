import notesImg from "../../assets/notes_img.png";
const DefaultPage = () => {
  return (
    <>
      <div className="h-[100vh] grid place-content-center gap-5 text-center">
        <div className="max-w-[600px]">
          <div className="w-96 mx-auto">
            <img src={notesImg} alt="notes-image" />
          </div>

          <h1 className="text-4xl font-bold py-3">Pocket Notes</h1>
          <p className="text-defaultPageTextColor text-xl font-medium py-3">
            Send and receive messages without keeping your phone online. Use
            Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div>

        <div className="justify-items-end">
          <p className="text-defaultPageTextColor text-sm font-medium">
            🔐 end-to-end encrypted
          </p>
        </div>
      </div>
    </>
  );
};

export default DefaultPage;
