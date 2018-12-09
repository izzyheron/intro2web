let sections = document.querySelectorAll('section');
for (let i = 0; i < sections.length; i++){
    console.log('add');
    sections[i].addEventListener('click', toggleAnimation);
}

function toggleAnimation(event){
    let sections = document.querySelectorAll('section');
    event.currentTarget.classList.toggle('clicked');

    for (let i = 0; i < sections.length; i++){
        if (sections[i] !== event.currentTarget){
            sections[i].classList.remove('clicked');
        }
    }
}