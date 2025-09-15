const navbar = document.getElementsByClassName('navbar');

console.log(navbar);

function activeLink(link) {
    const element = document.getElementById(link);

    for (let i = 0; i < navbar.length; i++) {
        navbar[i].classList.remove('active');
    }

    element.classList.add('active');
}