import AmountCard from "../../shared/cards/amount-card";
import { useFetchUser } from "../../hooks/useFetchUser";

const DashboardAccountCards = () => {
  const { userState: user, loading }: any = useFetchUser();
  return (
    <section>
      <div className="py-3 px-1 font-main text-white font-semibold text-xl">
        Account Summary
      </div>

      <div className="flex md:flex-row flex-col items-center justify-between gap-3 py-3">
        <AmountCard
          accountType={"deposit"}
          amount={user?.deposited}
          loading={loading}
        />
        <AmountCard
          accountType={"balance"}
          amount={user?.balance}
          loading={loading}
        />
        <AmountCard
          accountType={"bonus"}
          amount={user?.bonus}
          loading={loading}
        />
        {/* <PlanCard
          accountType={"Active Plan"}
          plan={user?.plan ? user?.plan : "N/A"}
          loading={loading}
        /> */}
      </div>
    </section>
  );
};

export default DashboardAccountCards;
