import GroupList from "./GroupList";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import CreateGroup from "./CreateGroup";
const GroupNotes = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <section className="relative min-h-full w-full md:min-w-[400px] md:max-w-[400px]">
      <div className="h-24 sticky top-0 left-0 right-0 flex items-center justify-center">
        <h1 className="text-3xl font-medium">Pocket Notes</h1>
      </div>

      <div className="max-h-[calc(100vh-6rem)] overflow-y-auto">
        <GroupList />
      </div>

      <button
        onClick={open}
        className="absolute bottom-4 right-6 w-16 h-16 rounded-full bg-darkBlue"
      >
        <span className="text-white text-4xl font-medium">+</span>
      </button>

      <Modal opened={opened} onClose={close} centered withCloseButton={false}>
        <CreateGroup closeModal={close} />
      </Modal>
    </section>
  );
};

export default GroupNotes;
