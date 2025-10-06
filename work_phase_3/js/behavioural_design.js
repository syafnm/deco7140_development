/**
* IMPORTS
* Keep track of external modules being used
* */
import { postFormData } from './postFormData.js';

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

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('community-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const { success, data, error } = await postFormData(form, 'https://cloudapi.gps-1.uqcloud.net', {
        'student_number': 's4951046',
        'uqcloud_zone_id': 'deco7140-2870afbe.zones.eait.uq.edu.au/'
        });

        if (success) {
        feedback.textContent = data.message || 'Form submitted successfully!';
        form.reset();
        } else {
        feedback.textContent = error || data.message || 'Something went wrong. Please try again.';
        }
    });
});




// when the page fully loads
