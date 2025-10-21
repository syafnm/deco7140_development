export const postFormData = async (formEl, endpointUrl, customHeaders = {}) => {
    try {
        const formData = new FormData(formEl);

        const response = await fetch(endpointUrl, {
        method: 'POST',
        headers: {
            ...customHeaders
            // Don't set 'Content-Type' manually when using FormData
        },
        body: formData
        });

        const data = await response.json();

        return {
        success: response.ok && data.status === 'success',
        data,
        };
    } catch (error) {
        console.error('Error submitting form:', error);
        return {
        success: false,
        error: error.message,
        };
    }
};
