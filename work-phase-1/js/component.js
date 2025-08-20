/**
* IMPORTS
* Keep track of external modules being used
* */
import { logMessage } from './modules/logging.js';
import { fetchTemperature } from "./temperature.js"; /* new */
/**
* CONSTANTS
* Define values that don't change e.g. page titles, URLs, etc.
* */
const PAGE_TITLE = 'component.js';
/**
* VARIABLES
* Define values that will change e.g. user inputs, counters, etc.
* */
let message = 'If you can see this message, then your js is working.';
/**
* FUNCTIONS
* Group code into functions to make it reusable
* */
/**
* EVENT LISTENERS
* The code that runs when a user interacts with the page
* */
window.addEventListener('load', () => {
    logMessage(PAGE_TITLE, message);
    fetchTemperature(); /* new */
});