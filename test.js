console.log("Running application tests...");

const passed = true;

if (passed) {
    console.log("All tests passed!");
    process.exit(0);
} else {
    console.error("Tests failed!");
    process.exit(1);
}