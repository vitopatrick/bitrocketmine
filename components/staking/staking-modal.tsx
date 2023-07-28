import { Dispatch, SetStateAction, useContext, useMemo, useState } from "react";
import { FcBriefcase } from "react-icons/fc";
import { FiDollarSign } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { stakingOptions } from "../../lib/staking-options";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { store } from "../../firebase";
import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/router";
import { useFetchUser } from "../../hooks/useFetchUser";
import { formatCurrency } from "../../utils/formatCurrency";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  visible: Boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const StakingModal = ({ visible, setVisible }: ModalProps) => {
  const [amount, setAmount] = useState<string | number | any>();
  const [plan, setPlan] = useState("Silver");
  const [selectedPlan, setSelectedPlan] = useState<any>();
  // const [show, setShow] = useState(false);

  const { user }: any = useContext(UserContext);
  const { userState: state }: any = useFetchUser();

  const router = useRouter();

  const selectPlan = () => {
    const findPlan = stakingOptions.find((stakingOption) =>
      stakingOption.name.match(plan)
    );

    setSelectedPlan(findPlan);
  };

  useMemo(() => {
    selectPlan();
  }, [plan]);

  const updateStakingPlan = async (e: any) => {
    e.preventDefault();
    if (!amount) {
      toast("Amount is empty", {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
      return;
    }
    if (state.deposited || state.balance < amount) {
      return toast("Insufficient Balance,Please Deposit", {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }

    try {
      if (parseInt(amount) < selectedPlan.min) {
        toast(
          `Amount Should not be less than ${formatCurrency(selectedPlan.min)}`,
          {
            type: "error",
            position: "bottom-center",
            bodyClassName: "toast",
          }
        );

        return;
      }

      const collectionRef = collection(
        store,
        "users",
        `${user.email}`,
        "/investments"
      );

      await addDoc(collectionRef, {
        amount,
        plan,
        apr: selectedPlan.apr,
        duration: selectedPlan.duration,
        date: serverTimestamp(),
      });

      setVisible(false);

      router.reload();
    } catch (error: unknown | any) {
      toast(e.code, {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
  };

  return (
    <AnimatePresence>
      {/* parent div positioned absolute */}
      <motion.div
        variants={{
          start: {
            opacity: 0,
            scale: 0,
          },
          finish: {
            opacity: 1,
            scale: 1,
          },
          exit: {
            opacity: 0,
            scale: 0,
          },
        }}
        initial="start"
        animate="finish"
        exit="exit"
        key={visible ? 1 : 0}
        className={
          visible
            ? "absolute top-0 left-0 backdrop-blur-sm bg-black/25 w-full h-full"
            : "hidden"
        }
      >
        {/* main div that will be center */}
        <div className="w-[80%] md:w-[40%] mx-auto relative my-12 bg-bg font-mainrounded-md shadow-md p-4">
          <div className="absolute top-0 right-0 p-2">
            <FaTimes onClick={() => setVisible(false)} />
          </div>
          {/* parent flex div */}
          <div className="flex flex-col justify-center items-start">
            <div className="mb-6 self-center">
              <FcBriefcase size="8rem" />
            </div>
            <div className="w-full">
              <label
                htmlFor="amount"
                className="font-sec my-2 text-neutral-400"
              >
                Enter Amount
              </label>
              <div className="flex items-center bg-neutral-300 py-3 px-1 rounded mt-2 gap-2">
                <FiDollarSign className="stroke-bg" />
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-transparent  outline-none px-2"
                />
              </div>
            </div>
            <div className="w-full my-4">
              <label
                htmlFor="staking option"
                className="font-sec my-2 text-neutral-400"
              >
                Investment Option
              </label>
              <div className="flex items-center bg-neutral-300 py-3 px-1 rounded mt-2 gap-2">
                <select
                  name="option"
                  id="option"
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="w-full bg-transparent text-bg focus:outline-none px-2"
                >
                  {stakingOptions.map((stakingOption) => (
                    <option key={stakingOption.id} value={stakingOption.name}>
                      {stakingOption.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={updateStakingPlan}
              className="mt-4 inline-block w-full font-sec bg-card py-2 rounded"
            >
              Invest Now
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StakingModal;
