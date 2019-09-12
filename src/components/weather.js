import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getData } from "../actions";

const WebcamList = props => {
    return (
        <>
            <button onClick={props.getData}>
                {props.isLoading ? (
                    <Loader type="TailSpin" color="#00BFFF" height="15" width="100" />
                ) : (
                    "Let Check that Weather Adnan"
                )}
            </button>
            {/* {props.webcams &&
        props.webcams.map(cam => cam )} */}
        </>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        webcams: state.webcams
    };
};
export default connect(
    mapStateToProps,
    { getData }
)(WebcamList);