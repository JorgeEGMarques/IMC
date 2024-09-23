const botao = document.getElementById("dropdown");
const dropdown = document.getElementById("myDropdown");
let width = window.innerWidth;

window.onresize = () => {
  width = window.innerWidth;
}

if (width > 480) {
  botao.addEventListener("mouseover", function() {
    dropdown.setAttribute("class", "dropdown-content show");
  })

  botao.addEventListener("mouseleave", function() {
    dropdown.setAttribute("class", "dropdown-content");
  })  
} else {
  botao.addEventListener("click", function() {
    dropdown.getAttribute("class") == "dropdown-content" ?
    dropdown.setAttribute("class", "dropdown-content show") :
    dropdown.setAttribute("class", "dropdown-content");
  })
}
