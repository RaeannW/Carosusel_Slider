(function () {
    "use strict";
    let currentImage = 0;
    const myPhotos = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    const container = document.getElementById('content');
    const nextBtn = document.getElementById('next');
    const previousBtn = document.getElementById('previous');


    // Next button
    nextBtn.addEventListener('click', function (event) {
        event.preventDefault();

        //Gets image from myPhotos array
        currentImage++;
        if (currentImage > (myPhotos.length - 1)) {
            currentImage = 0;
        }
        swapImage();
    });

    // Previous button
    previousBtn.addEventListener('click', function (event) {
        event.preventDefault();

        //Gets image from myPhotos array
        currentImage--;
        if (currentImage < 0) {
            currentImage = myPhotos.length - 1;
        }
        swapImage();
    });

    function swapImage() {
        // Fadein array of images
        const newSlide = document.createElement('img');
        newSlide.src = `slides/${myPhotos[currentImage]}`;
        newSlide.className = 'fadeinImg';
        container.appendChild(newSlide);

        // Remove extra children (new images created from DOM)
        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }
    }
}());