const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
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

    autoplay: {
      delay:	3000,
      pauseOnMouseEnter: true,
      disableOnInteraction:	false,
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });