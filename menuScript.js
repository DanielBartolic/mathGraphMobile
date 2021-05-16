var navMenu = document.getElementById("navMenuid");
function openCloseMenu(){
    
    var toggle = document.getElementById("toggleMenu");
    var menu = document.getElementById("menuid");
    if(toggle.checked == true){
        navMenu.style.borderTop="none";
        menu.style.display ="block";
        
        
    }else{
        
        navMenu.style.borderTop="4px solid black";
        menu.style.display="none";
        
    }
}

function myFunction(x) {
    x.classList.toggle("change");
  }