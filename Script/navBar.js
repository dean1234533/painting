const nav = document.querySelector(".navBar")
const btn = document.querySelector(".Navbtn")

function dropDown(){


nav.classList.toggle("Active")




}

btn.addEventListener("click", ()=>{

dropDown()

})

const navDropDown = document.querySelector(".navBar")
const list = document.querySelector(".ul")

function listClick(){


navDropDown.classList.remove("Active")




}

list.addEventListener("click",listClick)