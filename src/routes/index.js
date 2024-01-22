//icons
import { RiDashboardFill, RiSettings5Fill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { FaWallet } from "react-icons/fa";
import { IoDocumentsSharp, IoCardSharp } from "react-icons/io5";
import { SiBuzzfeed } from "react-icons/si";
import { BiTransfer } from "react-icons/bi";

// components
import Login from "pages/login";
import ResetPassword from "pages/resetPassword";
import ConfirmReset from "pages/confirmReset";
import Dashboard from "pages/dashboard";
import Wallet from "pages/wallet";
import Cards from "pages/cards";
import Transactions from "pages/transactions";
import Transfers from "pages/transfers";
import Users from "pages/users";
import UserTransaction from "pages/users/components/UserTransaction";
import EditeUser from "pages/users/components/Edite";
import AddUser from "pages/users/components/AddUser";
import Documents from "pages/documents";
import Benifit from "pages/benefit";
import Payins from "pages/operations/payins";
import FourOfour from "pages/404";
import Chat from "pages/chat";
import Restrictions from 'pages/restrictions';

const routes = [
  {
    label: "Login",
    path: "/",
    icon: RiDashboardFill,
    component: Login,
    protected: false,
    menu: false,
    sidbarlist: false,
  },
  {
    label: "reset Password",
    path: "/resetPassword",
    icon: RiDashboardFill,
    component: ResetPassword,
    protected: false,
    menu: false,
    sidbarlist: false,
  },
  {
    label: "confirm reset Password",
    path: "/confirmResetPassword",
    icon: RiDashboardFill,
    component: ConfirmReset,
    protected: false,
    menu: false,
    sidbarlist: false,
  },
  {
    label: "Tableau de bord",
    path: "/dashboard",
    icon: RiDashboardFill,
    component: Dashboard,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: "Gestion des Utilisateurs",
    path: "/users",
    icon: HiUsers,
    component: Users,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: "edit Utilisateurs",
    path: "/users/edit",
    icon: HiUsers,
    component: EditeUser,
    protected: true,
    menu: false,
    sidbarlist: false,
  },
  {
    label: "user transactions",
    path: "/users/transactions",
    icon: HiUsers,
    component: UserTransaction,
    protected: true,
    menu: false,
    sidbarlist: false,
  },
  {
    label: "Créer un utilisateur",
    path: "/users/add",
    icon: HiUsers,
    component: AddUser,
    protected: true,
    menu: false,
    sidbarlist: false,
  },
  {
    label: "Gestion des Portefeuille",
    path: "/wallet",
    icon: FaWallet,
    component: Wallet,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: "Gestion des documents",
    path: "/documents",
    icon: IoDocumentsSharp,
    component: Documents,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: "Gestion des opérations",
    icon: RiSettings5Fill,
    // component: components,
    protected: true,
    menu: true,
    sidbarlist: true,
    nested: [
      {
        label: "Payins",
        path: "/payins",
        // icon: RiDashboardFill,
        component: Payins,
        protected: true,
        sidbarlist: true,
      },
      //   {
      //     label: 'payout',
      //     path: '/payout',
      //     // icon: RiDashboardFill,
      //     // component: components,
      //     protected: true,
      //     menu: false,
      //     sidbarlist: true,
      //   },
      //   {
      //     label: 'payRefund',
      //     path: '/payRefund',
      //     // icon: RiDashboardFill,
      //     // component: components,
      //     protected: true,
      //     menu: false,
      //     sidbarlist: true,
      //   },
    ],
  },
  {
    label: "Gestion des bénéficiaires",
    icon: SiBuzzfeed,
    path: "/benefit",
    component: Benifit,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: "Gestion des transactions",
    path: "/transactions",
    icon: BiTransfer,
    component: Transactions,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: "Gestion des transfers",
    path: "/transfers",
    icon: BiTransfer,
    component: Transfers,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: "Gestion des cartes",
    path: "/cards",
    icon: IoCardSharp,
    component: Cards,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: 'Gestion des restrictions',
    path: '/restrictions',
    icon: IoCardSharp,
    component: Restrictions,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
  {
    label: '404',
    path: '*',
    component: FourOfour,
    protected: false,
    menu: false,
    sidbarlist: false,
  },
  {
    label: "Chat",
    path: "/chat",
    icon: IoCardSharp,
    component: Chat,
    protected: true,
    menu: false,
    sidbarlist: true,
  },
];

export default routes;
