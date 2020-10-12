const api = require("./api.js");
const displayEndpoint = "display";

exports.display = async function (
    displayId,
    section = "hot",
    sort = "viral",
    window = "day",
    showViral = "true"
) {
    section = section || "hot";
    sort = sort || "viral";
    window = window || "day";
    showViral = showViral || "true";
    return await api.instance.get(
        `${displayEndpoint}/${section}/${sort}/${window}/${displayId}.json?showViral=${showViral}`
    );
};
