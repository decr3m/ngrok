const fs = require("fs");
const http = require("http");
const setup = require("proxy");
const ngrok = require("ngrok");

async function main() {
  const port = 3128;
  const server = setup(http.createServer());
  server.listen(port, function () {
    const port = server.address().port;
    console.log("HTTP(s) proxy server listening on port %d", port);
  });
  const authtoken = fs.readFileSync("./authtoken", "utf-8");
  console.log(">>ngrok-termux/index::", "authtoken", authtoken); //TRACE
  const url = await ngrok.connect({
    authtoken,
    proto: "tcp",
    addr: port,
  });
  console.log(">>proxy/index::", "url", url); //TRACE
}

main();
