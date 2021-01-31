const expect = require("chai").expect
const server = require("../src/app")
const post = require("request")
const get = require("request")



describe("Test 1", () =>{
  const body = {}
  before((done) => {
    get("http://localhost:3000/user", (error, res) => {
      body.response = res.body
      done()
    })
  })
  it("should return a string", () => {
    expect(body.response).to.equal("Yohannes learning Ci with Travis")
  })
})

describe("Test 2", () =>{
  const body = {}
  before((done) => {
    get("http://localhost:3000/helloworld", (error, res) => {
      body.response = res.body
      done()
    })
  })
  it("should return hello world", () => {
    expect(body.response).to.equal("helloworld")
  })
})