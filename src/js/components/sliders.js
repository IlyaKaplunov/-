import Swiper, { Navigation, Pagination, Thumbs, FreeMode, autoHeight} from "swiper"; 
Swiper.use([Navigation, Pagination, Thumbs, FreeMode, autoHeight]); 

const gallerySlider = document.querySelector('.gallery__images-slider');

if (gallerySlider) {
  const workSlider = new Swiper('.gallery__images-thumbs', {
    slidesPerView: 7,
    
    freeMode: true,
    watchSlidesProgress: true,
    /* breakpoints: {
      768: {
        slidesPerView: 6.5,
      },
      576: {
        slidesPerView: 5.5,
      }
    } */
  });
  const gallerySliderThumbs = new Swiper(gallerySlider, {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".gallery__images-switch--next",
      prevEl: ".gallery__images-switch--prev",
    },
    thumbs: {
      swiper: workSlider,
    },
  });
}

const lettersSlider = new Swiper(".letters__slider", { 
  speed: 600,
  slidesPerView: 1, 
  loop: true,
  navigation: { 
    nextEl: ".letters__switch--next", 
    prevEl: ".letters__switch--prev", 
  },
  breakpoints: {
    1100: {
      slidesPerView: 3,
    },
    725: {
      slidesPerView: 2.5,
      
      
    },
    414: {
      slidesPerView: 1.2,
    },
  }
});

const cardSlider = new Swiper(".card-product__slider", { 
  speed: 600,
  slidesPerView: 1, 
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  }
});

const newsSlider = document.querySelector('.news__body, .about-blog__body');

let myNewsSwiper;

function mobileSlider() {
	if (window.innerWidth <= 650 && newsSlider.dataset.mobile == 'false') {
		myNewsSwiper = new Swiper(newsSlider, {
			slidesPerView: 1.2,
      freeMode: true,
      autoHeight: true,
			slideClass: 'news-articles__item, .about-blog__item',
		});

		newsSlider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 650) {
		newsSlider.dataset.mobile = 'false';
		if (newsSlider.classList.contains('swiper-initialized')) {
			myNewsSwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});