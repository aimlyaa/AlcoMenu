let clicked = false;
// переменная для ползунка цены
var Slider = $("input.slider").slider();
// булевая переменная проверки фулскрина фотографии вина
let imageFullscreen = false; 
// список для корректной работы фильтра
let selected = [];
	// главный вертикальный свайпер
    var swiperH = new Swiper('.swiper-container-h', {
    	direction: 'vertical',
        pagination: '.swiper-pagination-h',
		paginationClickable: true,
        spaceBetween: 0,
		grabCursor:true,
		shortSwipes:false,
		longSwipesRatio:0.2,
		longSwipesMs:50,
		centeredSlides: true,
	});
	// свайпер параметров вина
    var swiperV = new Swiper('.swiper-container-v', {
        direction: 'horizontal',
        nested: true,
		effect: 'slide',
		hashNavigation:true,
		spaceBetween: 0,
		grabCursor:true,
		shortSwipes:false,
		longSwipesRatio:0.2,
		longSwipesMs:50,
		centeredSlides: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
		on: {
		slideChange: function () {
			setTimeout(sync_slide, 1,this.activeIndex);
			headerName();
		},
		},
	});
	// свайпер описания вина
	var swiperV_about = new Swiper('.swiper-container-v-about', {
	direction: 'horizontal',
	nested: true,
	effect: 'slide',
	spaceBetween: 0,
	grabCursor:true,
	shortSwipes:false,
	longSwipesRatio:0.2,
	longSwipesMs:50,
	centeredSlides: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	on: {
	slideChange: function () {
			setTimeout(sync_slide, 1,this.activeIndex);
	},
	init: function () {
		headerName();
	},
	},
	});
// ползунок цены
$("#ex2").slider({});
$("#ex2").slider();
$("#ex2").on("slide", function(slideEvt) {
	$("#ex2SliderVal").text(slideEvt.value[0]);
});
$("#ex2").on("slide", function(slideEvt) {
	$("#ex2SliderVal2").text(slideEvt.value[1]);
});

function headerName(){
	var wineName = $('#'+"name"+ swiperV.activeIndex.toString(10)).text();
	$('#headerName').html( wineName );
};

// синхронизация слайда параметров вина с его описанием при свайпе
function sync_slide(new_slide){
	clicked = false;
	console.log("clicked " + new_slide);
	console.log("Showed " + swiperV.activeIndex);
	if(swiperV.activeIndex != new_slide){
		swiperV.slideTo(new_slide);
	}
	if(swiperV_about.activeIndex != new_slide){
		swiperV_about.slideTo(new_slide);
	}
	
};
//Анимация развертки и свертки фотографии
$( window ).click(function(){
    if (imageFullscreen){
		$(".alco-photo").animate({width: "40vw"});
        setTimeout(function(){$(".alco-par").animate({opacity:"1"});}, 200);
        setTimeout(function(){imageFullscreen = false;}, 100);
    }
});
$(".alco-photo").click(function(){
    if (!imageFullscreen){
        setTimeout(function(){$(".alco-photo").animate({width: "90vw"});}, 200);
		$(".alco-par").animate({opacity:"0"});
		$(".alco-about").animate({opacity:"1"});
        setTimeout(function(){imageFullscreen = true;}, 100);
    }
    else{
        $(".alco-photo").animate({width: "40vw"});
        setTimeout(function(){$(".alco-par").animate({opacity:"1"});}, 200);
        setTimeout(function(){imageFullscreen = false;}, 100);
    }
});
$(".arrow-up").click(function(){
    swiperH.slideTo(0);
});
$(".arrow-down").click(function(){
    swiperH.slideTo(1);
});
// переход к нужному вину из каталога
$(".alco-card").click(function(){
	window.location.replace("index.html#"+$(this).prop('id'));
});