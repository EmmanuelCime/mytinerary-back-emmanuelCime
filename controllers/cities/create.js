import City from "../../models/City.js";

let create = async(req, res, next) => {
    try {
        let city = req.body
        let all = await City.create(city)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        /* return res.status(500).json({
            response: error
        }) */
        next(error)
    }
}

let createMany = async (req, res, next) => {
    try {
        let cities = req.body;
        let all = await City.insertMany(cities);
        return res.status(201).json({
            response: all
        });
    } catch (error) {
        /* return res.status(500).json({
            response: error
        }); */
        next(error)
    }
}

export {create, createMany}