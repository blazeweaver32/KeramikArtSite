
const images = [
    "data/techniques_1.jpg",
    "data/techniques_2.jpg",
    "data/techniques_3.jpg",

];


let currentIndex = 0;


const galleryImg = document.querySelector('.gallery-img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');


function updateImage() {
    galleryImg.src = images[currentIndex];
}


prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});


updateImage();
