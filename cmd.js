const { spawn } = require("child_process");

async function main() {
  const port = 3244;

  const dir = spawn("yarn", ["gritty", "--port", port], { shell: true });

  dir.stdout.on("data", (data) => console.log(`stdout: ${data}`));
  dir.stderr.on("data", (data) => console.log(`stderr: ${data}`));
  dir.on("close", (code) =>
    console.log(`child process exited with code ${code}`)
  );
}

main().catch((err) => console.error(err));
