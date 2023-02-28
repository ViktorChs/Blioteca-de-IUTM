const print1 = document.querySelector('.content_books');

bookArchive.forEach((book) =>{
    const div =document.createElement('div')
    div.classList.add('book')
    div.innerHTML = `
    <img src=${book.img} alt="">
    <h3>${book.nombre}</h3>
    `
    print1.appendChild(div)
})