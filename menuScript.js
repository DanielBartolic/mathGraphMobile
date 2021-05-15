var navMenu = document.getElementById("navMenuid");
function openCloseMenu(){
    console.log("a");
    var toggle = document.getElementById("toggleMenu");
    var menu = document.getElementById("menuid");
    if(toggle.checked == true){
        menu.style.display ="block";
        navMenu.style.border="none";
    }else{
        menu.style.display="none";
        navMenu.style.border="1px solid black";
    }
}

function myFunction(x) {
    x.classList.toggle("change");
  }