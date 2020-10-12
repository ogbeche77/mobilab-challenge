import React, { Component } from "react";
import store from "../modules/store";
import { loadDisplay, setDisplayId } from "../modules/action";
import { display } from "../services/displayService";
import DisplayGrid from "./DisplayGrid";
import DisplayModal from "./DisplayModal";
import DisplayFilter from "./DisplayFilter";

class Display extends Component {
    componentDidMount() {
        store.subscribe(() => {
            const state = store.getState();
            if (state.loadDisplay) this.fetchDisplay(state);
        });
        store.dispatch(setDisplayId(0));
    }
    fetchDisplay(state) {
        this._asyncRequest = display(
            state.displayId,
            state.section,
            state.sort,
            state.window,
            state.showViral
        ).then((result) => {
            this._asyncRequest = null;
            store.dispatch(loadDisplay(result.data.display.data));
        });
    }
    componentWillUnmount() {
        if (this._asyncRequest) {
            this._asyncRequest.cancel();
        }
    }
    render() {
        return (
            <div className="container">
                <DisplayFilter />

                <DisplayGrid />

                <DisplayModal />
            </div>
        );
    }
}

export default Display;
