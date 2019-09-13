import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getData } from "../actions";
import WeatherData from "./weatherData";

const Weather = props => {
    return (
        <div>
            <button onClick={props.getData}>
                {props.isLoading ? (
                    <Loader type="TailSpin" color="#00BFFF" height={150} width={150} />
                ) : (
                    "Click Here!"
                )}
            </button>
            {props.weather &&
            props.weather.map((data, index) => (
                <WeatherData
                    key={index}
                    weather={props.weather}
                    index={index}
                    dummy={data}
                />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        weather: state.weather
    };
};
export default connect(
    mapStateToProps,
    { getData }
)(Weather);