import axios from 'axios';

export const ADD_CALL_SUCCESS = 'ADD_CALL_SUCCESS';
export const GET_ALL_CALLS_SUCCESS = 'GET_ALL_CALLS_SUCCESS';
export const GET_ALL_FLOORS_SUCCESS = 'GET_ALL_FLOORS_SUCCESS';

const API_URL = 'http://localhost:3000/api';

function addCallSuccess(push) {
  return {
    type: ADD_CALL_SUCCESS,
    push
  };
}

export function addCall(push) {
  return dispatch => {
    axios
      .post(API_URL, { calls: push })
      .then(function(response) {
        console.log(response);
        dispatch(addCallSuccess(response.data.results));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

function getAllCallsSuccess(push) {
  return {
    type: GET_ALL_CALLS_SUCCESS,
    push
  };
}

export function getCallsAsync() {
  return dispatch => {
    axios
      .get(API_URL)
      .then(function(response) {
        console.log(response);
        dispatch(getAllCallsSuccess(response.data.results));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

function getAllFloorsSuccess(floor) {
  return {
    type: GET_ALL_FLOORS_SUCCESS,
    floor
  };
}

export function getFloorsAsync() {
  return dispatch => {
    axios
      .get(API_URL)
      .then(function(response) {
        console.log(response);
        dispatch(getAllFloorsSuccess(response.data.results));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}
