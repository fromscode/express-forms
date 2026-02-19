module.exports = (error, _, res, next) => {
    res.status(500).render("error", {
        err: {
            message: "Internal Server Error",
        },
    });
};
