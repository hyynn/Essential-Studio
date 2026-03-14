// 검색창
$('.search').click(function () {
    $('.visual').toggleClass('on');
    $('.search_box').fadeToggle();
});

$('.btn_close').click(function () {
    $('.visual').removeClass('on');
    $('.search_box').fadeOut(300);
    return false;
});

// GSAP SplitText 비주얼 슬로건 애니메이션
gsap.registerPlugin(SplitText);

window.addEventListener('load', function () {
    const split1 = SplitText.create(".swiper-slide:first-child .movetext", { type: "chars" });
    const split2 = SplitText.create(".swiper-slide:nth-child(2) strong", { type: "chars" });

    gsap.from(split1.chars, {
        y: -200,
        opacity: 0,
        stagger: 0.04,
        duration: 1.2,
        ease: "bounce.out"
    });
});