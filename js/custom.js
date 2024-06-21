$(function () {
  // 뉴스 보기
  $(".news-view").click(function () {
    $(".pluse").not($(this).find(".pluse")).removeClass("minus");
    $(".news-content")
      .not($(this).find(".news-content"))
      .removeClass("li-view");

    $(this).find(".news-content").toggleClass("li-view");
    $(this).find(".pluse").toggleClass("minus");
  });

  // 채팅버튼
  $("#chat-btn").click(function () {
    $(".chat-inner").toggleClass("view");
    $(".chat-view").toggleClass("no-view");
  });
  $("#close-btn").click(function () {
    $(".chat-inner").removeClass("view");
    $(".chat-view").removeClass("no-view");
  });

  // 숫자 증가
  const numbergrow = document.getElementById("number-grow");
  let startNumber = 0;
  const endNumber = 98;

  const grow = setInterval(() => {
    startNumber++;
    numbergrow.textContent = startNumber;

    if (startNumber >= endNumber) {
      clearInterval(grow);
    }
  }, 20);

  // scroll - navbar
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $("header").addClass("nav-active");
    } else {
      $("header").removeClass("nav-active");
    }
  });

  // menu 버튼
  $(".menu").click(function () {
    $(this).toggleClass("active");
    $(".gnb").toggleClass("menu-view");
  });
  $("section, .gnb a").click(function () {
    $(".menu").removeClass("active");
    $(".gnb").removeClass("menu-view");
  });

  // Project 이미지 슬라이드
  $(".project-photo").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssFase: "linear",
  });

  // plan 슬라이드
  $(".history-slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Slick.js : project
  $(".project-photo").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssFase: "linear",
  });
});
