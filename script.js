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
const fstk4 = document.querySelector(".fstk-4")
const besti2 = document.querySelector(".besti2")
const besti3 = document.querySelector(".besti3")
const besti4 = document.querySelector(".besti4")
const besti5 = document.querySelector(".besti5")
const besti6 = document.querySelector(".besti6")
const close_msg = document.getElementById("close-msg")
const besti_msg = document.getElementById("besti-msg")
const update = document.getElementById("update")
const upbtn = document.getElementById("upbtn")
let darkmode = false


btnball.addEventListener("click" , ()=>{
    divnone.style.display = "flex"
})
close.addEventListener("click" , ()=>{
    divnone.style.display = "none"
})


// if (true) {
//     besti_msg.style.display = "flex"
// }
// close_msg.addEventListener("click" , ()=>{
//     besti_msg.style.display = "none"
//     localStorage.setItem("close_msg1" , JSON.stringify(besti_msg.style.display))
// })
// const close_local = JSON.parse(localStorage.getItem("close_msg1"))
// if (close_local) {
//     besti_msg.style.display = "none"
// }
if (true) {
    update.style.display = "flex"
}
upbtn.addEventListener("click" , ()=> {
    update.style.display = "none"
    localStorage.setItem("close_msg2" , JSON.stringify(update.style.display))
})
const close_local2 = JSON.parse(localStorage.getItem("close_msg2"))
if (close_local2) {
    update.style.display = "none"
}





mtnf.textContent = ""
const mtnfTitle = document.createElement("div")
mtnfTitle.className = "mtnf-title"
mtnfTitle.textContent = "متن کامل تکالیف :"
mtnf.appendChild(mtnfTitle)
document.querySelectorAll(".fstk-1 , .fstk-2 , .fstk-3 , .fstk-4").forEach((hw)=>{
    const text = hw.textContent.replace(/\s+/g, " ").trim()
    if (!text) return
    const line = document.createElement("div")
    line.className = "mtnf-line"
    line.textContent = text
    mtnf.appendChild(line)
})


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
    localStorage.setItem("darkmode" , darkmode);
})
const savedDarkMode = JSON.parse(localStorage.getItem("darkmode"));

if (savedDarkMode) {
    darkmode = true;
    main.classList.add("dark");

    sm.src = "icon/wsun.png";
    document.body.style.backgroundColor = "black";

    besti2.style.color = "white";
    besti3.style.color = "white";
    besti4.style.color = "white";
    besti5.style.color = "white";
    besti6.style.color = "white";
    myc.style.color = "white";
} else {
    darkmode = false;
    main.classList.remove("dark");

    sm.src = "icon/moon.png";
    document.body.style.backgroundColor = "white";

    besti2.style.color = "black";
    besti3.style.color = "black";
    besti4.style.color = "black";
    besti5.style.color = "black";
    besti6.style.color = "black";
    myc.style.color = "black";
}



let startY = 0;
let startAtTop = false;
let startAtBottom = false;
let pulling = false;

const maxPull = 800;
const resistance = 0.35;

function setElastic(y, animate = false) {
    main.style.setProperty("--elastic-y", `${y}px`);
    main.classList.toggle("elastic-return", animate);
}

main.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) return;

    startY = e.touches[0].clientY;

    startAtTop = main.scrollTop <= 0;

    startAtBottom =
        main.scrollTop + main.clientHeight >=
        main.scrollHeight - 1;

    pulling = false;

    main.classList.remove("elastic-return");
});

main.addEventListener("touchmove", (e) => {
    if (e.touches.length !== 1) return;

    const distance =
        e.touches[0].clientY - startY;

    // کشیدن از بالای صفحه به پایین
    if (startAtTop && distance > 0) {
        const pull = Math.min(
            distance * resistance,
            maxPull
        );

        setElastic(pull);
        pulling = true;

        return;
    }

    // کشیدن از پایین صفحه به بالا
    if (startAtBottom && distance < 0) {
        const pull = Math.max(
            distance * resistance,
            -maxPull
        );

        setElastic(pull);
        pulling = true;

        return;
    }

    // اگر جهت حرکت برعکس شد
    if (pulling) {
        setElastic(0);
        pulling = false;
    }

}, { passive: true });


function releaseElastic() {
    if (!pulling) return;

    main.classList.add("elastic-return");

    setElastic(0, true);

    pulling = false;
}

main.addEventListener("touchend", releaseElastic);
main.addEventListener("touchcancel", releaseElastic);