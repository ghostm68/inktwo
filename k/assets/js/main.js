function switchModal(modal, state){
    let stage = document.getElementById("blackout");
    if(state){
        if(stage.querySelector('.active') != undefined)
            stage.querySelector('.active').classList.remove('active');
        stage.classList.add('active');
        modal.classList.add('active');
    } else{
        modal.classList.remove('active');
        stage.classList.remove('active');
    } 
}

for(let button of document.querySelectorAll(".close-button")){
    button.addEventListener("click", () => {
        switchModal(button.parentElement, false);
    });
}

for(let button of document.querySelectorAll('.js_enable_modal')){
    button.addEventListener("click", (e) => {
        e.preventDefault();
        let target = document.getElementById(button.dataset.target);
        switchModal(target, true);
    });
}

for(let button of document.querySelectorAll('.spoiler')){
    button.addEventListener("click", () => {
        button.classList.toggle("active");
    });
}

document.addEventListener("scroll", () =>{
    let header = document.querySelector('header');
    if(window.pageYOffset > 0){
        header.classList.add('stick');
    } else if(header.classList.contains('stick')){
        header.classList.remove('stick');
    }
});

var menuButton = document.querySelector(".header-menu-icon button");
menuButton.addEventListener('click', () => {
    console.log(document.querySelector('header').clientHeight);
    document.querySelector(':root').style.setProperty("--aside-height", document.querySelector('header').clientHeight + 'px');
    menuButton.classList.toggle('active');
    document.querySelector('aside').classList.toggle('active');
    document.querySelector('header').classList.toggle('menu-enabled');
});

for(let item of document.querySelectorAll('.gallery-item')){
    item.addEventListener('click', () => {
        window.location.href = '../card/';
    });
}
