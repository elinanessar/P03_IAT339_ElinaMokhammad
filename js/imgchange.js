// Define an object to store the original sources of the images
var originalSources = {
    'image1': '../img/homepage_images/339_website_portrait_homepage_01.jpg',
    'image2': '../img/homepage_images/339_website_portrait_homepage_02.jpg',
    'image3': '../img/homepage_images/339_website_portrait_homepage_03.jpg',
    'image4': '../img/homepage_images/339_website_portrait_homepage_04.jpg',
    'image5': '../img/homepage_images/339_website_portrait_homepage_05.jpg',
    'image6': '../img/homepage_images/339_website_portrait_homepage_06.jpg',
    'image7': '../img/homepage_images/339_website_portrait_homepage_07.jpg',
    'image8': '../img/homepage_images/339_website_portrait_homepage_08.jpg',
    'image9': '../img/homepage_images/339_website_portrait_homepage_09.jpg'
};

// Add event listeners to each image
document.addEventListener('DOMContentLoaded', function() {
    for (var imageId in originalSources) {
        if (originalSources.hasOwnProperty(imageId)) {
            attachHoverBehavior(imageId);
        }
    }
});

function attachHoverBehavior(imageId) {
    var imgElement = document.getElementById(imageId);
    if (imgElement) {
        var originalSrc = originalSources[imageId];

        imgElement.addEventListener('mouseover', function() {
            this.dataset.originalSrc = this.src;
            this.src = originalSrc.replace('.jpg', '_2.png');
        });

        imgElement.addEventListener('mouseout', function() {
            if (this.dataset.originalSrc) {
                this.src = this.dataset.originalSrc;
            }
        });
    }
}
