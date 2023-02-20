const toggleSections = document.querySelector('.body_Content-Arrow')
const oneSection = document.querySelector('.section_ini')
const twoSection = document.querySelector('.section_2')

function timeouttoggle(){
    oneSection.style.display = "none";
    twoSection.style.display = "flex";
}

toggleSections.addEventListener('click', () => {
    oneSection.style.animation = 'exittoggle 1s ease 0s 1 normal forwards';
    window.setTimeout(timeouttoggle, 1000);

}  )