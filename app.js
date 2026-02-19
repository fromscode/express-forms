const express = require("express");

const app = express();

const indexRouter = require("./routers/indexRouter");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/serverError");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use(notFound);
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server up and running at port: ${PORT}`);
    }
});
