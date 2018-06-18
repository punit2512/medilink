import axios from 'axios';
const MEDILINK_PRACTICE_BASE_URL = "http://localhost:8081";
const MEDILINK_PATIENT_BASE_URL = "http://localhost:8082";
const SEARCH_PRACTICES_URL = "/searchConsultants";
const CREATE_APPOINTMENT_URL = "/bookAppointment";
export const ACTION_SEARCH_PRACTICES = 'ACTION_SEARCH_PRACTICES';
export const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT';

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