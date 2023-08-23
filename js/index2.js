var goTopBtn = document.getElementById("goTopBtn");

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
});

function goToTop() {
    var currentPosition = window.pageYOffset;
    if (currentPosition > 0) {
        window.scrollTo(0, currentPosition - 50);
        requestAnimationFrame(goToTop);
    }
}





/*Xu huong*/
var thumbnailImages = document.querySelectorAll('.thumbnail');
thumbnailImages.forEach(function(image) {
    image.style.width = '100%'; // Đặt kích thước ban đầu của ảnh
});





