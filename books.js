const print1 = document.querySelector('.content_books');
const buttonSearch = document.querySelector('.btn-search');
const valueSearch = document.querySelector('#search');
const category = document.querySelector('select')

/*bookArchive.forEach((book) =>{
    const div =document.createElement('div')
    div.classList.add('book')
    div.innerHTML = `
    <img src=${book.img} alt="">
    <h3>${book.nombre}</h3>
    `
    print1.appendChild(div)
})*/


buttonSearch.addEventListener('click', () =>{
    deleteBooks(),search()
})
document.addEventListener('keyup', e =>{
    console.log(e.target.value)
})


category.addEventListener('click',() =>{
    filterM()
})
function filterM(){
    console.log(category.value)
}
function search(){
    console.log(valueSearch.value)
}

function deleteBooks(){
    document.querySelector('.content_books').innerHTML = '';
}