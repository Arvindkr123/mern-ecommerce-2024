/* eslint-disable react/prop-types */
import { adminSidebarMenuItems } from "@/config";
import { ChartNoAxesCombined } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { Fragment } from "react";

const MenuItems = ({ setOpen }) => {
  const navigate = useNavigate();

  return (
    <nav className="mt-8 flex flex-col gap-2">
      {adminSidebarMenuItems.map((menuItems) => (
        <div
          key={menuItems.id}
          onClick={() => {
            navigate(menuItems.path);
            if (setOpen) setOpen(false); // Close the Sheet on item click
          }}
          className="flex cursor-pointer text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          {menuItems.icon}
          <span>{menuItems.label}</span>
        </div>
      ))}
    </nav>
  );
};

const AdminSidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();

  return (
    <Fragment>
      {/* This Sheet is for mobile view */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 mt-5 mb-5">
                <ChartNoAxesCombined size={30} />
                <h1 className="text-2xl font-extrabold">Admin Panel</h1>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
      {/* This aside is for desktop view */}
      <aside className="hidden lg:flex w-64 flex-col border-r bg-background p-6">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <ChartNoAxesCombined />
          <h1 className="text-2xl font-extrabold">Admin Panel</h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  );
};

export default AdminSidebar;
