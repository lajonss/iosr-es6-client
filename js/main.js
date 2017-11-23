(function () {
    'use strict'

    document.getElementById('fetch-counter').addEventListener('click', fetchCounter);

    function fetchCounter() {
        //TODO URL should point to load balancer
        let url = 'http://iosr-project.herokuapp.com/iosr/app/greeting';
        let val = document.getElementById('input-name').value;
        if (val)
            url += '?name=' + val;
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(value => receivedValue(value))
            .catch(err => console.log(err));
    }

    function receivedValue(value) {
        console.log(value);
        document.getElementById('reply-content').classList.remove('invisible');
        document.getElementById('reply-content-counter').innerText = value.id;
        document.getElementById('reply-content-value').innerText = value.content;
    }
})();