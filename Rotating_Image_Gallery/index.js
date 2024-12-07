const imageContainerEl = document.querySelector(".image-container");

const prevE1 = document.getElementById("prev");

const nextEl = document.getElementById("next");

let x = 0;
let timer;
prevE1.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer);
    updateGallery();
});
nextEl.addEventListener("click", () => {
    x = x - 45;
    updateGallery();
});

function updateGallery(){
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x = x - 45;
        clearTimeout(timer);
        updateGallery();
    }, 3000);
}
updateGallery();