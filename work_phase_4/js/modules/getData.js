const fetchGetData = (url, headers = {}) => {
return fetch(url, { method: 'GET', headers: headers })
    .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
    })
    .catch(error => {
    console.error('Fetch error:', error);
    return null;
    });
};

export { fetchGetData };