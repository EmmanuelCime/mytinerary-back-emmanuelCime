import { Router } from "express";
import { allItiniraries, itineraryById, itinerariesByCity } from "../controllers/itineraries/read.js";
import {create, createMany} from "../controllers/itineraries/create.js"
import { deleteItinerary } from "../controllers/itineraries/delete.js";
import { update } from "../controllers/itineraries/update.js";

const itinerariesRouter = Router(); //Por defecto esta constante solo funciona dentro de la clase, pero empezando se puede dejar asi

itinerariesRouter.get("/all", allItiniraries);
itinerariesRouter.get("/id/:_id", itineraryById);
itinerariesRouter.get("/city/:id", itinerariesByCity);

itinerariesRouter.post("/create", create);
itinerariesRouter.post("/createMany", createMany);

itinerariesRouter.delete("/delete/:_id", deleteItinerary);

itinerariesRouter.put("/update/:_id", update);


export default itinerariesRouter;