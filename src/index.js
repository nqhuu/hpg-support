import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine.js";
import initRouter from "./routes/index.js";
import dotenv from 'dotenv';
dotenv.config({ path: './src/.env' });

const app = express()
// config app
// config req.body - cho phép server của bạn xử lý dữ liệu dạng JSON được gửi trong body của các yêu cầu HTTP
// Khi client gửi dữ liệu JSON trong request body, middleware này sẽ tự động phân tích (parse) dữ liệu và gắn nó vào req.body.
app.use(bodyParser.json());

// giúp xử lý dữ liệu dạng html
app.use(bodyParser.urlencoded({ extended: true }))


//config viewEngine
configViewEngine(app);

//init web routes
initRouter(app);

const PORT = process.env.PORT || 8080;
console.log(process.env.PORT)
app.listen(PORT, () => {
    console.log("Khởi động server thành công trên cổng: ", PORT)
})