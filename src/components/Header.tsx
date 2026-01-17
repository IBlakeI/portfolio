interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex w-full items-center">
      <div className="w-6 flex-shrink-0 border-t-2 border-neutral-700" />
      <div className="mx-3 font-bold">{label}</div>
      <div className="flex-grow border-t-2 border-neutral-700" />
    </div>
  );
};

export default Header;
