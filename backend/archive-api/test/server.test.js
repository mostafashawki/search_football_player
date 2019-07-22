//if you want to use the test db
process.env.NODE_ENV = "test";

//Require the dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

// Test getting archive
describe("/:id   /", () => {
  it("Should get player archive", done => {
    chai
      .request(server)
      .get("/fabio")

      //////////////////////
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property("profileId");
        res.body.should.have.property("active");
        res.body.should.have.property("id");
        res.body.should.be.a("object");
        res.body.active.should.equal(true);
        done();
      });
  });
});
