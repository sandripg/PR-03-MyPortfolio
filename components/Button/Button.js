const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const body = document.getElementById('body-portfolio');



function switchTheme(e) {
    if (e.target.checked) {
        body.className = 'body-light';
    } else {
        body.className = 'body-dark';
    }
}

toggleSwitch.addEventListener('change', switchTheme);