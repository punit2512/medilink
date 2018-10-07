import axios from 'axios';
import queryString from 'query-string';
import {ACTION_SEARCH_PRACTICES, CREATE_APPOINTMENT, AUTH_ERROR, AUTH_USER, CHANGE_AUTH, FETCH_MESSAGE, UNAUTH_USER} from "./types";
const MEDILINK_PRACTICE_BASE_URL = "http://localhost:8092";
const MEDILINK_AUTH_BASE_URL = "http://localhost:8093";
const MEDILINK_PATIENT_BASE_URL = "http://localhost:8092";
const SEARCH_PRACTICES_URL = "/practice/searchConsultants";
const CREATE_APPOINTMENT_URL = "/appointment/bookAppointment";

export function fetchConsultants(props, callback) {
    const url = MEDILINK_PRACTICE_BASE_URL + SEARCH_PRACTICES_URL;
    const request = axios.post(url, props);
    return {
        type: ACTION_SEARCH_PRACTICES,
        payload: request
    }
}

export function createAppointment(values, callback) {
    const url = MEDILINK_PATIENT_BASE_URL + CREATE_APPOINTMENT_URL;
    const request = axios.post(url, values).then(() => callback());
    console.log('values for appointment:', values);
    return {
        type: CREATE_APPOINTMENT,
        payload: request
    }
}

// Authentication related functions
export function signInUser(username, password, redirectLocation) {
    console.log('from inside signing function: username=', username, ', password=', password, ', redirectLocation=', redirectLocation);
    var basicAuth = 'Basic ' + btoa('medilink' + ':' + 'Password');
    console.log('basicAuth=', basicAuth);
    const body = {
        'username': username,
        'password': password,
        'grant_type': 'client_credentials'
    };

    const request = axios.post(`${MEDILINK_AUTH_BASE_URL}/oauth/token`, queryString.stringify(body), {
        headers: {
            Authorization:  basicAuth,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        /*auth: {
            username: 'medilink',
            password: 'Password'
        }*/
    });
    /*request.then(value => {
        console.log('then request: value=', value);
        console.log('then request: redirectLocation.pathName=', redirectLocation.pathname);
    });*/
    return {
        type: AUTH_USER,
        payload: request,
        meta: {redirectLocation: redirectLocation.pathname}
    };
    /*return function(dispatch) {
        // Submit to server

            .then(response => {
                // update state to authenticated
                console.log('response is good, pushing history:', response);
                dispatch({type: AUTH_USER});
                // Save JWT token
                localStorage.setItem('token', response.data.token);
                // redirect to route /feature
                this.context.router.history.push('/feature');
            })
            .catch(() => {
                // Show an error to user
                dispatch(authError('Bad login info'));
            })
    }*/
}

export function authError(error) {
    console.log('error is:', error);
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    localStorage.removeItem('token');
    return {type: UNAUTH_USER};
}

export function signupUser({email, password}) {
    return function(dispatch) {
        axios.post(`${MEDILINK_PRACTICE_BASE_URL}/practice/signup`, {email, password})
            .then(response => {
                console.log('response is:', response);
                dispatch({type: AUTH_USER});
                localStorage.setItem('token', response.data.token);
                //history.push('/feature');
                this.context.router.history.push('/feature');
            }).catch(error => {
            dispatch(authError(error.response.data));
        })
    }
}

export function fetchMessage() {
    return function(dispatch) {
        axios.get(MEDILINK_PRACTICE_BASE_URL, {
            headers: { authorization: localStorage.getItem('token')}
        }).then(response => {
            dispatch({
                type: FETCH_MESSAGE,
                payload: response.data.message
            })
        });
    }
}