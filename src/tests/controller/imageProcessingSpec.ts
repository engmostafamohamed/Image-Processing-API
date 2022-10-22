// import resizeFunc from "../../controller/imageProcessing";
import supertest from "supertest"
import routes from "../../routes/index"
const request = supertest(routes)
describe("Test for resizeFunc", () => {
    it("should return error if image name does not exist", async (done: DoneFn) => {
        const response = await request.get("/photo?name=noImage&width=800&height=1800")
        expect(response.status).toBe(403)
        done()
    })

    it("should return error if width is not a number ", async (done: DoneFn) => {
        const response = await request.get("/photo?name=icelandwaterfall&width=number&height=1800")
        expect(response.status).toBe(400)
        done()
    })
    it("should return error if height is not a number ", async (done: DoneFn) => {
        const response = await request.get("/photo?name=icelandwaterfall&width=800&height=number")
        expect(response.status).toBe(403)
        expect(response.text).toBe("please enter valid name")
        done()
    })
})
