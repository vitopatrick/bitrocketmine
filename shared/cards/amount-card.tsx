import { formatCurrency } from "../../utils/formatCurrency";
import { SkeletonText } from "../skeleton/Skeleton";
interface AmountCardType {
  accountType: String;
  amount: Number | any;
  loading: boolean;
}

const AmountCard = ({ accountType, amount, loading }: AmountCardType) => {
  return (
    <div
      className={
        accountType == "deposit"
          ? "bg-card font-main rounded font-sec w-full p-3 border-t-2 border-yellow-500"
          : accountType == "balance"
          ? "bg-card font-main rounded font-sec w-full p-3 border-t-2 border-purple-500"
          : "bg-card font-main rounded font-sec w-full p-3 border-t-2 border-teal-500"
      }
    >
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="font-semibold capitalize text-neutral-400">
            {accountType}
          </h1>
        </div>
        <div>
          {loading && <SkeletonText height={10} width={200} />}
          {!loading && (
            <h1 className="font-bold text-2xl">{formatCurrency(amount)}</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export const PlanCard = ({
  accountType,
  plan,
  loading,
}: {
  accountType: string;
  plan: string;
  loading: false;
}) => {
  return (
    <div className="bg-card font-main rounded font-sec w-full p-3">
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="font-semibold">{accountType}</h1>
        </div>
        <div>
          {loading && <SkeletonText height={10} width={200} />}
          {!loading && <h1 className="font-bold text-2xl">{plan}</h1>}
        </div>
      </div>
    </div>
  );
};

export default AmountCard;
