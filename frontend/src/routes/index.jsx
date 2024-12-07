import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UserList from "../components/UserList";
import AddUser from "../components/AddUser";
import EditUser from "../components/EditUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <UserList />,
      },
      {
        path: "add",
        element: <AddUser />,
      },
      {
        path: "edit/:id",
        element: <EditUser />,
      },
    ],
  },
]);

export default router;
