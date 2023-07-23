import React from "react";
import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { AiFillMoneyCollect, AiOutlineBank } from "react-icons/ai";
import { SiMarketo } from "react-icons/si";
import { MdMoney, MdTransform } from "react-icons/md";

export const FIRST_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <RxDashboard />,
  },
  {
    key: "profile",
    label: "Profile",
    path: "/account-profile",
    icon: <CgProfile />,
  },
];

export const SECOND_LINKS = [
  {
    key: "deposit",
    label: "Deposit",
    path: "/deposit",
    icon: <AiOutlineBank />,
  },
  {
    key: "withdraw",
    label: "Withdraw",
    path: "/withdraw",
    icon: <AiFillMoneyCollect />,
  },
];

export const THIRD_LINK = [
  {
    key: "market",
    label: "Market",
    path: "/market",
    icon: <SiMarketo />,
  },
  {
    key: "invest",
    label: "Invest",
    path: "/invest",
    icon: <MdMoney />,
  },
  {
    key: "p2p",
    label: "P2P trading",
    path: "/peer-to-peer",
    icon: <MdTransform />,
  },
];

