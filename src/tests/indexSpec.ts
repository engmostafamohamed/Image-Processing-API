import supertest from "supertest"
import routes from "../routes/index"
const request = supertest(routes)
describe("Test endpoint responses", () => {
    it("gets  for display home page endpoint", async (done) => {
        const response = await request.get("/")
        expect(response.status).toBe(200)
        done()
    })
})
