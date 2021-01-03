const request = require("supertest")("https://cryptic-sea-32900.herokuapp.com");
const expect = require("chai").expect;

describe("GET /books/:title_id", function () {
  it("Looks for a record with ID 1 and fails", async function () {
    const response = await request.get("/books/1");

    expect(response.status).to.eql(200);
  });
});

describe("DELETE /books/:title_id", function () {
    it("attempts to delete record with ID of 1 and fails", async function () {
      const response = await request.delete("/books/1");
  
      expect(response.status).to.eql(200);
    });
  });