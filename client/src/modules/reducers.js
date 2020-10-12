import {
    LOAD_DISPLAY,
    SET_CURRENT_POST,
    SET_FILTER_SECTION,
    SET_FILTER_SORT,
    SET_FILTER_VIRAL,
    SET_FILTER_WINDOW,
    SET_DISPLAY_ID,
    ADD_POST,
    SET_IMAGE_INDEX,
} from "./types";

const initialState = {
    currentDisplay: null,
    currentPost: null,
    filterBaseData: {
        section: [
            { title: "Hot", value: "hot" },
            { title: "Top", value: "top" },
            { title: "User", value: "user" },
        ],
        sort: [
            { title: "Viral", value: "viral" },
            { title: "Top", value: "top" },
            { title: "Time", value: "time" },
        ],
        window: [
            { title: "Day", value: "day" },
            { title: "Week", value: "week" },
            { title: "Month", value: "month" },
            { title: "Year", value: "year" },
            { title: "All", value: "all" },
        ],
    },
    loadDisplay: true,
    displayId: 0,
    imageIndex: 0,
    section: "hot",
    sort: "viral",
    window: "day",
    showViral: "true",
};

function rootReducer(state = initialState, action) {
    if (action.type === LOAD_DISPLAY) {
        return Object.assign({}, state, {
            currentDisplay: action.payload,
            loadDisplay: false,
        });
    } else if (action.type === ADD_POST) {
        return Object.assign({}, state, {
            currentDisplay: state.currentDisplay.concat(action.payload),
            loadDisplay: true,
        });
    } else if (action.type === SET_CURRENT_POST) {
        return Object.assign({}, state, {
            currentPost: action.payload,
            imageIndex: 0,
        });
    } else if (action.type === SET_FILTER_SECTION) {
        return Object.assign({}, state, {
            section: action.payload,
            currentDisplay: null,
            loadDisplay: true,
        });
    } else if (action.type === SET_FILTER_WINDOW) {
        return Object.assign({}, state, {
            window: action.payload,
            currentDisplay: null,
            loadDisplay: true,
        });
    } else if (action.type === SET_DISPLAY_ID) {
        return Object.assign({}, state, {
            displayId: action.payload,
            currentDisplay: null,
            loadDisplay: true,
        });
    } else if (action.type === SET_FILTER_SORT) {
        return Object.assign({}, state, {
            sort: action.payload,
            currentDisplay: null,
            loadDisplay: true,
        });
    } else if (action.type === SET_FILTER_VIRAL) {
        return Object.assign({}, state, {
            showViral: action.payload,
            currentDisplay: null,
            loadDisplay: true,
        });
    } else if (action.type === SET_IMAGE_INDEX) {
        return Object.assign({}, state, {
            imageIndex: action.payload,
        });
    }
    return state;
}
export default rootReducer;
