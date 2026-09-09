function srvcE() {
    document.getElementById("target-etela").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
function srvcW() {
    document.getElementById("target-weekly").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
function srvcT() {
    document.getElementById("target-hw").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
function srvcH() {
    document.getElementById("target-home").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
function srvcS() {
    document.getElementById("target-student").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
function srvcM() {
    document.getElementById("target-teacher").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}






const sm = document.getElementById("sm")
const myc = document.querySelector(".myc")
const main = document.querySelector(".main")
const close = document.querySelector(".imgc")
const btnball = document.querySelector(".btnall")
const divnone = document.querySelector(".fix-fstk")
const mtnf = document.querySelector(".mtnf")
const fstk1 = document.querySelector(".fstk-1")
const fstk2 = document.querySelector(".fstk-2")
const fstk3 = document.querySelector(".fstk-3")
const besti2 = document.querySelector(".besti2")
const besti3 = document.querySelector(".besti3")
const besti4 = document.querySelector(".besti4")
const besti5 = document.querySelector(".besti5")
const besti6 = document.querySelector(".besti6")
let darkmode = false


btnball.addEventListener("click" , ()=>{
    divnone.style.display = "flex"
})
close.addEventListener("click" , ()=>{
    divnone.style.display = "none"
})

// 
mtnf.textContent = "متن کامل تکالیف :" + fstk1.textContent + fstk2.textContent + fstk3.textContent
// 


sm.addEventListener("click" , ()=>{
    darkmode = !darkmode
    main.classList.toggle("dark")
    if (darkmode) {
        sm.src = "icon/wsun.png"
        document.body.style.backgroundColor = "black"
        besti2.style.color = "white"
        besti3.style.color = "white"
        besti4.style.color = "white"
        besti5.style.color = "white"
        besti6.style.color = "white"
        myc.style.color = "white"
        main.style
    }else {
        sm.src = "icon/moon.png"
        document.body.style.backgroundColor = "white"
        besti2.style.color = "black"
        besti3.style.color = "black"
        besti4.style.color = "black"
        besti5.style.color = "black"
        besti6.style.color = "black"
        myc.style.color = "black"
    }
})