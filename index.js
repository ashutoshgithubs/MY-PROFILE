let modal=document.querySelector(".modal");
let screen=document.querySelector(".screen");
function openModal(){
    modal.classList.remove("scale-0");
    // document.querySelector(".card").classList.add("blur-sm");
    modal.classList.add("transition-all","duration-500");
    screen.classList.add("overlayactive");
}
function closeModal(){
    modal.classList.add("scale-0");
    // document.querySelector(".card").classList.remove("blur-sm");
    screen.classList.remove("overlayactive");
    
}
// function removeModal(){
//     modal.classList.add("scale-0");
// }