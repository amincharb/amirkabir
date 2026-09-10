const sm = document.getElementById("sm")
const hminp = document.getElementById("hm-inp")
const hmbtn = document.getElementById("hm-btn")
const myc = document.querySelector(".myc")
const main_ahw = document.querySelector(".main-ahw")
const back = document.querySelector(".back-home")
let darkmode = false




sm.addEventListener("click" , ()=>{
    darkmode = !darkmode
    main_ahw.classList.toggle("dark")
    if (darkmode) {
        sm.src = "icon/wsun.png"
        document.body.style.backgroundColor = "black"
        myc.style.color = "white"
        main_ahw.style.color = "white"
        back.style.color = "white"
        hminp.style.backgroundColor = "rgb(255, 255, 255, 0)"
        hminp.style.color = "white"
        hmbtn.style.backgroundColor = "rgb(255, 255, 255, 0)"
        hmbtn.style.color = "white"
        hmbtn.style.border = "1px solid rgb(202, 198, 198)"
    }else {
        sm.src = "icon/moon.png"
        document.body.style.backgroundColor = "white"
        myc.style.color = "black"
        main_ahw.style.color = "black"
        back.style.color = "black"
        hminp.style.color = "black"
        hmbtn.style.backgroundColor = "aliceblue"
        hmbtn.style.color = "black"
        hmbtn.style.border = "none"
    }
    localStorage.setItem("darkmode" , darkmode);
    // localStorage.setItem("darkness" , JSON.stringify({
    //     main: main.classList.contains("dark") ,
    //     src: sm.src ,
    //     body: document.body.style.backgroundColor,
    //     besti2: besti2.style.color,
    //     besti3: besti3.style.color,
    //     besti4: besti4.style.color,
    //     besti5: besti5.style.color,
    //     besti6: besti6.style.color,
    //     myc: myc.style.color
    // }))
    // localStorage.setItem("darkness2" , JSON.stringify({
    //     main_ahw: main.classList.contains("dark") ,
    //     src: sm.src,
    //     body: document.body.style.backgroundColor,
    //     myc: myc.style.color,
    //     main: main_ahw.style.color,
    //     back: back.style.color,
    //     hminpbc: hminp.style.backgroundColor,
    //     hminpc: hminp.style.color,
    //     hmbtnbc: hmbtn.style.backgroundColor,
    //     hmbtnc: hmbtn.style.color,
    //     hmbtnb: hmbtn.style.border
    // }))
})
    // تبدیل اعداد فارسی به انگلیسی
    function normalizeNumbers(text) {
        return text
            .replace(/[۰-۹]/g, number => "۰۱۲۳۴۵۶۷۸۹".indexOf(number))
            .replace(/[٠-٩]/g, number => "٠١٢٣٤٥٦٧٨٩".indexOf(number));
    }

    // یکسان‌سازی متن جستجو
    function normalizeSearch(text) {
        return normalizeNumbers(text)
            .trim()
            .replace(/\s+/g, " ")
            .replace(/\s*([۰-۹0-9]+)\s*مهر/g, "$1 مهر")
            .replace(/مهر\s*([۰-۹0-9]+)/g, "$1 مهر");
    }

    function searchHomework() {
        const input = document.querySelector("#hm-inp");

        if (!input) return;

        const searchValue = normalizeSearch(input.value);

        if (!searchValue) {
            return;
        }

        // تمام کارت‌های تکلیف
        const homeworkCards = document.querySelectorAll(".hm-no-1");

        let foundHomework = null;

        homeworkCards.forEach(card => {
            const cardText = normalizeSearch(card.textContent);

            if (cardText.includes(searchValue)) {
                foundHomework = card;
            }
        });

        if (foundHomework) {

            // حذف هایلایت قبلی
            homeworkCards.forEach(card => {
                card.classList.remove("homework-found");
            });

            // اسکرول نرم به تکلیف
            foundHomework.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            // هایلایت
            setTimeout(() => {
                foundHomework.classList.add("homework-found");
            }, 400);

            // بعد از ۲ ثانیه حذف هایلایت
            setTimeout(() => {
                foundHomework.classList.remove("homework-found");
            }, 2400);

        } else {
            alert("تکلیفی برای «" + input.value + "» پیدا نشد.");
        }
    }


    // کلیک روی دکمه جستجو
    document.querySelector("#hm-btn")?.addEventListener("click", searchHomework);


    // جستجو با Enter
    document.querySelector("#hm-inp")?.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            event.preventDefault();
            searchHomework();
        }

    });

// const getTheme = JSON.parse(localStorage.getItem("darkness"))

// if (getTheme) {
//     darkmode = getTheme.main
//     main.classList.toggle("dark" , getTheme.main)
//     sm.src = getTheme.src
//     document.body.style.backgroundColor = getTheme.body
//     besti2.style.color = getTheme.besti2
//     besti3.style.color = getTheme.besti3
//     besti4.style.color = getTheme.besti4
//     besti5.style.color = getTheme.besti5
//     besti6.style.color = getTheme.besti6
//     myc.style.color = getTheme.myc
// }

// const getTheme2 = JSON.parse(localStorage.getItem("darkness2"))

// if (getTheme2) {
//     darkmode = getTheme2.main_ahw
//     main_ahw.classList.toggle("dark" , getTheme.main_ahw)
//     sm.src
//     document.body.style.backgroundColor = getTheme2.body
//     myc.style.color = getTheme2.myc
//     main.style.color = getTheme2.main
//     back.style.color = getTheme2.back
//     hminp.style.backgroundColor = getTheme2.hminpbc
//     hminp.style.color = getTheme2.hminpc
//     hmbtn.style.backgroundColor = getTheme2.hmbtnbc
//     hmbtn.style.color = getTheme2.hmbtnc
//     hmbtn.style.border = getTheme2.hmbtnb
// }

const savedDarkMode = JSON.parse(localStorage.getItem("darkmode"));

if (savedDarkMode) {
    darkmode = true;
    main_ahw.classList.add("dark");

    sm.src = "icon/wsun.png";
    document.body.style.backgroundColor = "black";

    myc.style.color = "white";
    main_ahw.style.color = "white";
    back.style.color = "white";

    hminp.style.backgroundColor = "rgb(255, 255, 255, 0)";
    hminp.style.color = "white";

    hmbtn.style.backgroundColor = "rgb(255, 255, 255, 0)";
    hmbtn.style.color = "white";
    hmbtn.style.border = "1px solid rgb(202, 198, 198)";
} else {
    darkmode = false;
    main_ahw.classList.remove("dark");

    sm.src = "icon/moon.png";
    document.body.style.backgroundColor = "white";

    myc.style.color = "black";
    main_ahw.style.color = "black";
    back.style.color = "black";

    hminp.style.backgroundColor = "";
    hminp.style.color = "black";

    hmbtn.style.backgroundColor = "aliceblue";
    hmbtn.style.color = "black";
    hmbtn.style.border = "none";
}