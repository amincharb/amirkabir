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