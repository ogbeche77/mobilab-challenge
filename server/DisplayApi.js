const displayService = require("./displayService.js");
exports.api = function (app) {
    app.post("/display", async (req, res) => {
        const result = await displayService.display(
            req.body.displayId,
            req.body.section,
            req.body.sort,
            req.body.window,
            req.body.showViral
        );
        if (result) {
            res.send({ display: result.data });
        }
    });
};
