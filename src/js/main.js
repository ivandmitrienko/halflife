new Swiper(".mySwiper", {
    slidesPerView: 6,
    centeredSlides: true,
    spaceBetween: 18,
    navigation: {
      nextEl: ".swiper-button-next", 
      prevEl: ".swiper-button-prev",
    },
  });

  new Swiper(".mySwiper2", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next", 
      prevEl: ".swiper-button-prev",
    },
  });