import { useSearchParams } from "react-router-dom";

const groupAvatar = [
  "#0047FF",
  "#B38BFA",
  "#FFC0C0",
  "#43E6FC",
  "#F19576",
  "#6691FF",
  "#FF66F0",
];
const GroupList = () => {
  const groups = JSON.parse(localStorage.getItem("groups")) || [];

  const [, setSearchParams] = useSearchParams();

  return (
    <ul className="h-full w-full flex flex-col gap-2">
      {groups.map((group, index) => {
        return (
          <li
            key={index}
            onClick={() => setSearchParams({ groupName: group.groupName })}
            className="flex items-center gap-5 font-medium text-lg pl-8 py-3 rounded-2xl transition-colors hover:bg-groupItem cursor-pointer"
          >
            <p
              style={{ backgroundColor: groupAvatar[group.avatar] }}
              className="w-14 h-14 text-white text-xl flex items-center justify-center rounded-full"
            >
              <span>{group.shortGroupName}</span>
            </p>
            <p className="text-base">{group.groupName}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default GroupList;
