import { Request, Response } from "express"
import { existsSync } from "fs"
import fs from "fs"
import { resolve } from "path"
import sharp from "sharp"
import path from "path"
// function to resizing image
const resizeFunc = async (req: Request, res: Response) => {
  //this is sample data to represent database
  const data: string[] = [
    "encenadaport",
    "fjord",
    "icelandwaterfall",
    "palmtunnel",
    "santamonica",
  ]
  const imageName = req.query.name as string
  const width: number = parseInt(req.query.width as string)
  const height: number = parseInt(req.query.height as string)
  // get real path of image
  const imagePath = resolve("./") + `/images/${imageName}.jpg`
  //check if name of image found in array
  const item = data.includes(imageName)
  //if the image name not found
  if (imageName === undefined) {
    return res.status(400).send("name of image is required.")
  }
  //if the image name not found

  if (item === false) {
    return res.status(403).send("please enter valid name")
  }
  //if the image dimention not found
  else if (width === undefined && height === undefined) {
    return res.status(404).send("please Enter width and height .")
  }
  //if the image path not found
  else if (existsSync(imagePath) === false) {
    return res.status(404).send("image not found.")
  }
  //create resizing folder if not found
  fs.access("./resizing", (error: unknown) => {
    if (error) {
      fs.mkdirSync("./resizing")
    }
  })
  //rename image
  const imageFormate = `${imageName}_${width}_${height}.jpg`
  //resizing image by using height and width
  if (existsSync(readFile(imageFormate)) === true) {
    //if name of image found in resizing folder
    res.sendFile(readFile(imageFormate))
  } else {
    //if name of image not found in resizing folder
    try {
      await sharp(imagePath)
        .resize(width, height)
        .toFile(`./resizing/${imageFormate}`)
    } catch (error) {
      return res.status(404).send(`Error happend.${error}`)
    }

    res.sendFile(readFile(imageFormate))
    // res.status(200).send('done')
  }

  //function get image name and return path resizing folder
  function readFile(image: string) {
    try {
      const result = path.join(__dirname, "../../resizing/" + image)
      return result
    } catch (error) {
      return `Something went wrong.${error}`
      // return res.status(404).send(`Error happend.${error}`)
    }
  }
}
export default resizeFunc
