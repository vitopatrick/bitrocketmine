import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Insights = () => {
  return (
    <section>
      {/* container */}
      <div className="w-[80%] md:w-[70%] mx-auto p-3">
        {/* GRID CONTAINER */}
        <div className="grid md:grid-cols-2 gap-6 place-items-center">
          {/* IMG */}
          <motion.div
            initial={{ y: "10px" }}
            animate={{ y: "20px" }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
            className="w-[70%]"
          >
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/050e12c0-square-cool-logo_10000000g90go007000028.png"
              alt="img"
            />
          </motion.div>
          {/* END OF IMG */}
          {/* WRITE UP */}
          <div className="space-y-10">
            <h4 className="font-light text-3xl md:text-4xl text-green-900">
              We’ve got your back with{" "}
              <span className="font-bold">exclusive trading insight</span>
            </h4>
            <p>
              Gain access to trading insight and live streams from professional
              guest traders in the Bit rocket mine Trade Zone. Put theory to
              practice.
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
          {/* END OF WRITE UP */}
        </div>
        {/* END OF GRID CONTAINER */}
      </div>
      {/* end of container */}
    </section>
  );
};

export default Insights;
