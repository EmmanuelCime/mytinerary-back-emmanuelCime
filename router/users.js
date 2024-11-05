import { Router } from "express";
import { allUsers, userById, itinerary } from "../controllers/users/read.js";
import {create, createMany} from "../controllers/users/create.js"
import { deleteUser } from "../controllers/users/delete.js";
import { update } from "../controllers/users/update.js";

const usersRouter = Router(); //Por defecto esta constante solo funciona dentro de la clase, pero empezando se puede dejar asi

usersRouter.get("/all", allUsers);
usersRouter.get("/id/:_id", userById);
usersRouter.get("/itinerary/:_id", itinerary);

usersRouter.post("/create", create);
usersRouter.post("/createMany", createMany);

usersRouter.delete("/delete/:_id", deleteUser);

usersRouter.put("/update/:_id", update);


export default usersRouter;