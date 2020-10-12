import store from "./store";
import {
    loadDisplay,
    setCurrentPost,
    setSection,
    setSort,
    setViral,
    setWindow,
    addPost,
    setDisplayId,
    setImageIndex,
} from "./action";

window.store = store;
window.loadDisplay = loadDisplay;
window.setCurrentPost = setCurrentPost;
window.setSection = setSection;
window.setSort = setSort;
window.setViral = setViral;
window.setWindow = setWindow;
window.addPost = addPost;
window.setDisplayId = setDisplayId;
window.setImageIndex = setImageIndex;
