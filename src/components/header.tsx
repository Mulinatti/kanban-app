import MoreOptions from "./more-options";
import NewTask from "./new-task";

interface HeaderProps {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between p-5 border-b row-span-1">
      <div className="flex gap-12 items-center">
        <h3 className="text-xl font-semibold capitalize">{name}</h3>
        <MoreOptions />
      </div>
      <div className="flex gap-3 items-center">
        <NewTask />
      </div>
    </header>
  );
};
export default Header;
