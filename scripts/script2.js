const colorLemongrass = document.querySelector("main > section:nth-of-type(2)> section:nth-of-type(3) section:first-of-type > button:nth-of-type(1)");
const colorSnow = document.querySelector("main > section:nth-of-type(2)> section:nth-of-type(3) section:first-of-type > button:nth-of-type(2)");
const colorObsidian = document.querySelector("main > section:nth-of-type(2)> section:nth-of-type(3) section:first-of-type > button:nth-of-type(3)");

const stor1 = document.querySelector("main > section:nth-of-type(2)> section:nth-of-type(3) section:nth-of-type(2) > button:first-of-type");
const stor2 = document.querySelector("main > section:nth-of-type(2)> section:nth-of-type(3) section:nth-of-type(2) > button:last-of-type");

const buyButton = document.querySelector("main > section:nth-of-type(2)> section:nth-of-type(3) section:last-of-type > button");

colorLemongrass.addEventListener('click', () => {
    colorLemongrass.classList.add("selected");
    colorSnow.classList.remove("selected");
    colorObsidian.classList.remove("selected");

    stor1.classList.remove("disabled");
    stor2.classList.remove("disabled");
})
colorSnow.addEventListener('click', () => {
    colorLemongrass.classList.remove("selected");
    colorSnow.classList.add("selected");
    colorObsidian.classList.remove("selected");

    stor1.classList.remove("disabled");
    stor2.classList.remove("disabled");
})
colorObsidian.addEventListener('click', () => {
    colorLemongrass.classList.remove("selected");
    colorSnow.classList.remove("selected");
    colorObsidian.classList.add("selected");

    stor1.classList.remove("disabled");
    stor2.classList.remove("disabled");
})

stor1.addEventListener('click', () => {
    stor1.classList.add("selected");
    stor2.classList.remove("selected");

    buyButton.classList.remove("disabled");
})
stor2.addEventListener('click', () => {
    stor1.classList.remove("selected");
    stor2.classList.add("selected");

    buyButton.classList.remove("disabled");    
})