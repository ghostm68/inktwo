const menuToggle = document.querySelector('.toggle');
2
const showcase = document.querySelector('.showcase');
3
menuToggle.addEventListener('click', () => {
4
        menuToggle.classList.toggle('active');
5
        showcase.classList.toggle('active');
6
})
