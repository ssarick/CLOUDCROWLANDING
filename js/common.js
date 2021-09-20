$(function ($) {
    'use strict';
    $(window).on('load', function () {
        if ($(".pre-loader").length > 0) {
            $(".pre-loader").fadeOut("slow");
        }
    });
})

$('.language_item').click(function (e) {
    e.stopPropagation()
    $('.language').toggleClass('opened')
});

$(window).click(function () {
    $('.language').removeClass('opened')
})

$(document).ready(() => {
    $('#myVideo').on('ended', function () {
        this.load();
        this.play();
    });
});

var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    autoplay: {
        dalay: 1000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".VideoSwiper", {
    effect: "flip",
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function toggle() {
    let sec = document.getElementById('nav');
    sec.classList.toggle('activeB')

    let slide = document.getElementById('burger')
    slide.classList.toggle('slideFrom')

    let b1 = document.getElementById('btn-reg')
    let b2 = document.getElementById('btn-log')
    b1.classList.toggle('btn-black')
    b1.classList.toggle('btn-white')
    b2.classList.toggle('btn-black')
    b2.classList.toggle('btn-white')
}

let btn = document.querySelector('.btnSlide');
btn.onmousemove = function (e) {
    let x = e.clientX - btn.offsetLeft;
    let y = e.clientY - btn.offsetTop;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
}

var app = new Vue({
    el: '#app',
    data: {
        selected: {
            id: '1',
            image: '../img/EDO-ill.svg',
            desc: '',
            link: ''
        },
        images: [
            {
                src: ('../img/EDO-ill.svg'),
                id: '1',
                name: {
                    ru: 'ЭДО',
                    en: 'EDO',
                    uz: 'EDO',
                    uzCyr: 'EДО'
                },
                link: {
                    ru: './pages/service.html#edo',
                    en: 'serviceEn.html#edo',
                    uz: 'serviceUz.html#edo',
                    uzCyr: 'serviceUzCyr.html#edo'
                },
                text: {
                    ru: 'ЭДО - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: '',
                    uzCyr: ''
                }
            },
            {
                src: ('../img/bank-ill.svg'),
                id: '2',

                name: {
                    ru: 'Банк',
                    en: 'Bank',
                    uz: 'Bank',
                    uzCyr: 'Банк'
                },
                link: {
                    ru: './pages/service.html#bank',
                    en: 'serviceEn.html#bank',
                    uz: 'serviceUz.html#bank',
                    uzCyr: 'serviceUzCyr.html#bank'
                },
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: '',
                    uzCyr: ''
                }
            },
            {
                id: '3',
                src: ('../img/storage-ill.svg'),
                name: {
                    ru: 'Cклад',
                    en: 'Storage',
                    uz: 'E-Ombor',
                    uzCyr: 'E-Омбор'
                },
                link: {
                    ru: './pages/service.html#storage',
                    en: 'serviceEn.html#storage',
                    uz: 'serviceUz.html#storage',
                    uzCyr: 'serviceUzCyr.html#storage'

                },
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: '',
                    uzCyr: ''
                }
            },
            {
                id: '4',
                src: ('../img/hr-ill.svg'),
                name: {
                    ru: 'Кадры',
                    en: 'HR',
                    uz: 'HR',
                    uzCyr: 'HR'
                },
                link: {
                    ru: './pages/service.html#hr',
                    en: 'serviceEn.html#hr',
                    uz: 'serviceUz.html#hr',
                    uzCyr: 'serviceUzCyr.html#hr'

                },
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: '',
                    uzCyr: ''
                }
            },
            {
                id: '5',
                src: ('../img/accounting-ill.svg'),
                name: {
                    ru: 'Бухгалтерия',
                    en: 'Accounting',
                    uz: 'Buxgalteriya',
                    uzCyr: 'Бухгалтерия'
                },
                link: {
                    ru: './pages/service.html#accounting',
                    en: 'serviceEn.html#accounting',
                    uz: 'serviceUz.html#accounting',
                    uzCyr: 'serviceUzCyr.html#accounting'

                },
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: '',
                    uzCyr: ''
                }
            },
            {
                id: '6',
                src: ('../img/statistics-ill.svg'),
                name: {
                    ru: 'Статистика',
                    en: 'Statistics',
                    uz: 'Statistika',
                    uzCyr: 'Статистика'
                },
                link: {
                    ru: './pages/service.html#statistics',
                    en: 'serviceEn.html#statistics',
                    uz: 'serviceUz.html#statistics',
                    uzCyr: 'serviceUzCyr.html#statistics'

                },
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: '',
                    uzCyr: ''
                }
            },
            {
                id: '7',
                src: ('../img/soliq-ill.svg'),
                name: {
                    ru: 'Налоги',
                    en: 'Taxes',
                    uz: 'Soliq',
                    uzCyr: 'Солиқ'
                },
                link: {
                    ru: './pages/service.html#soliq',
                    en: 'serviceEn.html#soliq',
                    uz: 'serviceUz.html#soliq',
                    uzCyr: 'serviceUzCyr.html#soliq'

                },
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: '',
                    uzCyr: ''
                }
            },
            {
                id: '8',
                src: ('../img/1c-ill.svg'),
                name: {
                    ru: '1C Интеграция',
                    en: '1C Integration',
                    uz: '1С Integratsiya',
                    uzCyr: '1C Интеграция'
                },
                link: {
                    ru: './pages/service.html#1c',
                    en: 'serviceEn.html#1c',
                    uz: 'serviceUz.html#1c',
                    uzCyr: 'serviceUzCyr.html#1c'

                },
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: '',
                    uzCyr: ''
                }
            },
            {
                id: '9',
                src: ('../img/msfo-ill.svg'),
                name: {
                    ru: 'МСФО',
                    en: 'MSFO',
                    uz: 'MSFO',
                    uzCyr: 'МСФО'
                },
                link: {
                    ru: './pages/service.html#msfo',
                    en: 'serviceEn.html#msfo',
                    uz: 'serviceUz.html#msfo',
                    uzCyr: 'serviceUzCyr.html#msfo'

                },
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: '',
                    uzCyr: ''
                }
            }
        ],
    },
    methods: {
        updateImg: function (src, text, link, id) {
            let items = document.getElementsByClassName("provided-item");
            let actives = document.getElementsByClassName('active-item');
            for (i = 0; items.length > i; i++) {
                items[i].onclick = function() {
                    let currentActive = actives[0];
                    if (currentActive)
                        currentActive.classList.remove("active-item");
                    if (currentActive !== this)
                        this.classList.add("active-item");
                };
            }
            this.selected.id = id
            this.selected.image = src
            this.selected.desc = text
            this.selected.link = link
        }
    }
})



