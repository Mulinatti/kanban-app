import NewTask from "./new-task";
import MoreOptions from "./more-options";

interface HeaderProps {
  name: string;
}

const Header = ({name}: HeaderProps) => {
  return (
    <header className="flex items-center justify-between p-5 border-b row-span-1">
      <h3 className="text-xl font-semibold capitalize">{name}</h3>
      <div className="flex gap-3 items-center">
        <NewTask/>
        <MoreOptions/>
      </div>
    </header>
  );
};
export default Header;
