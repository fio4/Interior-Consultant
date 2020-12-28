var a = document.getElementById("icono-menu");
var menu = document.getElementById("menu");
a.onclick = function(){
    if(menu.classList.contains("on")){
        menu.classList.remove("on");
    } else{
        menu.classList.add("on");
    }
}