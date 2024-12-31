import express from 'express'

const configViewEngine = (app) => {
    app.use(express.static('./src/public')); // app cho phép chúng ta truy cập những file hình ảnh, css, js trong thư mục public
    app.set("view engine", "ejs"); // để express biết được view engine là ejs , đây là công nghệ sử dụng để viết html
    app.set("views", "./src/views"); // đẻ express biết được tất cả các file của view engine sẽ lưu trong thư mục views 
};

export default configViewEngine;