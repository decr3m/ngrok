const http = require("http");
const setup = require("proxy");

async function main() {
  const port = 3128;
  const server = setup(http.createServer());
  server.listen(port, function () {
    const port = server.address().port;
    console.log("HTTP(s) proxy server listening on port %d", port);
  });
}

main();

// https://github.com/inconshreveable/ngrok/issues/446#issuecomment-629018925
// https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation
