const axios = require("axios");

const baseUrl = "http://localhost:8000";
exports.instance = axios.create({
    baseURL: baseUrl,
    timeout: 300000,
    headers: {
        "content-type": "application/json",
        Authorization: "Client-ID 8910ce123c3eb2e",
    },
});



