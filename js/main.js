(function () {
    'use strict'

    document.getElementById('login').addEventListener('click', login);

    function login() {
        let username = document.getElementById('creds-user').value;
        let pass = document.getElementById('creds-pass').value;
        fetchCounter(username, pass);
    }

    function fetchCounter(user, pass) {
        let url = 'http://127.0.0.1:8080/iosr/app/greeting';
        console.log('fetching');
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa(user + ':' + pass)
            }
        })
            .then(response => response.json())
            .then(value => receivedValue(value))
            .catch(err => console.log(err));
    }

    function receivedValue(value) {
        document.getElementById('creds').classList.add('invisible');
        document.getElementById('reply-content').classList.remove('invisible');
        document.getElementById('counter').innerText = value;
    }
})();