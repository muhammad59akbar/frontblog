import Dashboard from "../../components/admin/Dashboard";
import EditBlog from "../../components/admin/EditBlog";
import EditUser from "../../components/admin/EditUser";
import AddBlog from "./AddBlog";
import AddUser from "./AddUser";
import Users from "./Users";
import ViewBlog from "./ViewBlog";

const RoutesAdmin = [
  { path: "/dashboard", exact: true, name: "Dashboard", component: Dashboard },
  { path: "/Write-Blog", exact: true, name: "Write-Blog", component: AddBlog },
  { path: "/Add-User", exact: true, name: "Add-User", component: AddUser },
  { path: "/ViewBlog", exact: true, name: "View-Blog", component: ViewBlog },
  { path: "/Users", exact: true, name: "View-Blog", component: Users },
  { path: "/Users/Edit", exact: true, name: "View-Blog", component: EditUser },
  {
    path: "/ViewBlog/Edit",
    exact: true,
    name: "View-Blog",
    component: EditBlog,
  },
];

export default RoutesAdmin;
