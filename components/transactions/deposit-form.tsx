import { addresses } from "../../lib/wallet-address";
import { useContext, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { store } from "../../firebase";
import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
// import TradingModal from "../../shared/modal/trading-modal";
import { useFetchUser } from "../../hooks/useFetchUser";
import { motion, AnimatePresence } from "framer-motion";

// framer motion variants
const variants = {
  start: {
    opacity: 0,
    scale: 0,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

const DepositForm = () => {
  const [selectedCoin, setSelectedCoin] = useState<any | null | undefined>({});
  const [coin, setCoin] = useState<string>("Eth");
  const [amount, setAmount] = useState<string | number | any>("");
  // const [show, setShow] = useState(false);

  // get the user
  const { userState: user }: any = useFetchUser();

  const findCoin = () => {
    const selected = addresses.find((address) => address.network == coin);
    setSelectedCoin(selected);
  };

  useMemo(() => {
    findCoin();
  }, [coin]);

  const router = useRouter();

  // user context
  const { user: state }: any = useContext(UserContext);

  const depositCoin = async (e: any) => {
    e.preventDefault();
    if (!amount || !coin) {
      return toast("Please fill the form properly", {
        position: "bottom-center",
        type: "error",
        bodyClassName: "toast",
      });
    }
    try {
      // get the collection Ref
      const depositRef = collection(
        store,
        "/users",
        `/${state.email}`,
        "/deposits"
      );

      const userRef = doc(store, "/users", `/${state.email}`);
      await addDoc(depositRef, {
        amount: parseInt(amount),
        date: serverTimestamp(),
        coin: selectedCoin.sym,
        approved: false,
      });

      const newBalance = user.deposited + parseInt(amount);
      await updateDoc(userRef, {
        deposited: newBalance,
      });
      router.reload();
    } catch (e: any) {
      toast(e.code, {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
  };

  return (
    <AnimatePresence key={coin}>
      <div className="mx-3 font-variable my-4">
        {/* barcode image */}
        {!selectedCoin && <div />}
        {selectedCoin && (
          <div className="my-2 space-y-4 font-regular">
            <motion.div
              variants={variants}
              key={coin}
              initial="start"
              animate="end"
              exit="exit"
              className="w-[40%]  md:w-[20%] mx-auto"
            >
              <img src={selectedCoin.img} />
            </motion.div>
            <motion.div
              variants={variants}
              initial="start"
              animate="end"
              exit="exit"
              className="w-full md:w-[50%] mx-auto bg-indigo-200 rounded py-4 px-2 space-y-3 mt-3"
            >
              <h3 className="font-bold">{selectedCoin.address}</h3>
            </motion.div>
            <motion.div
              variants={variants}
              initial="start"
              animate="end"
              exit="exit"
              className="w-full md:w-[50%] mx-auto my-4 bg-indigo-200 space-y-4 rounded p-2"
            >
              <p className="text-sm text-neutral-400 ">Network</p>
              <h3 className="font-medium">{selectedCoin.name}</h3>
            </motion.div>
          </div>
        )}
        {/* form */}
        <div className=" font-main">
          {/* header */}
          <div>
            <h4 className="font-medium py-2 capitalize text-lg text-center underline">
              Deposit your cryptocurrency
            </h4>
          </div>
          {/* form to fill */}
          <section className="md:w-[50%] mx-auto">
            <form className="flex md:items-center justify-between py-2 md:flex-row flex-col gap-3">
              {/* choose coin to deposit in */}
              <div className="flex-1">
                <label htmlFor="coin" className="text-sm">
                  Choose Currency
                </label>
                <div className="w-full bg-indigo-200 py-2 rounded">
                  <select
                    name="coin"
                    id="coin"
                    className="bg-transparent w-full  outline-none"
                    value={coin}
                    onChange={(e) => setCoin(e.target.value)}
                  >
                    {addresses.map((address) => (
                      <option key={address.id} value={address.network}>
                        {address.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* enter amount to deposit */}
              <div className="flex-1">
                <label htmlFor="amount" className="text-sm">
                  Enter Amount to deposit
                </label>
                <div className="w-full bg-indigo-200 py-2 rounded">
                  <input
                    type="text"
                    name="amount"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-transparent w-full outline-none  px-2"
                  />
                </div>
              </div>
              {/* button to send request */}
            </form>
            <button
              onClick={depositCoin}
              className="bg-indigo-600 text-white py-2 rounded px-3 shadow w-full md:w-fit my-2"
            >
              Deposit
            </button>
          </section>
          {/* end of form to fill */}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default DepositForm;
