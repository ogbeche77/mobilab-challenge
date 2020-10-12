import {
    LOAD_DISPLAY,
    SET_CURRENT_POST,
    SET_FILTER_SECTION,
    SET_FILTER_SORT,
    SET_FILTER_VIRAL,
    SET_FILTER_WINDOW,
    ADD_POST,
    SET_DISPLAY_ID,
    SET_IMAGE_INDEX,
} from "./types";

export function addPost(payload) {
    return { type: ADD_POST, payload };
}
export function loadDisplay(payload) {
    return { type: LOAD_DISPLAY, payload };
}
export function setCurrentPost(payload) {
    return { type: SET_CURRENT_POST, payload };
}
export function setViral(payload) {
    return { type: SET_FILTER_VIRAL, payload };
}
export function setWindow(payload) {
    return { type: SET_FILTER_WINDOW, payload };
}

export function setSort(payload) {
    return { type: SET_FILTER_SORT, payload };
}

export function setSection(payload) {
    return { type: SET_FILTER_SECTION, payload };
}
export function setDisplayId(payload) {
    return { type: SET_DISPLAY_ID, payload };
}
export function setImageIndex(payload) {
    return { type: SET_IMAGE_INDEX, payload };
}
