const fs = require("fs");

console.log("Running frontend tests...");

const html = fs.readFileSync("index.html", "utf8");

if (html.includes("CI/CD Full Stack Application")) {
    console.log("Frontend test passed!");
    process.exit(0);
} else {
    console.error("Frontend test failed!");
    process.exit(1);
}
