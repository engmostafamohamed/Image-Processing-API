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
const fs_1 = require("fs");
const fs_2 = __importDefault(require("fs"));
const path_1 = require("path");
const sharp_1 = __importDefault(require("sharp"));
const path_2 = __importDefault(require("path"));
// function to resizing image
const resizeFunc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //this is sample data to represent database
    const data = [
        "encenadaport",
        "fjord",
        "icelandwaterfall",
        "palmtunnel",
        "santamonica",
    ];
    const imageName = req.query.name;
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    // get real path of image
    const imagePath = (0, path_1.resolve)("./") + `/images/${imageName}.jpg`;
    //check if name of image found in array
    const item = data.includes(imageName);
    //if the image name not found
    if (imageName === undefined) {
        return res.status(400).send("name of image is required.");
    }
    //if the image name not found
    if (item === false) {
        return res.status(403).send("please enter valid name");
    }
    //if the image dimention not found
    else if (width === undefined && height === undefined) {
        return res.status(404).send("please Enter width and height .");
    }
    //if the image path not found
    else if ((0, fs_1.existsSync)(imagePath) === false) {
        return res.status(404).send("image not found.");
    }
    //create resizing folder if not found
    fs_2.default.access("./resizing", (error) => {
        if (error) {
            fs_2.default.mkdirSync("./resizing");
        }
    });
    //rename image
    const imageFormate = `${imageName}_${width}_${height}.jpg`;
    //resizing image by using height and width
    try {
        yield (0, sharp_1.default)(imagePath)
            .resize(width, height)
            .toFile(`./resizing/${imageFormate}`);
    }
    catch (error) {
        return res.status(404).send(`Error happend.${error}`);
    }
    res.sendFile(readFile(imageFormate));
    // res.status(200).send('done')
    //function get image name and return path resizing folder
    function readFile(image) {
        try {
            const result = path_2.default.join(__dirname, "../../resizing/" + image);
            return result;
        }
        catch (error) {
            return `Something went wrong.${error}`;
            // return res.status(404).send(`Error happend.${error}`)
        }
    }
});
exports.default = resizeFunc;
