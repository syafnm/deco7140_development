/**
* IMPORTS
* Keep track of external modules being used
* */
import { initAccordion } from './modules/accordion.js'; 


/**
* CONSTANTS
* Define values that don't change e.g. page titles, URLs, etc.
* */


/**
* VARIABLES
* Define values that will change e.g. user inputs, counters, etc.
* */


/**
* FUNCTIONS
* Group code into functions to make it reusable
* */

/**
* EVENT LISTENERS
* The code that runs when a user interacts with the page
* */
document.addEventListener("DOMContentLoaded", function() {

    const visceralButton = document.getElementById('learnVisceral');
    visceralButton.addEventListener('click', function() {
        window.location.href = "visceral_design.html";
    });

    const behaviouralButton = document.getElementById('learnBehavioral');
    behaviouralButton.addEventListener('click', function() {
        window.location.href = "behavioral_design.html";
    });

    const reflectiveButton = document.getElementById('learnReflective');
    reflectiveButton.addEventListener('click', function() {
        window.location.href = "reflective_design.html";
    });
});




// when the page fully loads
