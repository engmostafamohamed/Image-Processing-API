"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import resizeFunc from "../../controller/imageProcessing";
const supertest_1 = __importDefault(require("supertest"));
const imageProcessing_1 = __importDefault(require("../../controller/imageProcessing"));
const request = (0, supertest_1.default)(imageProcessing_1.default);
describe("Test for resizeFunc", () => {
    // it("should return error if image name does not exist", async () => {
    //     await request.get("/photo?name=noImage&width=800&height=1800").then((response) => {
    //         return (expect(response.status).toBe(403))
    //     })
    //     // const response = await request.get("/photo?name=noImage&width=800&height=1800")
    //     // expect(response.status).toBe(403)
    // })
    it("should return error if image name does not exist", async () => {
        async function getfun(url) {
            const response = await fetch(url);
            return expect(response.status).toBe(403);
        }
        getfun("http://localhost:3000/photo?name=noImage&width=800&height=1800").then((res) => console.log(res));
    });
    // it("should return error if width is not a number ", async () => {
    //     await request.get("/photo?name=icelandwaterfall&width=number&height=1800").then((response) => {
    //         return (expect(response.status).toBe(400))
    //     })
    //     // const response = await request.get("/photo?name=icelandwaterfall&width=number&height=1800")
    //     // expect(response.status).toBe(400)
    // })
    it("should return error if width is not a number ", async () => {
        async function getfun(url) {
            const response = await fetch(url);
            return expect(response.status).toBe(400);
        }
        getfun("http://localhost:3000/photo?name=icelandwaterfall&width=number&height=1800").then((res) => console.log(res));
    });
    // it("should return error if height is not a number ", async () => {
    //     await request.get("/photo?name=icelandwaterfall&width=800&height=number").then((response) => {
    //         return expect(response.status).toBe(403)
    //     })
    //     // const response = await request.get("/photo?name=icelandwaterfall&width=800&height=number")
    //     // expect(response.status).toBe(403)
    //     // expect(response.text).toBe("please enter valid name")
    // })
    it("should return error if height is not a number ", async () => {
        async function getfun(url) {
            const response = await fetch(url);
            return expect(response.status).toBe(403);
        }
        getfun("http://localhost:3000/photo?name=icelandwaterfall&width=800&height=number").then((res) => console.log(res));
    });
    it("should return error if image path not found ", async () => {
        async function getfun(url) {
            const response = await fetch(url);
            return expect(response.text).toBe("please enter valid name");
        }
        getfun("http://localhost:3000/photo?name=&width=800&height=800").then((res) => console.log(res));
    });
});
