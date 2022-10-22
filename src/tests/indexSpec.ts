import supertest from "supertest"
import routes from "../routes/index"
const request = supertest(routes)
describe("Test endpoint responses", () => {
    // it("gets  for display home page endpoint", async (done) => {
    //     const response = await request.get("/")
    //     expect(response.status).toBe(200)
    //     done()
    // })
    it("gets  for display home page endpoint", async () => {
        async function getfun(url: RequestInfo | URL) {
            const response = await fetch(url)
            return expect(response.status).toBe(200)
        }

        getfun("http://localhost:3000/").then((res) =>
            console.log(res)
        )
    })
})
