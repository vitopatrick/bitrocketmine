import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FIRST_LINKS,
  SECOND_LINKS,
  THIRD_LINK,
} from "../../../lib/side-nav-links";
import { motion, AnimatePresence } from "framer-motion";

const MobileSideNav = ({ hide, setHide }: any) => {
  return (
    <AnimatePresence>
      <motion.div
        key={hide}
        variants={{
          start: {
            x: "-999px",
          },
          end: {
            x: 0,
          },
          exit: {
            translateX: "-999px",
          },
        }}
        initial="start"
        animate="end"
        exit="exit"
        transition={{
          duration: 0.5,
        }}
        onClick={() => setHide(true)}
        className={
          hide
            ? "hidden"
            : "absolute top-0 left-0 backdrop-blur-md bg-neutral-300/40 w-screen h-screen z-50"
        }
      >
        <div className="w-[260px] md:block bg-indigo-600 h-screen">
          <div className="p-4">
            <h4 className="text-white font-semibold py-2">User</h4>
            <div className="space-y-3 my-4">
              {FIRST_LINKS.map((links) => (
                <Link
                  href={links.path}
                  className="flex items-center gap-2 text-neutral-300 py-3 px-2 rounded hover:bg-teal-50/20 transition-all ease-in"
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
                  className="flex items-center gap-2 text-neutral-300 py-3 px-2 rounded hover:bg-teal-50/20 transition-all ease-in"
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
                  className="flex items-center gap-2 text-neutral-300 py-3 px-2 rounded hover:bg-teal-50/20 transition-all ease-in"
                >
                  <div>{links.icon}</div>
                  <div>{links.label}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileSideNav;
