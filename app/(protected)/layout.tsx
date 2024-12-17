import { NavBar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-screen pt-10 w-full flex flex-col gap-y-10 bg-blue-100  items-center px-10">
      <NavBar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
