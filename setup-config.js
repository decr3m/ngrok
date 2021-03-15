const fs = require("fs");
const path = require("path");
const YAML = require("yaml");

async function main() {
  const file = fs.readFileSync(path.join(__dirname, "config.yml"), "utf-8");
  const cfgYaml = YAML.parse(file);

  const authtoken = fs.readFileSync("./authtoken", "utf-8");
  cfgYaml.authtoken = authtoken.trim();
  fs.writeFileSync(path.join(__dirname, "ngrok.yml"), YAML.stringify(cfgYaml));

  // const dir = spawn("ngrok", ["start", "-config", "ngrok.yml", "--all"]);

  // dir.stdout.on("data", (data) => console.log(`stdout: ${data}`));
  // dir.stderr.on("data", (data) => console.log(`stderr: ${data}`));
  // dir.on("close", (code) =>
  //   console.log(`child process exited with code ${code}`)
  // );
}

main().catch((err) => console.error(err));
