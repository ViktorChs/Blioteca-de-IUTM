const print1 = document.querySelector(".content_books");
const buttonSearch = document.querySelector(".btn-search");
const valueSearch = document.querySelector("#search");
const category = document.querySelector("select");


bookArchive.forEach((book) => {
  const div = document.createElement("div");
  div.classList.add("book");
  div.innerHTML = `
    <img src=${book.img} alt="">
    <h3>${book.nombre}</h3>
    `;
  print1.appendChild(div);
});

function a() {
  bookArchive.forEach((book) => {
    const div = document.createElement("div");
    div.classList.add("book");
    div.innerHTML = `
        <img class="bookImg" src=${book.img} alt="">
        <h3>${book.nombre}</h3>
        `;
    print1.appendChild(div);
  });
}

buttonSearch.addEventListener("click", () => {
  console.log(valueSearch.value.toLowerCase());
});


function filterM() {
    document.querySelector(".content_books").innerHTML = "";
    
     bookArchive.forEach((book) => {
      if (book.materia == category.value) {
        const div = document.createElement("div");
        div.classList.add("book");
        div.innerHTML = `
      <img  src=${book.img} alt="">
      <h3>${book.nombre}</h3>
      `;
        print1.appendChild(div);
      } else if(category.value == "Materias" || book.id == Number) {
        const div = document.createElement("div");
        div.classList.add("book");
        div.innerHTML = `
      <img src=${book.img} alt="">
      <h3>${book.nombre}</h3>
      `;
        print1.appendChild(div);
      }
     
    });
    
  }
  
function deleteBooks() {
  document.querySelector(".content_books").innerHTML = "";
}

const bookmorf = document.querySelectorAll(".book")
const bookmorfImg = document.querySelectorAll(".book img")



function removeActiveMorfBooks() {
  bookmorf.forEach(x => x.classList.add('active'));
  bookmorfImg.forEach(x => x.classList.add('active'));
  
}

function addActiveMorfBooks(){
  bookmorf.forEach(x => x.classList.remove('active'));
  bookmorfImg.forEach(x => x.classList.remove('active'));


}

