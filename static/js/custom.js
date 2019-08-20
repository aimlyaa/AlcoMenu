//<!doctype Ржака Говнокод ПриколыПрограммистов2019 КакНеНужно DNRY?НеНеслышал>
//переменная показателя фулскрина фото
let imageFullscreen = false; 
//переменная показателя фулскрина описания
let aboutFullscreen = false;
//переменная показателя показа меню
let menuShowed = false;
//переменная показателя показа каталога
let catalogShowed = false;
//переменная показателя показа фильтра
let filterParamsShowed = false;
//Инициализация слайдера с описанием
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    preloadImages: false,
    lazy: true,
    spaceBetween: 30,
    grabCursor:true,
    shortSwipes:false,
    longSwipesRatio:0.2,
    longSwipesMs:50,
    on: {
        init: function()
        {
            resize
        },
        transitionEnd: function()
        {
            console.log('slide changed');
            resize();
        },
    }
});
//Инициализация слайдера-каталога
var swiper = new Swiper('.catalog-swiper-container', {
    slidesPerView: 3,
    preloadImages: false,
    lazy: true,
    slidesPerColumn: 2,
    spaceBetween: 30,
    breakpoints: {
        2160: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
        1440: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        1200: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
//Функция, выполняющая ресайз окна "Описание"
function resize(){
    if (!catalogShowed){
        $('.alco-about').height(function(index, height) {
            return window.innerHeight - $(this).offset().top - $( window ).height()*0.0325;
});
    }
    else{
        $('.alco-about').height(function(index, height) {
            return window.innerHeight*2 - $(this).offset().top - $( window ).height()*0.0325;
        });
    }
};
//Функции, срабатывающая при загрузке страницы.
$( document ).ready(function() {
    $('.alco-about').height(function(index, height) {
        setTimeout(resize, 10);
    });
    $(".back").hide();
    $(".close-button").hide();
    $(".menu").hide();
    $(".menu-left-side").hide();
    $(".menu-catalog").hide();
    $(".menu-filter").hide();
});
//Эвент, вызывающий resize при измении размеров окна
$( window ).resize(function() {
    resize();
  });
//Анимация кнопки полного экрана "Описание"
$(".full-scr").click(function(){
    if (!aboutFullscreen){
        $(".alco-photo").animate({opacity: "0"});
        setTimeout(function(){$(".alco-photo").hide();}, 200);
        $('.fscr').attr('src','static/media/index/back.png');
        setTimeout(function(){$(".alco-about").animate({width: "98%"});}, 200);
        setTimeout(function(){$(".alco-title").animate({width: "98%"});}, 200);
        setTimeout(function(){$(".back").show();}, 500);
        setTimeout(resize, 400);
        aboutFullscreen = true;
    }
    else
    {
        $(".alco-title").animate({width: "56.5vw"});
        $(".alco-about").animate({width: "56.5vw"});
        $('.fscr').attr('src','static/media/index/full-scr.png');
        $(".back").hide();
        setTimeout(function(){$(".alco-photo").show();}, 400);
        setTimeout(function(){$(".alco-photo").animate({opacity: "1"});}, 300);
        setTimeout(resize, 300);
        aboutFullscreen = false;
    }
});
//Анимация кнопки нормального режима "Описание"
$(".back").click(function(){
    $(".alco-title").animate({width: "56.5vw"});
    $(".alco-about").animate({width: "56.5vw"});
    $(".back").hide();
    setTimeout(function(){$(".alco-photo").show();}, 400);
    setTimeout(function(){$(".alco-photo").animate({opacity: "1"});}, 300);
    setTimeout(resize, 300);
});
//Анимация развертки и свертки фотографии
$(".alco-photo").click(function(){
    if (!imageFullscreen){
        $(".alco-title").animate({opacity:"0"});
        $(".alco-about").animate({opacity:"0"});
        setTimeout(function(){$(".alco-photo").animate({width: "98%"});}, 100);
        setTimeout(function(){$(".close-button").show();}, 200);
        $(".full-scr").hide();
        $(".back").hide();
        imageFullscreen = true;
    }
    else{
        $(".close-button").hide();
        $(".alco-photo").animate({width: "40vw"});
        $(".alco-title").show()
        setTimeout(resize(), 200);
        setTimeout(function(){$(".alco-title").animate({opacity:"1"});}, 200);
        setTimeout(function(){$(".alco-about").animate({opacity:"1"});}, 200);
        $(".full-scr").show();
        $(".back").hide();
        setTimeout(function(){$(".close-button").show();}, 700);
        setTimeout(function(){imageFullscreen = false;}, 100);
        setTimeout(resize, 400);
    }
});
//Анимация кнопки "меню"
$(".menu-button").click(function(){
    if (!menuShowed){
        $(".menu").show();
        $(".menu-left-side").show();
        $(".menu").animate({width:"100%"});
        $(".menu-left-side").animate({width:"50%",height:"100%"});
        menuShowed = true;
    }
    else{
        $(".menu").animate({width:"0"});
        $(".menu-left-side").animate({width:"0%",height:"0%"});
        setTimeout(function(){$(".menu").hide();}, 400);
        setTimeout(function(){$(".menu-left-side").hide();}, 400);
        menuShowed = false;
    }
});
//Анимация показа каталога
$("#full-cat").click(function(){
    if (!catalogShowed){
        $(".menu-catalog").show();
        $(".menu-catalog").animate({height:"99.9vh"});
        $(".catalog-swiper-container").animate({height:"99.9vh"});
        //$(".menu-filter").animate({width:"0"});
        setTimeout(function(){$(".swiper-container").hide();}, 400);
        $(".menu-filter").animate({height:"0%"});
        setTimeout(function(){$(".menu-filter").hide();}, 400);
        $(".swiper-container").animate({height:"0%"});
        $(".menu").animate({width:"0"});
        $(".menu").animate({marginTop:"-100vh"});
        setTimeout(function(){$(".menu").hide();}, 300);
        $(".menu-left-side").animate({width:"0%",height:"0%"});
        $(".menu-left-side").animate({marginTop:"-100vh"});
        setTimeout(function(){$(".menu-left-side").hide();}, 300);
        $(".menu-button").css({marginTop:"-99vh"});
        filterParamsShowed = false;
        menuShowed = false;
        catalogShowed = true;
    }
    else{
        $(".menu-filter").animate({height:"0%"});
        setTimeout(function(){$(".menu-filter").hide();}, 400);
        $(".menu").animate({width:"0"});
        setTimeout(function(){$(".menu").hide();}, 400);
        $(".menu-left-side").animate({width:"0%",height:"0%"});
        setTimeout(function(){$(".menu-left-side").hide();}, 400);
        menuShowed = false;
    }
});
//Анимация показа фильтра
$("#sort-params").click(function(){
    if (!filterParamsShowed){
        if (catalogShowed){
            $(".menu-button").animate({marginTop:"1vh"});
            $(".menu").animate({marginTop:"0vh",width:"0"});
            $(".menu-left-side").animate({marginTop:"0vh",width:"0%",height:"0%"});
        }
        else{
            $(".menu").animate({width:"0"});
            $(".menu-left-side").animate({width:"0%",height:"0%"});
            setTimeout(function(){$(".menu").hide();}, 400);
            setTimeout(function(){$(".menu-left-side").hide();}, 400);
            menuShowed = false;    
        }
        $(".menu-filter").show();
        $(".menu-filter").animate({height:"100vh",width:"100wv"})
        $(".menu-catalog").animate({height:"0%"});
        setTimeout(function(){$(".menu-catalog").hide();}, 385);
        setTimeout(function(){$(".swiper-container").hide();}, 400);
        $(".swiper-container").animate({height:"0%"})
        $(".menu").animate({height:"0"});
        $(".menu-left-side").animate({height:"0%"});
        setTimeout(function(){$(".menu").hide();}, 300);
        setTimeout(function(){$(".menu-left-side").hide();}, 300);
        menuShowed = false;
        filterParamsShowed = true;
        catalogShowed = false;
    }
    else{
        $(".menu").animate({width:"0"});
            $(".menu-left-side").animate({width:"0%",height:"0%"});
            setTimeout(function(){$(".menu").hide();}, 400);
            setTimeout(function(){$(".menu-left-side").hide();}, 400);
            menuShowed = false;
    }
});
//Анимация показа нужного вина с описанием, после клика на соответсвующее вино в каталоге.
$(".catalog-slider").click(function(){
    catalogShowed = false;
    $(".menu-catalog").animate({height:"0%"});
    setTimeout(function(){$(".menu-catalog").hide();}, 385);
    $(".menu-catalog").animate({height:"0%"});
    $(".swiper-container").show()
    $(".swiper-container").animate({height:"99.9vh"});
    mySwiper.slideTo($(this).attr('id'));
    setTimeout(resize, 380);
    $(".menu-button").animate({marginTop:"1vh"});
    $(".menu").animate({marginTop:"0vh",width:"0"});
    $(".menu-left-side").animate({marginTop:"0vh",width:"0%",height:"0%"});
});