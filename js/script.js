let menu_items=document.getElementById("menu_items");
let bars=document.getElementById("bars");
bars.addEventListener("click" ,() =>{
    if(menu_items.style.opacity=="0"){
        menu_items.style.opacity="1";
        menu_items.style.height="100vh";
    }else{
        menu_items.style .opacity="0";
        menu_items.style .height="0vh";
    }
})