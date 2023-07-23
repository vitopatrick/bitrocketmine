import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Automate = () => {
  return (
    <section className="bg-neutral-50">
      {/* container */}
      <div className="md:w-[70%] w-[80%] mx-auto p-4 grid md:grid-cols-2 place-items-center gap-8">
        {/* container 1 */}
        <div className="space-y-10">
          <h4 className="text-3xl font-light md:text-4xl text-green-900">
            <span className="font-medium leading-6">
              {" "}
              Automate your trading
            </span>{" "}
            Code-free. With Capitalise.AI
          </h4>
          <p>
            Easily create, test & automate trading scenarios using everyday
            English. Enter plain language instructions and Capitalise.ai will
            execute your trades. No coding experience is required. Free monthly
            webinars are also available. Connect MetaTrader with Capitalise.ai.
            Free of charge with your Bit rocket mine account.
          </p>
          <div>
            <Link
              href="/auth/sign-up"
              className="bg-green-500 text-white capitalize font-medium px-6 w-fit py-4 rounded-full text-xl"
            >
              Create Account
            </Link>
          </div>
        </div>
        {/* end of container 1 */}
        {/* container 2 */}
        <div>
          <motion.div
            initial={{ y: "10px" }}
            animate={{ y: "20px" }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
          >
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/09279fef-green-payments_10000000fa0fp00000h028.png"
              alt="wallet"
            />
          </motion.div>
        </div>
        {/* end of container 2 */}
      </div>
      {/* end of container */}
    </section>
  );
};

export default Automate;
