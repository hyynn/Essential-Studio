/* GSAP SplitText 등록 */
gsap.registerPlugin(SplitText);


/* 검색창 */
$('.search').on('click', function () {
    $('.visual').toggleClass('on');
    $('.search-box').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.visual').removeClass('on');
    $('.search-box').fadeOut(300);
});


/* 햄버거 메뉴 */
$('.hamburger').on('click', function (e) {
    e.stopPropagation();
    $(this).toggleClass('active');
    $('header .pc-nav').toggleClass('open');
});

/* 헤더 외부 클릭 시 메뉴 닫기 */
$(document).on('click', function (e) {
    if (!$(e.target).closest('header').length) {
        $('header .pc-nav').removeClass('open');
        $('.hamburger').removeClass('active');
    }
});


/* Swiper - 비주얼 */
const swiperVisual = new Swiper('.visual', {
    loop: true,
    spaceBetween: 30,
    effect: 'fade',
    autoplay: {
        delay: 3100,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.visual .swiper-pagination',
        clickable: true,
    },
});


/* Swiper - Section 1 */
const swiperPart1 = new Swiper('.part1-slidebox', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.section1 .btn-right',
        prevEl: '.section1 .btn-left',
    },
});


/* Swiper - Section 3 — navigation 없이 autoplay + pagination */
const swiperPart2 = new Swiper('.part2-slidebox', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.part2-slidebox .swiper-pagination',
        clickable: true,
    },
});

/* Section 3 — 좌우 클릭으로 슬라이드 이동 */
$('.section3 .part2-slidebox').on('click', function (e) {
    if ($(e.target).closest('.swiper-pagination-bullet').length) return;
    const half = $(this).width() / 2;
    const clickX = e.clientX - $(this).offset().left;

    if (clickX < half) {
        swiperPart2.slidePrev();
    } else {
        swiperPart2.slideNext();
    }
});


/* SplitText 비주얼 슬로건 — 페이지 최초 진입 시 1회만 실행 */
/* 슬라이드1/2 모두 split하여 DOM 구조 동일하게 유지 — 슬라이드2는 애니메이션 없이 제자리 */
window.addEventListener('load', function () {
    const slides = document.querySelectorAll('.visual .swiper-slide:not(.swiper-slide-duplicate)');
    if (!slides.length) return;

    const text1 = slides[0].querySelector('h2');
    const text2 = slides[1] ? slides[1].querySelector('h2') : null;

    if (!text1) return;

    const split1 = SplitText.create(text1, { type: 'chars' });
    if (text2) SplitText.create(text2, { type: 'chars' });

    gsap.from(split1.chars, {
        y: -200,
        opacity: 0,
        stagger: 0.04,
        duration: 1.2,
        ease: 'bounce.out',
    });
});

/* 커스텀 커서 — 물방울 */
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', function (e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', function () {
    cursor.classList.add('click');
    follower.classList.add('click');
});

document.addEventListener('mouseup', function () {
    cursor.classList.remove('click');
    follower.classList.remove('click');
});

/* 터치 디바이스에서는 기본 커서 복원 */
if ('ontouchstart' in window) {
    document.head.insertAdjacentHTML('beforeend', '<style>* { cursor: auto !important; }</style>');
    cursor.style.display = 'none';
    follower.style.display = 'none';
}

/* 카드 물방울 효과 — 마우스 위치 기반 */
$(document).on('mousemove', '.vision-card, .client-card', function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    $(this).css('--x', x + 'px').css('--y', y + 'px');
});