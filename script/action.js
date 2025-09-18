$('.search').click(function () {
    $('.visual').toggleClass('on');
    $('.search_box').fadeToggle();
    // 위에서 내려오게 하고 싶으면 .search_box의 top 값을 -500정도 주고 .on했을때 transition으로 내려오게 하면 됨
})

$('.btn_close').click(function () {
    $('.visual').removeClass('on');
    $('.search_box').fadeOut(300, function () {
        $('.serch_box').css({ top: '' })
    })
    k = 0;
    return false
})


gsap.registerPlugin(SplitText);

let animationPlayed = false; // 애니메이션 실행 체크

window.addEventListener('load', function () {
    if (!animationPlayed) {
        let split = new SplitText(".textbox strong", { type: "chars" });

        gsap.from(split.chars, {
            y: -200,
            opacity: 0,
            stagger: 0.04,
            duration: 1.2,
            ease: "bounce.out"
        });

        animationPlayed = true; // 실행했다고 표시
    }
});
