const images = document.querySelectorAll('.hero img');
    let current = 0;

    function changeImage() {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }

    setInterval(changeImage, 3000);
    const listItems = document.querySelectorAll('#animatedList li');
    listItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.5}s`;
    });
    let currentIndex = 0;
    
    function moveSlide(direction) {
      const slides = document.querySelector('.slides');
      const totalSlides = document.querySelectorAll('.slide').length;
      currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
      slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
    }


