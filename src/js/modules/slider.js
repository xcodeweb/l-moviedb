import Swiper from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

Swiper.use(Pagination);
Swiper.use(Autoplay);
Swiper.use(Navigation);

const sliderTop = new Swiper(".hero__slider", {
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const sliderBests = new Swiper(".bests .holder__slider", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    nextEl: ".bests-button-next",
    prevEl: ".bests-button-prev",
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 3
    },
    320: {
      slidesPerView: 2
    }
  },
});

const sliderNew = new Swiper(".new .holder__slider", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    nextEl: ".new-button-next",
    prevEl: ".new-button-prev",
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 3
    },
    320: {
      slidesPerView: 2
    }
  },
});

const sliderPopular = new Swiper(".popular__slider", {
  loop: false,
  navigation: {
    nextEl: ".popular__slider .swiper-button-next",
    prevEl: ".popular__slider .swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
