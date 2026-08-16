const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Hello from the backend!"
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from the Node.js + Express backend!"
    });
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});