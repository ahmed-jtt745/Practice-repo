let navbar = document.querySelector('.links');
let navbtn = document.querySelector('.navbtn');



navbtn.addEventListener('click',() => {
    navbar.classList.toggle('show');
    console.log(navbar.classList.contains('show'));
});

navbar.addEventListener('click', () => {
    navbar.classList.toggle('show');
});