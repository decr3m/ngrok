const http = require("http");
const setup = require("proxy");
// const ngrok = require("ngrok");

async function main() {
  const port = 3128;
  const server = setup(http.createServer());
  server.listen(port, function () {
    const port = server.address().port;
    console.log("HTTP(s) proxy server listening on port %d", port);
  });
}

main();
