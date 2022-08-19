"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require("express-async-errors");
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var AppError_1 = require("./erros/AppError");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use('/api/v1', routes_1.routes);
app.use(function (err, request, response, next) {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error - ".concat(err.message)
    });
});
app.listen(process.env.PORT, function () {
    console.log("Servidor rodando na porta " + process.env.PORT);
});
//# sourceMappingURL=server.js.map