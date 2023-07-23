import React from "react";
import Transaction from "./Transaction";
import transactions from "../../lib/transactions";

const Transactions = () => {
  console.log(transactions);
  return (
    <section>
      <div className="p-4">
        <h3 className="font-semibold underline text-neutral-100 text-xl capitalize">
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
