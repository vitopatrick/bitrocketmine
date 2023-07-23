import Header from "./header/Header";
import Sidebar from "./side-nav/Sidebar";

const Layout = ({ children }: any) => {
  return (
    // parent Div component
    <div className="h-screen w-screen flex md:overflow-hidden text-text_main ">
      {/*  side bar*/}
      <Sidebar />
      {/* children */}
      <div className="flex-1 bg-zinc-900 overflow-auto min-h-0">
        <Header />
        <div className="overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
