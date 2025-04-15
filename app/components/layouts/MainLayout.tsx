import { Sidebar } from "../navigation/Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="h-screen flex">
      <div className="w-64 h-full">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
} 