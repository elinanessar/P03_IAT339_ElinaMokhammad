window.addEventListener("scroll", function() {
    var backToTopButton = document.getElementById("back-to-top");
  
    if (window.scrollY > document.documentElement.scrollHeight - window.innerHeight) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  
  // Smooth scrolling to top when the button is clicked
  document.getElementById("back-to-top").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  