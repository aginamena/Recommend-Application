const errorMiddlewareHandler = (err, req, res, next) => {
    console.log(err);
    console.log(next);
    const errorStatusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        "test": "123"
    })
}

module.exports = { errorMiddlewareHandler };