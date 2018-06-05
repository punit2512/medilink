import axios from 'axios';
const MEDLIINK_BASE_URL = "http://localhost:8080";
const SEARCH_PRACTICES_URL = "/searchConsultants";
export const ACTION_SEARCH_PRACTICES = 'ACTION_SEARCH_PRACTICES';
export const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT';

export function fetchConsultants(props, callback) {
    const url = MEDLIINK_BASE_URL + SEARCH_PRACTICES_URL;
    const request = axios.post(url, props);
    return {
        type: ACTION_SEARCH_PRACTICES,
        payload: request
    }
}

export function createAppointment(values, callback) {
    const url = MEDLIINK_BASE_URL + SEARCH_PRACTICES_URL;
    const request = axios.post(url, values);
    return {
        type: CREATE_APPOINTMENT,
        payload: request
    }
}