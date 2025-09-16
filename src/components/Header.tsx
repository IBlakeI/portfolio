interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex w-full items-center">
      <div className="border-accent w-6 flex-shrink-0 border-t-2" />
      <div className="mx-3 font-bold whitespace-nowrap">{label}</div>
      <div className="border-accent flex-grow border-t-2" />
    </div>
  );
};

export default Header;
