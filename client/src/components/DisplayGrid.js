import React from "react";
import { connect } from "react-redux";
import store from "../modules/store";
import { setCurrentPost } from "../modules/action";
import { ArrowUp, ArrowDown, Eye } from "react-feather";
const mapStateToProps = (state) => {
    return { currentDisplay: state.currentDisplay };
};

const ConnectedDisplay = ({ currentDisplay }) => {
    if (!currentDisplay)
        return (
            <div className="loading">
                <img src={require("../assets/loading.gif")} alt="" />
            </div>
        );
    const display = currentDisplay.map((item, i) => {
        if (!item.images) return "";

        const cover = item.images.filter((img) => {
            return img.id === item.cover;
        });
        if (!cover) return "";
        else {
            if (cover.length > 0 && cover[0].type && cover[0].type === "video/mp4")
                return "";
            else if (!cover[0]) {
                return "";
            } else {
                return (
                    <div
                        className="card "
                        key={i}
                        onClick={(e) => store.dispatch(setCurrentPost(item))}
                    >
                        <img
                            className="card-img-top"
                            src={cover[0].link}
                            alt={item.title}
                        />
                        <div className="description">{item.title}</div>
                        <div className="description">
                            {item.ups}
                            <ArrowUp color="white" size={20}></ArrowUp> {item.downs}
                            <ArrowDown color="white" size={20}></ArrowDown> {item.views}
                            <Eye color="white" size={20}></Eye>
                        </div>
                    </div>
                );
            }
        }
    });
    return (
        <div className="card-columns mt-4">
            <span>{display} </span>
        </div>
    );
};

const DisplayGrid = connect(mapStateToProps)(ConnectedDisplay);

export default DisplayGrid;
