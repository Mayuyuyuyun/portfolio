const switchImg = document.getElementById("switch");
const lightImg = document.getElementById("light");
function changeImg(){
switchImg.classList.toggle("on_switch");
lightImg.classList.toggle("on_light");
}
switchImg.addEventListener("click",changeImg);