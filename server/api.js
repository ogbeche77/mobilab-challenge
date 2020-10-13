const axios = require("axios");

const baseUrl = "https://api.imgur.com/3/";
exports.instance = axios.create({
    baseURL: baseUrl,
    timeout: 300000,
    headers: {
        "content-type": "application/json",
        Authorization: "Client-ID cec8e84a5992a0f",
    },
});
