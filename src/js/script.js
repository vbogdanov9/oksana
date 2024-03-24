const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    speed: '1000',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,      
      renderBullet: function (index, className) {
      return '<div class="' + className + '"><div class="dot"></div></div>';
      },
    },

    // autoplay: {
    //   delay:	3000,
    //   pauseOnMouseEnter: true,
    //   disableOnInteraction:	false,
    // },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  const cases_swiper = new Swiper('.cases__swiper', {
    slidesPerView: 3,
    speed: 400,
    spaceBetween: 85,
    navigation: {
      nextEl: ".cases__button-next",
      prevEl: ".cases__button-prev",
    },
  });


var service_item = document.getElementsByClassName("service__item");
// var plus = document.getElementsByClassName("plus_frame");
var i;

for (i = 0; i < service_item .length; i++) {
  service_item[i].addEventListener("click", function() {

    this.classList.toggle("service__item_active");
  

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
  });
}


// let service_items = document.querySelectorAll(".service_item");
// service_items.forEach(service_item => {
//     let plus = service_item.querySelector(".plus_frame");
//      plus.addEventListener("click", () => service_item.classList.toggle("service__item_active"));
// });