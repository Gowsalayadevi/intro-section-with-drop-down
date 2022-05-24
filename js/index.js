const hamburger = document.querySelector(".hamburger")
const hamburgerclose = document.querySelector(".hamburger-close")
const navcontent = document.querySelector("nav")
hamburger.addEventListener("click",function(){
    navcontent.style.display ="block";
    hamburgerclose.style.display="block"

})
hamburgerclose.addEventListener("click",function(){
    navcontent.style.display ="none";

})
