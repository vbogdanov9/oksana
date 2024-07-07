
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    speed: '1000',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      // clickable: true,      
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
  });

  const cases_swiper = new Swiper('.cases__swiper', {
    slidesPerView: 3,
    speed: 400,
    navigation: {
          nextEl: ".cases__button-next",
          prevEl: ".cases__button-prev",
        },
        breakpoints: {
      // when window width is >= 1441px
      1441: {
        spaceBetween: 85
      },
      // when window width is >= 1280px
      1280: {
        spaceBetween: 32,
      },
      // when window width is >= 768px
      768: {
        spaceBetween: 16,
      },
      // when window width is >= 0px
      0: {
        spaceBetween: 32,
      },
    }
  });


window.addEventListener('DOMContentLoaded', () => {


// скрываем и показываем элементы блока  service
// const OPENSPEED задаем скорость открытия содержимого элементов в блоке services, как быстро открывает, количество пикселей за секунду
const PX_PER_SEC = 200;

const serviceItems = [ ...document.getElementsByClassName("service__item")];

serviceItems.forEach(serviceItem => {
    const plus = serviceItem.querySelector(".plus");   
    plus.addEventListener("click", (e,) => {
      e.preventDefault();
      const frame = serviceItem.querySelector(".descr-frame");

      // рассчитываем длительность открывания-закрывания на основании содержимого, чтобы скорость открытия была одинаковая  с разным объемом текста
      frame.style.transitionDuration = `${parseInt(1000 * frame.scrollHeight / PX_PER_SEC)}ms`;

      //скрываем или показываем содержимое - текст элементов в блоке  service
      if (frame.clientHeight == 0) {
        frame.style.maxHeight = frame.scrollHeight +'px'
      } else {
        frame.style.maxHeight = 0;
      }

     // классом здесь меняем по сути только крестик      
      serviceItem.classList.toggle("service__item_active");
    })
  })

  //скрываем и показываем содержимое текстовых отзывов
  const textReviews = document.querySelectorAll('.review-text');
  textReviews.forEach (review => {
    const link = review.querySelector("a");
    link.addEventListener("click", (e,) => {
      e.preventDefault();
      review.classList.toggle("review-text_active");  
    })
  })



  

})




