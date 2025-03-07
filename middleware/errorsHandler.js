function errorsHandler(err, req, res) {
    res.status(500);
    res.json({
        error: err.message,
    })
};

module.exports = errorsHandler;