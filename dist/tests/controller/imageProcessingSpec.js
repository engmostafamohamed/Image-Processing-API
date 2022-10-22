"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import resizeFunc from "../../controller/imageProcessing";
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../routes/index"));
const request = (0, supertest_1.default)(index_1.default);
describe("Test for resizeFunc", () => {
    // it("should return error if image name does not exist", async () => {
    //     await request.get("/photo?name=noImage&width=800&height=1800").then((response) => {
    //         return (expect(response.status).toBe(403))
    //     })
    //     // const response = await request.get("/photo?name=noImage&width=800&height=1800")
    //     // expect(response.status).toBe(403)
    // })
    it("should return error if image name does not exist", () => __awaiter(void 0, void 0, void 0, function* () {
        function getfun(url) {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield fetch(url);
                return expect(response.status).toBe(403);
            });
        }
        getfun("http://localhost:3000/photo?name=noImage&width=800&height=1800").then((res) => console.log(res));
    }));
    // it("should return error if width is not a number ", async () => {
    //     await request.get("/photo?name=icelandwaterfall&width=number&height=1800").then((response) => {
    //         return (expect(response.status).toBe(400))
    //     })
    //     // const response = await request.get("/photo?name=icelandwaterfall&width=number&height=1800")
    //     // expect(response.status).toBe(400)
    // })
    it("should return error if width is not a number ", () => __awaiter(void 0, void 0, void 0, function* () {
        function getfun(url) {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield fetch(url);
                return expect(response.status).toBe(400);
            });
        }
        getfun("http://localhost:3000/photo?name=icelandwaterfall&width=number&height=1800").then((res) => console.log(res));
    }));
    // it("should return error if height is not a number ", async () => {
    //     await request.get("/photo?name=icelandwaterfall&width=800&height=number").then((response) => {
    //         return expect(response.status).toBe(403)
    //     })
    //     // const response = await request.get("/photo?name=icelandwaterfall&width=800&height=number")
    //     // expect(response.status).toBe(403)
    //     // expect(response.text).toBe("please enter valid name")
    // })
    it("should return error if height is not a number ", () => __awaiter(void 0, void 0, void 0, function* () {
        function getfun(url) {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield fetch(url);
                return expect(response.status).toBe(403);
            });
        }
        getfun("http://localhost:3000/photo?name=icelandwaterfall&width=800&height=number").then((res) => console.log(res));
    }));
});
