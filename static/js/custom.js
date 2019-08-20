let imageFullscreen = false; //переменная показателя фулскрина фото
let aboutFullscreen = false;
let menuShowed = false;
let catalogShowed = false;
let filterParamsShowed = false;
//Инициализация слайдера
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    preloadImages: false,
    lazy: true,
    spaceBetween: 30,
    hashNavigation:true,
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
        //setTimeout(function(){$(".full-scr").css({marginTop: '-0.17vh'})}, 350);
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
        //setTimeout(function(){$(".full-scr").css({marginTop: '-6vh'})}, 250);
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

//Отвечает за развертку и свертку фотографии
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

$("#full-cat").click(function(){
    if (!catalogShowed){
        $(".menu-catalog").show();
        $(".menu-catalog").animate({height:"101%"});
        catalogShowed = true;
    }
});
$("#sort-params").click(function(){
    if (!filterParamsShowed){
        $(".menu-filter").show();
        $(".menu-filter").animate({height:"101%"});
        filterParamsShowed = true;
    }
});