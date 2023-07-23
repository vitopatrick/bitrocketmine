import Transactions from "../../components/p2p/Transactions";
import Alert from "../../shared/alerts/Alert";
import Layout from "../../shared/dashboard-layout/Layout";

export default function P2P() {
  return (
    <Layout>
      <Alert
        message={
          "bit rocket mine's peer-to-peer platform allows users within our community to buy Bitcoins and other cryptocurrencies with their local currency at 0 fees. "
        }
      />
      <Transactions />
    </Layout>
  );
}
