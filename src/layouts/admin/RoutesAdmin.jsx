import Dashboard from "../../components/admin/Dashboard";
import AddBlog from "./AddBlog";

const RoutesAdmin = [
  { path: "/dashboard", exact: true, name: "dashboard", component: Dashboard },
  { path: "/Write-Blog", exact: true, name: "dashboard", component: AddBlog },
];

export default RoutesAdmin;
