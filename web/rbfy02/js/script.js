$(document).ready(function () {
    $('.btn_close').on('click', function () {
        $('.skip_event').fadeOut()
    })
})


// href 속성이 '#'인 모든 'a' 태그에 대해 클릭 이벤트 추가
$('a[href="#"]').click(function (event) {
        // 기본 동작인 페이지 이동을 방지
        event.preventDefault();
        });

        /* 토글 스크립트 */
        $('.family_site > a').on('click', function () {
        $(this).toggleClass('on');
        $('.family_site > span').toggleClass('on');
    }) 
        /* 토글 스크립트 */

/* eventclose */
$('.product_list > li > a').on('click', function (e) {
    e.preventDefault();
})
/* eventclose */

/* tap */
$('.product_list li').click(function () {
    var index = $(this).index();
    console.log(index)

    $('.product_list li').removeClass('active');
    $('.product_wrap > div').removeClass('active');

    $(this).addClass('active');
    $('.product_wrap > div').eq(index).addClass('active');
});
/* tap */

var swiper = new Swiper(".rbfy_visual", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    /* navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }, */
});
