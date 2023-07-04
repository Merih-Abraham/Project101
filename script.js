// Get all the images in the gallery
const images = document.querySelectorAll('.gallery img');

// Initialize current image index
let currentImageIndex = 0;

// Function to navigate to the previous image
function showPreviousImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  showImage();
}

// Function to navigate to the next image
function showNextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  showImage();
}

// Function to display the current image
function showImage() {
  // Hide all images
  images.forEach(image => {
    image.style.display = 'none';
  });

  // Display the current image
  images[currentImageIndex].style.display = 'block';
}

// Add event listeners to navigate using arrow keys
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    showPreviousImage();
  } else if (event.key === 'ArrowRight') {
    showNextImage();
  }
});

// Show the initial image
showImage();
