require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.static("public"));

app.get("/weather", async (req, res) => {
const city = req.query.city;
const apiKey = process.env.OPENWEATHER_API_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try {
const response = await axios.get(url);
res.json(response.data);
} catch (error) {
res.status(500).json({ error: "Error fetching weather data" });
}
});

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});