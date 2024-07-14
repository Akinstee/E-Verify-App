
import Sidebar from "./sidebar";

const AdminLayout = ({ children }: { children: any }) => {
  return (
    <div className="flex bg-white max-w-[100vw] inter overflow-x-hidden">
      <Sidebar />
      {children}
    </div>
  );
};

export default AdminLayout;
