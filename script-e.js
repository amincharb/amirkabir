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
const book_omo = document.querySelector(".book-omo")
const book_pud = document.querySelector(".book-pud")
const div_book1 = document.querySelector(".book1 .div-books")
const div_book2 = document.querySelector(".book2 .div-books")
const div_book3 = document.querySelector(".book3 .div-books")
const div_book4 = document.querySelector(".book4 .div-books")
const div_book5 = document.querySelector(".book5 .div-books")
const div_book6 = document.querySelector(".book6 .div-books")
const div_book7 = document.querySelector(".book7 .div-books")
const div_book8 = document.querySelector(".book8 .div-books")
const div_book9 = document.querySelector(".book9 .div-books")
const div_book10 = document.querySelector(".book10 .div-books")
const div_book11 = document.querySelector(".book11 .div-books")
const div_book12 = document.querySelector(".book12 .div-books")
const div_book13 = document.querySelector(".book13 .div-books")
const book1 = document.querySelector(".book1")
const book2 = document.querySelector(".book2")
const book3 = document.querySelector(".book3")
const book4 = document.querySelector(".book4")
const book5 = document.querySelector(".book5")
const book6 = document.querySelector(".book6")
const book7 = document.querySelector(".book7")
const book8 = document.querySelector(".book8")
const book9 = document.querySelector(".book9")
const book10 = document.querySelector(".book10")
const book11 = document.querySelector(".book11")
const book12 = document.querySelector(".book12")
const book13 = document.querySelector(".book13")
const down1 = document.querySelector(".b1")
const down2 = document.querySelector(".b2")
const down3 = document.querySelector(".b3")
const down4 = document.querySelector(".b4")
const down5 = document.querySelector(".b5")
const down6 = document.querySelector(".b6")
const down7 = document.querySelector(".b7")
const down8 = document.querySelector(".b8")
const down9 = document.querySelector(".b9")
const down10 = document.querySelector(".b10")
const down11 = document.querySelector(".b11")
const down12 = document.querySelector(".b12")
const down13 = document.querySelector(".b13")
const div_books = document.querySelector(".div-books")
const main_e = document.querySelector(".main-e")

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
    book_omo.style.display = "block"
    setInterval(()=>{
        book_omo.style.opacity = "100%"
    },50)
    book_pud.style.display = "none"
})
box4.addEventListener("click" , ()=>{
    alert("در زمان خودش این بخش باز میشه .")
})
box5.addEventListener("click" , ()=>{
    alert("در زمان خودش این بخش باز میشه .")
})
box6.addEventListener("click" , ()=>{
    alert("در زمان خودش این بخش باز میشه .")
})
box7.addEventListener("click" , ()=>{
    box7.style.backgroundColor = "#1ea7fb"
    box8.style.backgroundColor = "transparent"
    box9.style.backgroundColor = "transparent"
    box10.style.backgroundColor = "transparent"
    box11.style.backgroundColor = "transparent"
    book_pud.style.display = "block"
    setInterval(()=>{
        book_pud.style.opacity = "100%"
    },50)
    book_omo.style.display = "none"
})
box8.addEventListener("click" , ()=>{
    alert("در زمان خودش این بخش باز میشه .")
})
box9.addEventListener("click" , ()=>{
    alert("در زمان خودش این بخش باز میشه .")
})
box10.addEventListener("click" , ()=>{
    alert("در زمان خودش این بخش باز میشه .")
})
box11.addEventListener("click" , ()=>{
    alert("در زمان خودش این بخش باز میشه .")
})








div_book1.addEventListener("click" , ()=>{
    book1.classList.toggle("book-toggle")
    down1.classList.toggle("book-rotate")
})
div_book2.addEventListener("click" , ()=>{
    book2.classList.toggle("book-toggle")
    down2.classList.toggle("book-rotate")
})
div_book3.addEventListener("click" , ()=>{
    book3.classList.toggle("book-toggle")
    down3.classList.toggle("book-rotate")
})
div_book4.addEventListener("click" , ()=>{
    book4.classList.toggle("book-toggle")
    down4.classList.toggle("book-rotate")
})
div_book5.addEventListener("click" , ()=>{
    book5.classList.toggle("book-toggle")
    down5.classList.toggle("book-rotate")
})
div_book6.addEventListener("click" , ()=>{
    book6.classList.toggle("book-toggle")
    down6.classList.toggle("book-rotate")
})
div_book7.addEventListener("click" , ()=>{
    book7.classList.toggle("book-toggle")
    down7.classList.toggle("book-rotate")
})
div_book8.addEventListener("click" , ()=>{
    book8.classList.toggle("book-toggle")
    down8.classList.toggle("book-rotate")
})
div_book9.addEventListener("click" , ()=>{
    book9.classList.toggle("book-toggle")
    down9.classList.toggle("book-rotate")
})
div_book10.addEventListener("click" , ()=>{
    book10.classList.toggle("book-toggle")
    down10.classList.toggle("book-rotate")
})
div_book11.addEventListener("click" , ()=>{
    book11.classList.toggle("book-toggle")
    down11.classList.toggle("book-rotate")
})
div_book12.addEventListener("click" , ()=>{
    book12.classList.toggle("book-toggle")
    down12.classList.toggle("book-rotate")
})
div_book13.addEventListener("click" , ()=>{
    book13.classList.toggle("book-toggle")
    down13.classList.toggle("book-rotate")
})






let startY = 0;
let startAtTop = false;
let startAtBottom = false;
let pulling = false;

const maxPull = 800;
const resistance = 0.35;

function setElastic(y, animate = false) {
    main_e.style.setProperty("--elastic-y", `${y}px`);
    main_e.classList.toggle("elastic-return", animate);
}

main_e.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) return;

    startY = e.touches[0].clientY;

    startAtTop = main_e.scrollTop <= 0;

    startAtBottom =
        main_e.scrollTop + main_e.clientHeight >=
        main_e.scrollHeight - 1;

    pulling = false;

    main_e.classList.remove("elastic-return");
});

main_e.addEventListener("touchmove", (e) => {
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

    main_e.classList.add("elastic-return");

    setElastic(0, true);

    pulling = false;
}

main_e.addEventListener("touchend", releaseElastic);
main_e.addEventListener("touchcancel", releaseElastic);