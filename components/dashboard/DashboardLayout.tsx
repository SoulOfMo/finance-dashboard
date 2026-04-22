import Aside from "../ui/Aside";
import Header from "../ui/Header";

function DashboardLayout() {
  return (
    <div className="grid h-screen grid-cols-[12.5rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Aside />
    </div>
  );
}

export default DashboardLayout;
