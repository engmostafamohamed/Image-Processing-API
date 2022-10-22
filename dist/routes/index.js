"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
const imageProcessing_1 = __importDefault(require("../controller/imageProcessing"));
// api for display home page
routes.get("/", (req, res) => {
    res.status(200).send("api server working");
});
//api for display photo
routes.get("/photo", imageProcessing_1.default);
exports.default = routes;
