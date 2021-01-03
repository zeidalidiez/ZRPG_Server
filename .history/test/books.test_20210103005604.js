const request = require("supertest")("https://cryptic-sea-32900.herokuapp.com");
const expect = require("chai").expect;

describe("GET /books", function () {
  it("returns all books on end database", async function () {
    const response = await request.get("/books");

    expect(response.status).to.eql(200);
  });
});