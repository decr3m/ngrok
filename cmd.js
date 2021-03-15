const { spawn } = require("child_process");
const fs = require("fs");
const ngrok = require("ngrok");

async function main() {
  const port = 3244;

  const dir = spawn("yarn", ["gritty", "--port", port], { shell: true });

  dir.stdout.on("data", (data) => console.log(`stdout: ${data}`));
  dir.stderr.on("data", (data) => console.log(`stderr: ${data}`));
  dir.on("close", (code) =>
    console.log(`child process exited with code ${code}`)
  );

  const authtoken = fs.readFileSync("./authtoken", "utf-8");
  const url = await ngrok.connect({
    authtoken,
    proto: "http",
    addr: port,
    binPath: () => ".",
    region: "ap",
  });
  console.log(">>proxy/index::", "url", url); //TRACE
}

main().catch((err) => console.error(err));
