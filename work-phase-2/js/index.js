/**
* IMPORTS
* Keep track of external modules being used
* */
import { setupMenu } from './modules/menu.js';

/**
* CONSTANTS
* Define values that don't change e.g. page titles, URLs, etc.
* */
const PAGE_NAME = 'index.js';
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
window.DOMContentLoaded('load', () => {
    setupMenu(PAGE_NAME, message);
});