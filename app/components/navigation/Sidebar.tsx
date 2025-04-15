import Link from "next/link";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { 
  Home, 
  LayoutDashboard,
  Users,
  Briefcase,
  Package
} from "lucide-react";

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/",
  },
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Clients",
    icon: Users,
    href: "/clients",
  },
  {
    label: "Jobs",
    icon: Briefcase,
    href: "/jobs",
  },
  {
    label: "Inventory",
    icon: Package,
    href: "/inventory",
  },
];

export function Sidebar() {
  return (
    <div className="h-full flex flex-col overflow-hidden border-r bg-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">BAKED</h1>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-2 p-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="flex items-center gap-2 p-3 text-sm text-gray-600 transition-colors hover:text-black hover:bg-gray-100 rounded-md"
            >
              <route.icon size={20} />
              {route.label}
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
} 