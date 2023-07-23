import React from "react";
import Link from "next/link";

const HeroCta = () => {
  return (
    <section>
      <div>
        <div className="w-[80%] md:[50%] mx-auto shadow-xl p-4 space-y-4 rounded">
          <h1 className="text-center font-bold text-xl">
            Start Your Application Now
          </h1>
          <div className="flex flex-col items-center justify-center text-center">
            <p>
              We value your privacy. By clicking 'Create Account', you confirm
              that you have read and accepted our Privacy Policy and you
              understand that you are creating an account under our Bit rocket
              mine Global Limited regulated by the SCB, (SIA-F220).
            </p>
            <Link
              href="/auth/sign-up"
              className="rounded-full px-6 py-3 bg-green-500 my-4 text-xl text-white"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCta;
