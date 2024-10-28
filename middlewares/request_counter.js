const request_counts = {};

const request_counter = (req, res, next) => {
    const userIp = req.ip;
    if (request_counts[userIp]) {
        request_counts[userIp]++;
    } else {
        request_counts[userIp] = 1;
    }
    console.log(`User IP: ${userIp}, Request Count: ${request_counts[userIp]}`);
    next();
};

export default request_counter