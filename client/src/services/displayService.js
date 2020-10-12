import { instance } from "../utils/api.js";

export function display(displayId = 0, section, sort, window, showViral) {
    return instance.post("/display", {
        displayId,
        section,
        sort,
        window,
        showViral,
    });
}
