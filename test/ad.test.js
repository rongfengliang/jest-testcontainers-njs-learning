const fetch = require("cross-fetch")
describe("nginx test", () => {
  var nginxServerURI;
  beforeAll(() => {
    nginxServerURI = `http://${global.__TESTCONTAINERS_NGINX_IP__}:${global.__TESTCONTAINERS_NGINX_PORT_80__}/token`;
  });
  it("token test", async () => {
    console.log(nginxServerURI)
    let result = await (
      await fetch(nginxServerURI)
    ).text();
    console.log(result)
  })
})