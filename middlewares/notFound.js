module.exports = (_, res) => {
    res.status(404).render("error", {
        err: {
            message: "Resource not found",
        },
    });
};
