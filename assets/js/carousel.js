$(document).ready(function() {
    const $carousel = $('.carousel');
    const $prevBtn = $('#prevBtn');
    const $nextBtn = $('#nextBtn');
    const slideWidth = $('.carousel-slide').outerWidth();
    let currentSlide = 0;
  
    $prevBtn.click(function() {
      currentSlide = (currentSlide - 1 + $carousel.children().length) % $carousel.children().length;
      updateCarousel();
    });
  
    $nextBtn.click(function() {
      currentSlide = (currentSlide + 1) % $carousel.children().length;
      updateCarousel();
    });
  
    function updateCarousel() {
      const translateX = -currentSlide * slideWidth;
      $carousel.css('transform', `translateX(${translateX}px)`);
    }
  });
  