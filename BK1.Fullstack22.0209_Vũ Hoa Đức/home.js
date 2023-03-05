var modal = document.getElementById("Modal");
var btn = document.getElementById("btn");
var ok = document.getElementById("okbtn");

btn.onclick = function() {
  modal.style.display = "block";
}
ok.onclick = function() {
    modal.style.display = "none";
  }
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
function CV() {
    document.getElementById("modal").classList.remove("hidden");
}

function okbtn(){
    document.getElementById("modal").classList.add("hidden");
}
