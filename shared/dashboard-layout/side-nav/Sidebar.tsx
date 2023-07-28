import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FIRST_LINKS,
  SECOND_LINKS,
  THIRD_LINK,
} from "../../../lib/side-nav-links";
import { clsx } from "clsx";
// import Logo from "../../logo/Logo";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-[260px] hidden md:block bg-indigo-500 h-full">
      <div className="p-4 ">
        <h4 className="text-white font-semibold py-2">User</h4>
        <div className="space-y-3 my-4">
          {FIRST_LINKS.map((links) => (
            <Link
              href={links.path}
              className="flex items-center gap-2 text-slate-100 hover:text-slate-600 py-3 px-3 rounded hover:bg-purple-100 transition-all ease-in"
            >
              <div>{links.icon}</div>
              <div>{links.label}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-white font-semibold py-2">Money Transfers</h4>
        <div className="space-y-3 my-4">
          {SECOND_LINKS.map((links) => (
            <Link
              href={links.path}
              className="flex items-center gap-2 text-slate-100 hover:text-slate-600 py-3 px-2 rounded hover:bg-purple-100 transition-all ease-in"
            >
              <div>{links.icon}</div>
              <div>{links.label}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-white font-semibold py-2">Trading</h4>
        <div className="space-y-3 my-4">
          {THIRD_LINK.map((links) => (
            <Link
              href={links.path}
              className="flex items-center gap-2 text-slate-100 hover:text-slate-600 py-3 px-2 rounded hover:bg-purple-100 transition-all ease-in"
            >
              <div>{links.icon}</div>
              <div>{links.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
