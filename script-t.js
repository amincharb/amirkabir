const s1 = document.getElementById("s1")
const s2 = document.getElementById("s2")
const s3 = document.getElementById("s3")
const s4 = document.getElementById("s4")
const s5 = document.getElementById("s5")
const s6 = document.getElementById("s6")
const s7 = document.getElementById("s7")

const main_t = document.querySelector(".main-t")
const sm = document.getElementById("sm")
const myc = document.querySelector(".myc")
const std = document.querySelector(".std")
const headStd = document.querySelector(".head-std")
const back = document.querySelector(".back-home")
const bigs = document.querySelector(".big-s")
let darkmode = false

sm.addEventListener("click" , ()=>{
    darkmode = !darkmode
    main_t.classList.toggle("dark")
    if (darkmode) {
        sm.src = "icon/wsun.png"
        document.body.style.backgroundColor = "black"
        myc.style.color = "white"
        back.style.color = "white"
        main_t.style.color = "white"
        bigs.style.border = "1px solid white"

            for (let i = 1; i <= 7; i++) {
                const s = document.getElementById(`s${i}`)

                s.style.color = "white"
                s.style.backgroundColor = "black"
                s.style.borderTop = "1px solid white"

                s.addEventListener("mouseover", () => {
                    s.style.border = "1px solid white"
                })

                s.addEventListener("mouseleave", () => {
                    s.style.border = "none"
                    s.style.borderTop = "1px solid white"
            })}

    }else {
        sm.src = "icon/moon.png"
        document.body.style.backgroundColor = "white"
        myc.style.color = "black"
        main_t.style.color = "black"
        back.style.color = "black"
        bigs.style.border = "1px solid black"
            for (let i = 1; i <= 7; i++) {
                const s = document.getElementById(`s${i}`)

                s.style.color = "black"
                s.style.backgroundColor = "white"
                s.style.borderTop = "1px solid black"

                s.addEventListener("mouseover", () => {
                    s.style.border = "1px solid black"
                })

                s.addEventListener("mouseleave", () => {
                    s.style.border = "none"
                    s.style.borderTop = "1px solid black"
        })}
    }
    localStorage.setItem("darkmode" , darkmode);
})


const savedDarkMode = JSON.parse(localStorage.getItem("darkmode"));

if (savedDarkMode) {
    darkmode = true;
    main_t.classList.add("dark");
    sm.src = "icon/wsun.png"
    document.body.style.backgroundColor = "black"
    myc.style.color = "white"
    back.style.color = "white"
    main_t.style.color = "white"
    bigs.style.border = "1px solid white"

        for (let i = 1; i <= 7; i++) {
            const s = document.getElementById(`s${i}`)

            s.style.color = "white"
            s.style.backgroundColor = "black"
            s.style.borderTop = "1px solid white"

            s.addEventListener("mouseover", () => {
                s.style.border = "1px solid white"
            })

            s.addEventListener("mouseleave", () => {
                s.style.border = "none"
                s.style.borderTop = "1px solid white"
        })}
} else {
    darkmode = false;
    main_t.classList.remove("dark");
    sm.src = "icon/moon.png"
    document.body.style.backgroundColor = "white"
    myc.style.color = "black"
    back.style.color = "black"
    main_t.style.color = "black"
    bigs.style.border = "1px solid black"
    s1.style.color = "black"
    s1.style.backgroundColor = "white"
    s1.style.borderTop = "1px solid black"
        for (let i = 1; i <= 7; i++) {
            const s = document.getElementById(`s${i}`)

            s.style.color = "black"
            s.style.backgroundColor = "white"
            s.style.borderTop = "1px solid black"

            s.addEventListener("mouseover", () => {
                s.style.border = "1px solid black"
            })

            s.addEventListener("mouseleave", () => {
                s.style.border = "none"
                s.style.borderTop = "1px solid black"
    })}
}



let startY = 0;
let startAtTop = false;
let startAtBottom = false;
let pulling = false;

const maxPull = 100;
const resistance = 0.2;

function setElastic(y, animate = false) {
    main_t.style.setProperty("--elastic-y", `${y}px`);
    main_t.classList.toggle("elastic-return", animate);
}

main_t.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) return;

    startY = e.touches[0].clientY;

    startAtTop = main_t.scrollTop <= 0;

    startAtBottom =
        main_t.scrollTop + main_t.clientHeight >=
        main_t.scrollHeight - 1;

    pulling = false;

    main_t.classList.remove("elastic-return");
});

main_t.addEventListener("touchmove", (e) => {
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

    main_t.classList.add("elastic-return");

    setElastic(0, true);

    pulling = false;
}

main_t.addEventListener("touchend", releaseElastic);
main_t.addEventListener("touchcancel", releaseElastic);