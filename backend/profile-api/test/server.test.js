//if you want to use the test db
// process.env.NODE_ENV = "test";

//Require the dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

// Test getting archive
describe("/:profileid   /", () => {
  it("Should get player profile", done => {
    chai
      .request(server)
      .get("/profile111")

      //////////////////////
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property("profile");
        res.body.should.be.a("object");
        done();
      });
  });
});
