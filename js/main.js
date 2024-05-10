const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination1",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
});



const anchors = document.querySelectorAll('button[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
};

const swiperStages = new Swiper(".stages-swiper", {
  slidesPerView: 1,
  direction: "horizontal",
  loop: false,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});

const swiperMembers = new Swiper(".members-swiper", {
  slidesPerView: 1,
  direction: "horizontal",
  loop: false,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination2",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});


