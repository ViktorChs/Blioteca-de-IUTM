const print1 = document.querySelector(".content_books");
const buttonSearch = document.querySelector(".btn-search");
const valueSearch = document.querySelector("#search");
const category = document.querySelector("select");
const buttonsview = document.getElementById("#viewbookall")
const viewmenubook = document.querySelector(".nav_menu-view-book")

/* entrada principal de los libros */
bookArchive.forEach((book) => {
  const div = document.createElement("div");
  div.id.add
  div.classList.add("book");
  div.innerHTML = `
    <img src=${book.img} alt="">
    <h3>${book.nombre}</h3>
    <button onclick="viewBook(${book.id})" id="viewbookall" class="viewBook" type="button"></button>
    `;
  print1.appendChild(div);
});

/* filtro de materias */
function filterM() {
  document.querySelector(".content_books").innerHTML = "";

  bookArchive.forEach((book) => {
    if (book.materia == category.value) {
      const div = document.createElement("div");
      div.classList.add("book");
      div.innerHTML = `
      <img  src=${book.img} alt="">
      <h3>${book.nombre}</h3>
      <button onclick="viewBook(${book.id})" id="viewbookall" class="viewBook" type="button"></button>
      `;
      print1.appendChild(div);
    } else if (category.value == "Materias" || book.id == Number) {
      const div = document.createElement("div");
      div.classList.add("book");
      div.innerHTML = `
      <img src=${book.img} alt="">
      <h3>${book.nombre}</h3>
      <button onclick="viewBook(${book.id})" id="viewbookall" class="viewBook" type="button"></button>

      `;
      print1.appendChild(div);
    }
  });
}

/* add event listeners */

buttonSearch.addEventListener("click", () => {
  console.log(valueSearch.value.toLowerCase());
});

/* cambio de forma de la plantillas de libros  */
const bookmorf = document.querySelectorAll(".book");
const bookmorfImg = document.querySelectorAll(".book img");
const bookbts = document.querySelectorAll("#viewbookall")

function removeActiveMorfBooks() {
  bookmorf.forEach((x) => x.classList.add("active"));
  bookmorfImg.forEach((x) => x.classList.add("active"));
  bookbts.forEach((x) => x.classList.add("active"));

}

function addActiveMorfBooks() {
  bookmorf.forEach((x) => x.classList.remove("active"));
  bookmorfImg.forEach((x) => x.classList.remove("active"));
  bookbts.forEach((x) => x.classList.remove("active"));
}
/*   */

 

function viewBook(prodId){
  viewmenubook.style.display = "flex";

  bookArchive.forEach((book) => {
    if (prodId == book.id) {
const div = document.createElement("div");
  div.classList.add("nav_menu-background-active");
  div.innerHTML = `
  <div class="nav_menu-content-info-book">
  <button class="nav_menu-bts-close-menu" >x</button>
   <h2 class="nav_menu-h2-title-book">${book.nombre}</h2>
   <img class="nav_menu-img-book" src="${book.img}" alt="">
   <a class="nav_menu-a-description">${book.desc}description</a>
   <a href="${book.link}" target="_blank" class="nav_menu-bts-download">Descarga<img src="download-rounded.svg" alt=""></a>
   <img class="deco1" src="deco1.png" alt="a">
   <img class="deco2" src="deco3.png" alt="b">
   </div>
    `;
    viewmenubook.appendChild(div);
    }})
  
  
  const prod = bookArchive.map((prod) => {
    if (prod.id == prodId) {
      
    }
  })
  const btscloseanim = document.querySelector('.nav_menu-background-active')
  const btsCloseMenu = document.querySelector('.nav_menu-bts-close-menu');

function closeMenu() {
  viewmenubook.style.display = "none";
  viewmenubook.innerHTML = "";
}

btsCloseMenu.addEventListener('click', () =>{
  btscloseanim.style.animation = "backgrounviewmenu-title-exit 1.4s ease 0s 1 normal none"

  window.setTimeout(closeMenu, 1000);
 
})

}
