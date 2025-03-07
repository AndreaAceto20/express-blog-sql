function notFound(req, res, next) {
    res.status(404);
    res.json({
        error: "Not found",
        message: "Post non trovato",
    })
};

module.exports = notFound;