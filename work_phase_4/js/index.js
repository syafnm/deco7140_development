import { postFormData } from 'work_phase_4/js/modules/postFormData.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('profile-form');
    const feedback = document.getElementById('form-feedback');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        feedback.textContent = 'Submitting...';

        const { success, data } = await postFormData(form, 'https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericuserprofile/', {
        'student_number': 's4951046',
        'uqcloud_zone_id': '2870afbe',
        });

        if (success) {
        feedback.textContent = `We've sent you the signup link to your email, ${userName}!`;
        form.reset();
        } else {
        feedback.textContent = 'Submission failed.';
        }
    });
});