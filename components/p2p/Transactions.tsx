import React from "react";
import Transaction from "./Transaction";
import transactions from "../../lib/transactions";

const Transactions = () => {
  return (
    <section>
      <div className="p-4">
        <h3 className="font-semibold underline  text-xl capitalize">
          list of past transactions
        </h3>
      </div>
      <div className="p-4">
        {transactions.map((trades) => (
          <Transaction trade={trades} />
        ))}
      </div>
    </section>
  );
};

export default Transactions;
