import { Router } from "express";
import { getUsers, getUserById, saveUser, updateUser, deleteUser } from "../controllers/UserController.js";

const route = Router();

route.get("/users", getUsers);
route.get("/users/:id", getUserById);

route.post("/users", saveUser);
route.put("/users/:id", updateUser);
route.delete("/users/:id", deleteUser);

export default route;
