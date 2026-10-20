const box1 = document.getElementById("box1-pao")
const box2 = document.getElementById("box2-pao")
const box3 = document.getElementById("box3-pao")
const box4 = document.getElementById("box4-pao")
const box5 = document.getElementById("box5-pao")
const box6 = document.getElementById("box6-pao")
const box7 = document.getElementById("box7-pao")
const box8 = document.getElementById("box8-pao")
const box9 = document.getElementById("box9-pao")
const box10 = document.getElementById("box10-pao")
const box11 = document.getElementById("box11-pao")
const big_omo = document.querySelector(".big-omo")
const big_pud = document.querySelector(".big-pud")

box1.addEventListener("click" , ()=>{
    box1.style.backgroundColor = "#1ea7fb"
    box2.style.backgroundColor = "transparent"
    big_omo.style.display = "block"
    setInterval(()=>{
        big_omo.style.opacity = "100%"
    },50)
    big_pud.style.display = "none"
})
box2.addEventListener("click" , ()=>{
    box1.style.backgroundColor = "transparent"
    box2.style.backgroundColor = "#1ea7fb"
    big_pud.style.display = "block"
    setInterval(()=>{
        big_pud.style.opacity = "100%"
    },50)
    big_omo.style.display = "none"
})
box3.addEventListener("click" , ()=>{
    box3.style.backgroundColor = "#1ea7fb"
    box4.style.backgroundColor = "transparent"
    box5.style.backgroundColor = "transparent"
    box6.style.backgroundColor = "transparent"
})
box7.addEventListener("click" , ()=>{
    box7.style.backgroundColor = "#1ea7fb"
    box8.style.backgroundColor = "transparent"
    box9.style.backgroundColor = "transparent"
    box10.style.backgroundColor = "transparent"
    box11.style.backgroundColor = "transparent"
})