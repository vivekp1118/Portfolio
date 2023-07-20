function toggleMenu(e) {
    e.stopPropagation();
    document.querySelector(".menu-container").classList.toggle("active");
}

function menuModel(){
    document.addEventListener("click",(e)=>{
    const menuContainer = document.querySelector(".menu-container");
    if(menuContainer.classList.contains("active") && e.target != menuContainer){
        menuContainer.classList.remove("active");
    }
})
}


export { toggleMenu ,menuModel};