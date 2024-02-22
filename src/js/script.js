const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    grabCursor: true,
  
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
      // draggable: true,
    },

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    speed: '1000',
    

    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },


    // pagination: {
    //   el: '.swiper-progressbar',
    //   clickable: true,
    //   type: 	'progressbar',
    // },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar

  });