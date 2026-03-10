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
    const split = SplitText.create(".movetext", { type: "chars" });

    gsap.from(split.chars, {
        y: -200,
        opacity: 0,
        stagger: 0.04,
        duration: 1.2,
        ease: "bounce.out"
    });
});