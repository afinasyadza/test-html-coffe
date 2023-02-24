// Toggle class active
const navbarnav = document.querySelector('.navbar-nav');
// ketika hamburger-menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classlist.toggle('active');
};
//klik di luar side bar untuk menghilangkan nav
const hamburger = document.querySelector ('#hamburger-menu');

document.addEventListener('click', function (e){
    if(!hamburger.contains(e.target) && !navbarnav.contains(e.target)){
navbarnav.classlist.remove('active');
    }
})