// import resizeFunc from "../../controller/imageProcessing";
import supertest from "supertest"
import routes from "../../controller/imageProcessing"
const request = supertest(routes)
describe("Test for resizeFunc", () => {
    // it("should return error if image name does not exist", async () => {
    //     await request.get("/photo?name=noImage&width=800&height=1800").then((response) => {
    //         return (expect(response.status).toBe(403))
    //     })
    //     // const response = await request.get("/photo?name=noImage&width=800&height=1800")
    //     // expect(response.status).toBe(403)

    // })
    it("should return error if image name does not exist", async () => {
        async function getfun(url: RequestInfo | URL) {
            const response = await fetch(url)
            return expect(response.status).toBe(403)
        }

        getfun("http://localhost:3000/photo?name=noImage&width=800&height=1800").then((res) =>
            console.log(res)
        )
    })
    // it("should return error if width is not a number ", async () => {
    //     await request.get("/photo?name=icelandwaterfall&width=number&height=1800").then((response) => {
    //         return (expect(response.status).toBe(400))
    //     })
    //     // const response = await request.get("/photo?name=icelandwaterfall&width=number&height=1800")
    //     // expect(response.status).toBe(400)

    // })
    it("should return error if width is not a number ", async () => {
        async function getfun(url: RequestInfo | URL) {
            const response = await fetch(url)
            return expect(response.status).toBe(400)
        }

        getfun("http://localhost:3000/photo?name=icelandwaterfall&width=number&height=1800").then((res) =>
            console.log(res)
        )
    })

    // it("should return error if height is not a number ", async () => {
    //     await request.get("/photo?name=icelandwaterfall&width=800&height=number").then((response) => {
    //         return expect(response.status).toBe(403)
    //     })
    //     // const response = await request.get("/photo?name=icelandwaterfall&width=800&height=number")
    //     // expect(response.status).toBe(403)
    //     // expect(response.text).toBe("please enter valid name")

    // })
    it("should return error if height is not a number ", async () => {
        async function getfun(url: RequestInfo | URL) {
            const response = await fetch(url)
            return expect(response.status).toBe(403)
        }

        getfun("http://localhost:3000/photo?name=icelandwaterfall&width=800&height=number").then((res) =>
            console.log(res)
        )
    })

    it("should return error if image path not found ", async () => {
        async function getfun(url: RequestInfo | URL) {
            const response = await fetch(url)
            return expect(response.text).toBe('please enter valid name')
        }
        getfun("http://localhost:3000/photo?name=&width=800&height=800").then((res) =>
            console.log(res)
        )
    })
})
