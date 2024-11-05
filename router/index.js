import { Router } from "express";
import citiesRouter from "./cities.js";
import usersRouter from "./users.js";
import itinerariesRouter from "./itineraries.js";

const routerIndex = Router()

routerIndex.use('/cities', citiesRouter)
routerIndex.use('/users', usersRouter)
routerIndex.use('/itineraries', itinerariesRouter)


export default routerIndex