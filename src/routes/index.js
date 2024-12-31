import express from "express";
import siteRouter from "./site.js";
import userRouter from "./user.js"

// từ index này sẽ tạo các tuyến đường tới các tuyến đường khác
const initRouter = (app) => {
    // khởi tạo routes đến file Router
    app.use("/user", userRouter);
    app.use("/", siteRouter);
}

export default initRouter;
