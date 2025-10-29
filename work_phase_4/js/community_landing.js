import { postFormData } from './modules/postFormData.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('community-form');
    const feedback = document.getElementById('form-feedback');
    const container = document.getElementById('community-list');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        feedback.textContent = 'Submitting...';

        const { success, data } = await postFormData(form, 'https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/', {
            'student_number': 's4951046',
            'uqcloud_zone_id': '2870afbe',
        });

        if (success) {
            feedback.textContent = data.message || 'Success!';
            feedback.style.color = 'green'
            form.reset();
        } else {
            console.log('Error respones', data);
            feedback.textContent = data.message || 'Something went wrong.';
            feedback.style.color = 'red'

        }
    });
                    
    fetchGetData('https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/', {
        'student_number': 's4951046',
        'uqcloud_zone_id': '2870afbe'
    }).then(data => {
        if (!data) {
        container.innerHTML = '<p class="text-danger">Unable to load community members.</p>';
        return;
        }

        data.forEach(member => {
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.innerHTML = `
            <div class="card-body">
            <h5 class="card-title">${member.name}</h5>
            <p class="card-text">${member.message || 'No message provided.'}</p>
            </div>
        `;
        container.appendChild(card);
        });
    });
});
