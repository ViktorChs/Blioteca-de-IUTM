const toggleSections = document.querySelector('.body_Content-Arrow')
const oneSection = document.querySelector('.section_ini')
const twoSection = document.querySelector('.section_2')
const threSection = document.querySelector('.section_3')

const toggleMenuFilters = document.querySelector('.etc')
const blockmenubooks = document.querySelector('.blockcontentmenuopen')

var checklistFormato = document.getElementById("checklist-Formato");
var checklistPNF = document.getElementById("checklist-PNF");
var checklistMateria = document.getElementById("checklist-materia");

//const toggleMenuf = () => ;

function toggleMenuf() {
  blockmenubooks.classList.toggle("open")
document.body.classList.toggle("open")
}

const btsmenu = document.querySelector('.btsnavbar')
function timeouttoggle(){
  toggleMenuFilters.style.display = "none";

    threSection.style.display = "none";
    oneSection.style.display = "none";
    twoSection.style.display = "flex";
    btsmenu.style.display = "flex";
    


    document.body.style.background = "linear-gradient(144deg, #308fa3 0%, #ddc3b4 100%)"
}

toggleSections.addEventListener('click', () => {
    oneSection.style.animation = 'exittoggle 1s ease 0s 1 normal forwards';
    window.setTimeout(timeouttoggle, 1000);
/* */
    let checkboxes = document.querySelectorAll("#checklist-items-formato input[type=checkbox]");

    function obtenerValorCheckboxMarcado() {
      let valorCheckboxMarcado1 = "";
      aaa()

      checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
          valorCheckboxMarcado1 = checkbox.value;
        }
      });
    
      console.log( valorCheckboxMarcado1);
    }
    
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("click", obtenerValorCheckboxMarcado);
    });

    let checkboxes12 = document.querySelectorAll("#checklist-items-PNF input[type=checkbox]");

function obtenerValorCheckboxMarcado1() {
  let valorCheckboxMarcado2 = "";
aaa()
  checkboxes12.forEach(function(checkbox) {
    if (checkbox.checked) {
      valorCheckboxMarcado2 = checkbox.value;
    }
  });

  console.log( valorCheckboxMarcado2);
}

checkboxes12.forEach(function(checkbox) {
  checkbox.addEventListener("click", obtenerValorCheckboxMarcado1);
});



let checkboxes2 = document.querySelectorAll("#checklist-items-materia input[type=checkbox]");

function obtenerValorCheckboxMarcado2() {
  aaa()
  let valorCheckboxMarcado3 = "";

  checkboxes2.forEach(function(checkbox) {
    if (checkbox.checked) {
      valorCheckboxMarcado3 = checkbox.value;
    }
  });

  console.log( valorCheckboxMarcado3);
}

checkboxes2.forEach(function(checkbox) {
  checkbox.addEventListener("click", obtenerValorCheckboxMarcado2);
});


/*-------------------------*/






}  )
checklistFormato.addEventListener("click", function() {
  var checkboxes = document.querySelectorAll("#checklist-items-formato");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].style.display === "none") {
      checkboxes[i].style.display = "block";
    } else {
      checkboxes[i].style.display = "none";
    }
  }
});
checklistPNF.addEventListener("click", function() {
  var checkboxes = document.querySelectorAll("#checklist-items-PNF");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].style.display === "none") {
      checkboxes[i].style.display = "block";
    } else {
      checkboxes[i].style.display = "none";
    }
  }
});
checklistMateria.addEventListener("click", function() {
  var checkboxes = document.querySelectorAll("#checklist-items-materia");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].style.display === "none") {
      checkboxes[i].style.display = "block";
    } else {
      checkboxes[i].style.display = "none";
    }
  }
});


let checkboxes = document.querySelectorAll("#checklist-items-PNF input[type=checkbox]");
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("click", function() {
    if (this.checked) {
      for (let j = 0; j < checkboxes.length; j++) {
        if (checkboxes[j] !== this) {
          checkboxes[j].parentNode.style.display = "none"; // Oculta el elemento li que contiene el checkbox y su label asociado
        }
      }
    } else {
      for (let j = 0; j < checkboxes.length; j++) {
        checkboxes[j].parentNode.style.display = "flex"; // Muestra todos los elementos li que contienen los checkboxes y sus labels asociados
      }
    }
  });
}
let checkboxes1 = document.querySelectorAll("#checklist-items-materia input[type=checkbox]");
for (let i = 0; i < checkboxes1.length; i++) {
  checkboxes1[i].addEventListener("click", function() {
    if (this.checked) {
      for (let j = 0; j < checkboxes1.length; j++) {
        if (checkboxes1[j] !== this) {
          
          checkboxes1[j].parentNode.style.display = "none"; // Oculta el elemento li que contiene el checkbox y su label asociado
        }
      }
    } else {
      for (let j = 0; j < checkboxes1.length; j++) {
        
        checkboxes1[j].parentNode.style.display = "flex"; // Muestra todos los elementos li que contienen los checkboxes y sus labels asociados
      }
    }
  });
}
let checkboxes2 = document.querySelectorAll("#checklist-items-formato input[type=checkbox]");
for (let i = 0; i < checkboxes2.length; i++) {
  checkboxes2[i].addEventListener("click", function() {
    if (this.checked) {
      for (let j = 0; j < checkboxes2.length; j++) {
        if (checkboxes2[j] !== this) {
          checkboxes2[j].parentNode.style.display = "none"; // Oculta el elemento li que contiene el checkbox y su label asociado
        }
      }
    } else {
      for (let j = 0; j < checkboxes2.length; j++) {
        checkboxes2[j].parentNode.style.display = "flex"; // Muestra todos los elementos li que contienen los checkboxes y sus labels asociados
      }
    }
  });
}



