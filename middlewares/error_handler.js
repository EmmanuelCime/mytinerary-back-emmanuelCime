const error_handler = (error, req, res, next) => {
    console.log(error);
    return res.status(500).json({
        success: false,
        response: error,
        message: "Something went wrong"

    });
}
export default error_handler;