import ChangePassword from "../../components/admin/ChangePassword";
import Dashboard from "../../components/admin/Dashboard";
import EditBlog from "../../components/admin/EditBlog";
import EditUser from "../../components/admin/EditUser";
import Profile from "../../components/admin/Profile";
import AddBlog from "./AddBlog";
import AddUser from "./AddUser";
import Users from "./Users";
import ViewBlog from "./ViewBlog";

const RoutesAdmin = [
  { path: "/dashboard", exact: true, name: "Dashboard", component: Dashboard },
  { path: "/Write-Blog", exact: true, name: "Write-Blog", component: AddBlog },
  { path: "/Add-User", exact: true, name: "Add-User", component: AddUser },
  { path: "/Profile", exact: true, name: "Profile", component: Profile },
  {
    path: "/Change=Password/:id",
    exact: true,
    name: "Change=Password",
    component: ChangePassword,
  },
  { path: "/ViewBlog", exact: true, name: "View-Blog", component: ViewBlog },
  { path: "/Users", exact: true, name: "View-Blog", component: Users },
  {
    path: "/Users/Edit/:id",
    exact: true,
    name: "View-Blog",
    component: EditUser,
  },
  {
    path: "/ViewBlog/Edit/:id",
    exact: true,
    name: "View-Blog",
    component: EditBlog,
  },
];

export default RoutesAdmin;
