import axios from "axios";

export const FETCH_WEATHER_DATA_START = "FETCH_WEATHER_DATA_START";
export const FETCH_WEATHER_DATA_SUCCESS = "FETCH_WEATHER_DATA_SUCCESS";
export const FETCH_WEATHER_DATA_FAILURE = "FETCH_WEATHER_DATA_FAILURE";

export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_WEATHER_DATA_START });
        axios
            .get("https://www.metaweather.com/api/location/2457170/")
            .then(res => {
                console.log(res);
                dispatch({ type: FETCH_WEATHER_DATA_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: FETCH_WEATHER_DATA_FAILURE, payload: err.response });
            });
    };
};