import City from "../../models/City.js"

let allCities = async (req, res, next) => {
    try {
        let { name } = req.query
        console.log(name)
        let query = {}
        
        if (name) {
            query.name = {$regex: '^' + name, $options:"i"}
        }

        let all = await City.find(query)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        /* return res.status(500).json({
            response: error
        })*/
       next(error)
    }
}

let cityById = async (req, res, next) => {
    try {
        let idQuery = req.params._id; // Asegúrate de que el nombre del parámetro en la URL sea "id"
        let city = await City.findById(idQuery); // Cambiar a findById

        if (!city) {
            return res.status(404).json({
                response: "City not found"
            });
        }

        return res.status(200).json({
            response: city // Ahora devolverá un único objeto
        });
    } catch (error) {
        next(error);
    }
}

export { allCities, cityById }