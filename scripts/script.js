// JavaScript Document
console.log("hi");

const filtersButton = document.querySelector("main > section:nth-of-type(2) > section:first-of-type > button");
const filtersMenu = document.querySelector("main > section:nth-of-type(2) > section:nth-of-type(2)");

const pageButtonPrev = document.querySelector("main > section:nth-of-type(2) > section:last-of-type button:first-of-type img");
const pageButton1 = document.querySelector("main > section:nth-of-type(2) > section:last-of-type button:nth-of-type(2)");
const pageButton2 = document.querySelector("main > section:nth-of-type(2) > section:last-of-type button:nth-of-type(3)");
const pageButton3 = document.querySelector("main > section:nth-of-type(2) > section:last-of-type button:nth-of-type(4)");
const pageButtonNext = document.querySelector("main > section:nth-of-type(2) > section:last-of-type button:last-of-type img");




filtersButton.addEventListener('click', () => {
    filtersMenu.classList.toggle("filterOpen");
    filtersButton.classList.toggle("filterActive");
})



let pageNumbr = 1;

pageButtonPrev.addEventListener('click', () => {
    if (pageNumbr > 1) {
        pageNumbr = pageNumbr - 1;
        updatePage();
    }
})

pageButtonNext.addEventListener('click', () => {
    if (pageNumbr < 3) {
        pageNumbr = pageNumbr + 1;
        updatePage();
    }
})

pageButton1.addEventListener('click', () => {
    pageNumbr = 1;
    updatePage();
})
pageButton2.addEventListener('click', () => {
    pageNumbr = 2;
    updatePage();
})
pageButton3.addEventListener('click', () => {
    pageNumbr = 3;
    updatePage();
})

function updatePage() {

    pageButtonPrev.classList.remove("pageButtonActive");
    pageButton1.classList.remove("pageActive");
    pageButton2.classList.remove("pageActive");
    pageButton3.classList.remove("pageActive");
    pageButtonNext.classList.remove("pageButtonActive");

    console.log(`Loading page ${pageNumbr}`);

    if (pageNumbr == 1) {
        pageButtonPrev.classList.add("pageButtonActive");
        pageButton1.classList.add("pageActive");
    } else if (pageNumbr == 2) {
        pageButton2.classList.add("pageActive");
    } else if (pageNumbr == 3) {
        pageButton3.classList.add("pageActive");
        pageButtonNext.classList.add("pageButtonActive");
    }
}