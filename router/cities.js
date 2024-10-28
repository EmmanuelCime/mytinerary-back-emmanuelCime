import { Router } from "express";
import {allCities, cityById} from "../controllers/cities/read.js";
import {create, createMany} from "../controllers/cities/create.js"

const citiesRouter = Router() //Por defecto esta constante solo funciona dentro de la clase, pero empezando se puede dejar asi

citiesRouter.get("/all", allCities)
citiesRouter.get("/id/:_id", cityById)

citiesRouter.post("/create", create)
citiesRouter.post("/createMany", createMany)


export default citiesRouter