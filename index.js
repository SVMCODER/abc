// (async () => {
//     const showNotification = () => {
//         const notification = new Notification('You are secured!', {
//             body: 'Cyber Wrold is protecting your phone.',
//             icon: '🔒'
//         });

//         setTimeout(() => {
//             notification.close();
//         }, 5 * 10000);

//         notification.addEventListener('click', () => {

//             window.location.replace('idl.html');
//         });
//     }

//     const showError = () => {
//         const error = document.querySelector('.error');
//     }

//     let granted = false;

//     if (Notification.permission === 'granted') {
//         granted = true;
//     } else if (Notification.permission !== 'denied') {
//         let permission = await Notification.requestPermission();
//         granted = permission === 'granted' ? true : false;
//     }

//     granted ? showNotification() : showError();

// })();


function result()  {
    if (localStorage.getItem('searched') == true) {
        window.location.replace('result.html')
    }
    else {
        window.location.replace('result.html')
        localStorage.setItem('result',`
        <div class="post">
        <div class="c" align="center">
      <img src="logo.png" alt="">
    </div>
    <h4> <input type="text" id="s" placeholder="Search..."> <button onclick="srch()">Search</button></h4>
    </div>
        `)
        document.getElementsByClassName('s').innerHTML = localStorage.getItem('result')
    }
}
function srch() {
    inp = document.getElementById('s').value;
        inpp = inp.replace(' ','%20')
        link = `https://www.bing.com/search?q=${inpp}`
        localStorage.setItem('result',`
        <iframe src="${link}">
        </iframe>
        `)
        localStorage.setItem('searched', true)
        window.location.replace('result.html')
}

function logout() {
    localStorage.removeItem('uname')
    localStorage.removeItem('searched')
    window.location.replace('index.html')
}
function dlt() {
    logout()
}

function save() {
    alert('Saved!')
}